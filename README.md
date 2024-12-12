# API RESTful de Administración de Mapas y Usuarios

## Descripción

Este proyecto consiste en una aplicación backend que permite gestionar una base de datos de mapas y usuarios. Incluye funcionalidades de registro, autenticación y operaciones CRUD en mapas.

## Características

- Registro y autenticación de usuarios con contraseñas encriptadas.
- Operaciones CRUD (crear, leer, actualizar, eliminar) en mapas.
- Autenticación mediante tokens JWT para proteger endpoints sensibles.
- Validación de datos usando `Joi` y middleware personalizado.
- Seguridad mejorada mediante `Helmet`.

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB** (con Mongoose)
- **JWT** para autenticación
- **Helmet** para seguridad
- **Joi** para validación

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/cotitorrilla/api_maps.git
   cd api_maps
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` con las siguientes variables:

   ```env
   PORT=3000
   MONGO_URI=tu_conexion_mongo
   JWT_SECRET=tu_secreto_jwt
   ```

4. Inicia la aplicación:

   ```bash
   npm start
   ```

## Rutas de la API

### Usuarios

| Método | Endpoint          | Descripción                       |
|--------|-------------------|-----------------------------------|
| POST   | `/api/users/register` | Registra un nuevo usuario.       |
| POST   | `/api/users/login`    | Inicia sesión y devuelve un token.|

### Mapas

| Método | Endpoint          | Descripción                          |
|--------|-------------------|--------------------------------------|
| GET    | `/api/maps`        | Obtiene todos los mapas.         |
| GET    | `/api/maps/:id`    | Obtiene un mapa por su ID.      |
| POST   | `/api/maps`        | Crea un nueva mapa (autenticado).|
| PUT    | `/api/maps/:id`    | Actualiza un mapa (autenticado).|
| DELETE | `/api/maps/:id`    | Elimina un mapa (autenticado).  |


## Seguridad

La API implementa `Helmet` para mejorar la seguridad estableciendo cabeceras HTTP seguras.
