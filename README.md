Caribe Enseña Learning 

**Caribe Enseña Learning** es una plataforma e-learning desarrollada con Next.js que ofrece cursos, talleres y diplomados adaptados a las necesidades educativas de la región.

### 🎯 Propósito

La plataforma está diseñada para entregar contenido educativo estructurado a través de un enfoque modular y progresivo, enfocándose en educación para la paz, sostenibilidad y habilidades técnicas <cite />.

### 🏗️ Arquitectura Técnica

#### Stack Tecnológico
- **Framework**: Next.js con App Router
- **Autenticación**: Auth0
- **Estilos**: Bootstrap + CSS personalizado
- **Gestión de Estado**: React Context + localStorage
- **Notificaciones**: OneSignal

#### Estructura de Rutas
```
/                           # Página principal
/Cursos                     # Catálogo de cursos
/[CourseName]              # Páginas de información de cursos
/[CourseName]/Modulo-X/[number] # Secciones de módulos
``` 

### 📚 Cursos Disponibles

#### Cursos de Educación para la Paz
- **Enseñapaz**: Cátedra de paz integral con 4 módulos enfocados en construcción de paz, resolución de conflictos y ciudadanía activa

#### Cursos de Sostenibilidad
- **New Skills**: Programa de 4 módulos sobre economía verde, sostenibilidad y transición energética 

#### Cursos Técnicos
- **English Basic 1**: Curso de inglés básico A1 con 4 módulos progresivos 
- **TICA 1 & 2**: Cursos de robótica con Arduino, desde fundamentos hasta proyectos avanzados 
- **Python Project Pro**: Programación en Python desde cero hasta proyectos avanzados 
- **Poket**: Educación financiera gamificada para jóvenes de 12-18 años  

### 🔐 Sistema de Autenticación

La plataforma utiliza Auth0 para autenticación con control de acceso progresivo. Los cursos están protegidos mediante `withPageAuthRequired` que redirige a usuarios no autenticados.

### 📱 Características PWA

Configurada como Progressive Web App con:
- Manifest para instalación móvil
- Íconos optimizados
- Metadatos SEO completos

### 🎨 Componentes Principales

#### Estructura de Cursos
Todos los cursos siguen un patrón consistente usando componentes compartidos:
- `LeftColumn`: Título del curso y módulos en acordeón
- `RightColumn`: Contenido detallado y recursos
- `AccordionModulos`: Organización modular del contenido 

#### Tipos de Secciones
- `BookSection`: Contenido teórico y PDFs
- `VideoSection`: Videos educativos
- `FinalExamSection`: Evaluaciones y certificados

### 👥 Equipo

- **Gerente de Proyecto**: Camilo Galván Gómez
- **Desarrollador**: Benito Tridella Dolce

### 📧 Contacto

- **E-learning**: e-learning@caribeensena.org
- **Soporte**: e-learningsoporte@caribeensena.org
- **Donaciones**: donaciones@caribeensena.org

### 🏢 Organización

Un proyecto de **Fundación Caribe Enseña** - [caribeensena.org](https://caribeensena.org/)

---
