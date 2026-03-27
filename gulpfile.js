import path from 'path'
import fs from 'fs'
import { glob } from 'glob'
import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import terser from 'gulp-terser'
import sharp from 'sharp'
import plumber from 'gulp-plumber'

const sass = gulpSass(dartSass)



const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

export function css(done) {
    src(paths.scss, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: function (err) {
                console.log('❌ Error CSS:', err.message)
                this.emit('end')
            }
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./public/build/css', { sourcemaps: '.' }))
    done()
}

export function js(done) {
    src(paths.js)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log('❌ Error JS:', err.message)
                this.emit('end')
            }
        }))
        .pipe(terser())
        .pipe(dest('./public/build/js'))
    done()
}

export async function imagenes(done) {
    try {
        const srcDir = './src/img';
        const buildDir = './public/build/img';
        const images = await glob('./src/img/**/*')

        await Promise.all(images.map(async (file) => {
            const relativePath = path.relative(srcDir, path.dirname(file));
            const outputSubDir = path.join(buildDir, relativePath);
            await procesarImagenes(file, outputSubDir);
        }));

        done()
    } catch (error) {
        console.log('❌ Error imágenes:', error.message)
        done()
    }
}

async function procesarImagenes(file, outputSubDir) {
    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true })
    }

    const baseName = path.basename(file, path.extname(file))
    const extName = path.extname(file)

    if (extName.toLowerCase() === '.svg') {
        const outputFile = path.join(outputSubDir, `${baseName}${extName}`);
        fs.copyFileSync(file, outputFile);
    } else {
        const options = { quality: 80 };

        await sharp(file).jpeg(options).toFile(path.join(outputSubDir, `${baseName}${extName}`));
        await sharp(file).webp(options).toFile(path.join(outputSubDir, `${baseName}.webp`));
        await sharp(file).avif().toFile(path.join(outputSubDir, `${baseName}.avif`));
    }
}

export function dev() {
    watch( paths.scss, css );
    watch( paths.js, js );
    watch('src/img/**/*.{png,jpg}', imagenes)
}

export default series( js, css, imagenes, dev )