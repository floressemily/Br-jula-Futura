# 🧭 Brújula Futura

> Herramienta de orientación vocacional para estudiantes de bachillerato en Ecuador.

[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vite.dev)
[![License](https://img.shields.io/badge/licencia-MIT-green)](LICENSE)

---

## 📖 Descripción

**Brújula Futura** es una herramienta de orientación vocacional para estudiantes de bachillerato (15–18 años), especialmente de colegios Fe y Alegría en Ecuador. Su objetivo es ayudar a explorar intereses, conocer carreras tradicionales y emergentes, y revisar opciones universitarias reales, de forma más clara, visual y guiada.

La hipótesis del proyecto: muchos estudiantes no tienen claridad sobre qué estudiar porque la orientación que reciben es muy general. Brújula Futura propone una experiencia breve, interactiva y útil para explorar el futuro.

---

## 👥 Integrantes y roles

| Nombre | Rol |
|--------|-----|
| [Nombre] | Product Owner |
| [Nombre] | Scrum Master |
| [Nombre] | Developer |
| [Nombre] | Developer |

---

## 🛠️ Stack técnico

| Capa | Tecnología |
|------|-----------|
| Frontend Web | React 19 + Vite 8 |
| Estilos | Vanilla CSS (design system propio) |
| App Android | Kotlin |
| Diseño UI | Figma |
| Repositorio | GitHub |
| Deploy | Vercel |

---

## 📁 Estructura del proyecto

```
g8-brujula-futura-puce-2025/
├── src/
│   ├── App.jsx          # Componente principal con las 7 secciones del PMV
│   ├── App.css          # Estilos de componentes y secciones
│   ├── index.css        # Design system: tokens, tipografía, reset
│   └── main.jsx         # Punto de entrada de React
├── docs/                # Documentación y capturas de pantalla
├── tests/               # Pruebas
├── public/              # Archivos estáticos
├── .env.example         # Variables de entorno de ejemplo
├── vite.config.js       # Configuración de Vite
└── README.md            # Documentación principal
```

---

## 🚀 Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/[org]/g8-brujula-futura-puce-2025.git
cd g8-brujula-futura-puce-2025

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

---

## 🗺️ Flujo del PMV

El producto mínimo viable sigue este flujo de 7 pasos:

1. **Bienvenida** — Hero visual con propuesta de valor clara
2. **Intereses visuales** — Chips interactivos para seleccionar áreas de interés
3. **Vive una carrera** — Tarjetas inmersivas con descripción real de 3 carreras
4. **Descubre carreras nuevas** — Opciones emergentes con etiquetas de demanda
5. **Resultados / carreras afines** — Recomendaciones con % de compatibilidad
6. **Universidades y opciones reales** — Instituciones ecuatorianas con datos concretos
7. **Ruta final** — Resumen personalizado del proceso de exploración

---

## 🌐 URL de deploy

> Pendiente de configuración en Vercel.

---

## 🔑 Credenciales de prueba

No aplica por el momento. El MVP es de acceso abierto, sin autenticación.

---

## ✅ Definition of Done

Una funcionalidad se considera **terminada** cuando cumple todos estos criterios:

- [ ] Está diseñada en Figma con aprobación del equipo
- [ ] Está implementada en código y funciona correctamente
- [ ] Ha sido probada manualmente en Chrome y mobile
- [ ] El código fue revisado mediante Pull Request
- [ ] Fue subida al repositorio en la rama correspondiente
- [ ] Está desplegada y visible en la URL de producción

---

## 📄 Licencia

MIT © 2025 — Grupo 8, PUCE · Brújula Futura
