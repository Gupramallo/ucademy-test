# Sistema de Gestión de Alumnos - Ucademy

## Descripción

Sistema web completo para la gestión de alumnos en academias educativas. La aplicación permite visualizar, crear, editar y gestionar el estado de los usuarios de manera eficiente y escalable.

## Requisitos previos

- **Node.js** v18 o superior
- **npm** v8 o superior
- **MongoDB** v6 o superior

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone git@github.com:UcademyTech/tech-assessment.git
   cd ucademy-test
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar MongoDB**
   ```bash
   # Crear directorio para la base de datos (si no existe)
   mkdir -p apps/backend/database
   ```

## Ejecución del proyecto

### Opción 1: Con Tilt (Recomendado)

Si tienes [Tilt](https://tilt.dev/) instalado, puedes levantar todo el stack con un solo comando:

```bash
tilt up
```

Esto iniciará automáticamente MongoDB, el backend y el frontend. Puedes monitorear el estado de todos los servicios en la interfaz web de Tilt en [http://localhost:10350](http://localhost:10350).

**Instalación de Tilt:**

- **macOS**: `brew install tilt-dev/tap/tilt`
- **Linux/Windows**: Ver [documentación oficial](https://docs.tilt.dev/install.html)

### Opción 2: Desarrollo manual

1. **Iniciar MongoDB**

   ```bash
   npm run start:mongo
   ```

2. **Iniciar el backend** (en una nueva terminal)

   ```bash
   npm run start:backend
   ```

3. **Iniciar el frontend** (en otra terminal)
   ```bash
   npm run start:frontend
   ```

### URLs de la aplicación

- **Frontend**: [http://localhost:4200](http://localhost:4200)
- **Backend API**: [http://localhost:3000](http://localhost:3000)
- **MongoDB**: puerto 27018

## Scripts disponibles

```bash
npm run start:frontend     # Inicia el frontend
npm run start:backend      # Inicia el backend
npm run start:mongo        # Inicia MongoDB
```

## Funcionalidades implementadas

### Gestión de usuarios

- **Lista de alumnos**: Vista tabular con paginación
- **Perfil de alumno**: Modal con información detallada
- **Crear alumno**: Formulario completo con validaciones
- **Editar alumno**: Modificación de datos existentes
- **Activar/desactivar**: Control del estado de la cuenta

## Arquitectura de componentes

El proyecto sigue el patrón **Atomic Design**:

- **Atoms**: Botones, campos de entrada, chips de estado
- **Molecules**: Cabeceras, campos de formulario, paginación
- **Organisms**: Tablas, formularios, modales
- **Templates**: Layouts base
- **Pages**: Páginas completas

## Estado de la aplicación

- **Cliente**: TanStack Query para cache y sincronización
- **Formularios**: React Hook Form con validaciones
- **Modales**: Context API para gestión de estado
- **Temas**: Material-UI theming system
