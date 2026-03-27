# 💈 Sistema de Gestión de Barbería

Este proyecto es una aplicación web desarrollada en PHP bajo arquitectura MVC, enfocada en la gestión de usuarios para una barbería. Incluye funcionalidades de registro, autenticación, validación de datos y seguridad mediante tokens.

---

## 🚀 Ejecución del Proyecto

Para ejecutar el proyecto en entorno local:

1. Clonar el repositorio o descargar el proyecto.
2. Abrir una terminal e ir a la carpeta public con ````cd public````.
3. Ejecutar el siguiente comando:

  ```` php -S localhost:3000````

4. Abrir el navegador en la siguiente URL:

   http://localhost:3000/

---

## 🔐 Funcionalidades Implementadas

### 1. Hasheo de contraseñas
Las contraseñas de los usuarios son encriptadas antes de almacenarse en la base de datos, garantizando mayor seguridad.

---

### 2. Validación por token
Al momento del registro:
- Se genera un token único por usuario
- Se envía un correo de confirmación
- El usuario debe confirmar su cuenta mediante el enlace recibido

Esto permite evitar registros falsos o automatizados.

---

### 3. Validación de formulario
El sistema valida los datos ingresados por el usuario:

- Campos obligatorios
- Formato de correo válido
- Contraseña con mínimo 6 caracteres

En caso de error, se muestran mensajes de alerta al usuario.

---

### 4. Verificación de usuario existente
Antes de registrar un nuevo usuario:
- Se consulta la base de datos
- Si el correo ya existe, se bloquea el registro

Mensaje mostrado:
"El usuario ya está registrado"

---

## 🧪 Pruebas Realizadas

Se realizaron pruebas funcionales enfocadas en el proceso de registro de usuarios:

- Verificación de almacenamiento seguro de contraseñas
- Validación de tokens de confirmación
- Validación de datos en formularios
- Verificación de duplicidad de usuarios

Estas pruebas garantizan el correcto funcionamiento del sistema.

---

## 🛠️ Tecnologías utilizadas

- PHP
- MySQL
- HTML / CSS
- Arquitectura MVC

---

## 📌 Estado del proyecto

El proyecto se encuentra en desarrollo, actualmente enfocado en la gestión de usuarios y autenticación segura.

---

