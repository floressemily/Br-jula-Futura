# Brújula Futura

> Herramienta de orientación vocacional para estudiantes de bachillerato en Ecuador.

[![Deploy](https://img.shields.io/badge/deploy-pendiente-black?logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vite.dev)

---

## Descripción

**Brújula Futura** es una herramienta de orientación vocacional para estudiantes de bachillerato, especialmente pensada para jóvenes que necesitan explorar opciones académicas de forma clara, visual e interactiva.

El proyecto permite seleccionar intereses personales, realizar un test rápido de aptitudes, recibir carreras recomendadas según afinidad, comparar carreras entre sí y revisar universidades ecuatorianas con enlaces oficiales para investigar mejor cada opción.

La hipótesis del proyecto es que muchos estudiantes no tienen claridad sobre qué estudiar porque la orientación que reciben suele ser muy general. Brújula Futura propone una experiencia breve, guiada y útil para ayudar al estudiante a tomar una decisión más informada sobre su futuro académico.

---

## Integrantes y roles

| Nombre             | Rol                |
|--------------------|--------------------|
| Emily Flores       |   Product Owner    |
| Gustavo Benalcázar |    Scrum Master    |
| William Carrión    | Developer Frontend |
| Mathias Rivera     |  Developer Mobile  |

---

## Stack técnico

| Capa | Tecnología |
|------|------------|
| Frontend Web | React 19 + Vite 8 |
| Estilos | Vanilla CSS con design system propio |
| Datos simulados | Archivo `src/data/db.js` |
| Componentización | Componentes React reutilizables |
| Control de versiones | Git + GitHub |
| Validación de código | ESLint |
| Deploy | Vercel |
| App móvil | Kotlin, como parte del proyecto general |
| Diseño UI | Figma, como apoyo visual del proyecto |

> Nota: este repositorio corresponde principalmente a la aplicación web frontend. La parte móvil en Kotlin y los diseños en Figma forman parte del proyecto general, pero no necesariamente están incluidos dentro de esta misma estructura de código.

---

## Estructura del proyecto

```text
Br-jula-Futura/
├── docs/
│   └── tarea5-sprint-plan.html       # Documento HTML de planificación del sprint
│
├── public/
│   ├── favicon.svg                   # Ícono principal de la aplicación
│   └── icons.svg                     # Recursos gráficos públicos
│
├── src/
│   ├── assets/
│   │   ├── hero.png                  # Imagen usada en la interfaz
│   │   ├── react.svg                 # Recurso heredado de React/Vite
│   │   └── vite.svg                  # Recurso heredado de Vite
│   │
│   ├── components/
│   │   ├── Navbar.jsx                # Barra de navegación
│   │   ├── Hero.jsx                  # Pantalla principal de bienvenida
│   │   ├── TestSection.jsx           # Selección de intereses y test rápido
│   │   ├── CareerExplorer.jsx        # Explorador de carreras
│   │   ├── Versus.jsx                # Comparador de carreras
│   │   ├── Results.jsx               # Resultados de afinidad
│   │   ├── UniversitySection.jsx     # Universidades y enlaces informativos
│   │   ├── Footer.jsx                # Pie de página
│   │   └── components.css            # Estilos específicos de componentes
│   │
│   ├── data/
│   │   └── db.js                     # Base de datos simulada del proyecto
│   │
│   ├── App.jsx                       # Componente principal de la aplicación
│   ├── App.css                       # Estilos generales de la app
│   ├── index.css                     # Variables CSS, tipografía y reset global
│   └── main.jsx                      # Punto de entrada de React
│
├── .env.example                      # Variables de entorno de ejemplo
├── .gitignore                        # Archivos ignorados por Git
├── eslint.config.js                  # Configuración de ESLint
├── index.html                        # HTML base de Vite con metadatos SEO
├── package.json                      # Dependencias y scripts del proyecto
├── package-lock.json                 # Versiones bloqueadas de dependencias
├── vite.config.js                    # Configuración de Vite
└── README.md                         # Documentación principal
```

---

## Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/floressemily/Br-jula-Futura.git

# 2. Entrar a la carpeta del proyecto
cd Br-jula-Futura

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:5173
```

---

## Scripts disponibles

```bash
# Levantar el proyecto en modo desarrollo
npm run dev

# Generar versión de producción
npm run build

# Previsualizar la versión compilada
npm run preview

# Revisar problemas de estilo o sintaxis
npm run lint
```

---

## Flujo del PMV

El producto mínimo viable sigue este flujo:

1. **Bienvenida**  
   Pantalla inicial con la propuesta de valor: ayudar al estudiante a explorar su futuro académico.

2. **Selección de intereses**  
   El usuario elige áreas que le llaman la atención, como tecnología, creatividad, números, liderazgo, ayuda social, investigación, comunicación, organización o naturaleza.

3. **Test rápido de aptitudes**  
   El estudiante responde preguntas cortas para mejorar la precisión de las recomendaciones.

4. **Resultados de afinidad**  
   La aplicación calcula carreras recomendadas con porcentajes de compatibilidad según intereses y respuestas.

5. **Explorador de carreras**  
   El usuario puede revisar carreras tradicionales y emergentes, filtrarlas y abrir tarjetas con más detalles.

6. **Versus de carreras**  
   Se comparan dos carreras lado a lado considerando salario, demanda, dificultad, trabajo remoto, tiempo de estudio y riesgo de automatización.

7. **Universidades y opciones reales**  
   Se muestran universidades ecuatorianas con información de carrera, modalidad, ubicación, becas y enlaces oficiales para investigar más.

8. **Cierre / navegación final**  
   El footer permite volver a secciones principales y acceder al repositorio del proyecto.

---

## URL de deploy

Pendiente de configuración en Vercel.

Cuando el proyecto esté desplegado, colocar aquí la URL pública:

```text

```

---

## Credenciales de prueba

No aplica por el momento.

El MVP es de acceso abierto y no utiliza autenticación.

---

## Definition of Done

Una funcionalidad se considera **terminada** cuando cumple estos criterios:

- [ ] Está diseñada o validada visualmente por el equipo.
- [ ] Está implementada en código y funciona correctamente.
- [ ] Ha sido probada manualmente en navegador.
- [ ] Funciona correctamente en vista de escritorio y móvil.
- [ ] No presenta errores críticos en consola.
- [ ] El código fue revisado mediante Pull Request o revisión de pares.
- [ ] Fue subida al repositorio en la rama correspondiente.
- [ ] Está desplegada y visible en la URL de producción, cuando aplique.

---

## Licencia

MIT 2025 - Grupo 8, PUCE - Brújula Futura