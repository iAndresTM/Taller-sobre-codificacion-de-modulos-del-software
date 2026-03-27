<h1 class="nombre-pagina">Recuperar cuenta</h1>
<p class="descripcion-pagina">Restablece tu contraseña escribiendo tu correo</p>

<form action="formulario" method="POST" action="/olvide">
    <div class="campo">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Tu Email" name="email">
    </div>
    <input type="submit" class="boton" value="Restablecer contraseña">
</form>

<div class="acciones">
    <a href='/'>¿Ya tienes una cuenta? Inicia sesion</a>
    <a href='/crear-cuenta'>Crear una cuenta</a>
</div>