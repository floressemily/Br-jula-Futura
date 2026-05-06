import { useState } from 'react'
import './App.css'

/* ── Data ─────────────────────────────────────── */
const INTERESTS = [
  { id: 'tech',    icon: '💻', label: 'Tecnología' },
  { id: 'art',     icon: '🎨', label: 'Creatividad' },
  { id: 'math',    icon: '📐', label: 'Números' },
  { id: 'lead',    icon: '🧭', label: 'Liderazgo' },
  { id: 'social',  icon: '🤝', label: 'Ayuda Social' },
  { id: 'org',     icon: '📋', label: 'Organización' },
  { id: 'science', icon: '🔬', label: 'Investigación' },
  { id: 'comm',    icon: '💬', label: 'Comunicación' },
  { id: 'nature',  icon: '🌱', label: 'Naturaleza' },
]

const CAREERS = [
  {
    id: 'sw',
    icon: '🖥️',
    name: 'Ingeniería de Software',
    desc: 'Diseñas y construyes el software que mueve al mundo: apps, plataformas y sistemas.',
    do: 'Programar apps, resolver problemas y construir sistemas digitales.',
    good: 'Alta demanda, trabajo remoto, salarios competitivos y creatividad constante.',
    challenge: 'Curva de aprendizaje intensa y tecnologías que evolucionan rapidísimo.',
  },
  {
    id: 'psych',
    icon: '🧠',
    name: 'Psicología',
    desc: 'Comprendes la mente humana y ayudas a personas a superar sus desafíos emocionales.',
    do: 'Escuchar, evaluar, terapia y apoyo emocional a personas y comunidades.',
    good: 'Impacto humano profundo, campo amplio y alta demanda post-pandemia.',
    challenge: 'Requiere mucha empatía y el desgaste emocional puede ser alto.',
  },
  {
    id: 'design',
    icon: '✏️',
    name: 'Diseño Gráfico & UX',
    desc: 'Creas experiencias visuales que comunican, enamoran y conectan con las personas.',
    do: 'Diseñar interfaces, identidades de marca y experiencias digitales.',
    good: 'Trabajo creativo, portafolio visible y gran demanda en startups.',
    challenge: 'Mercado competitivo, debes diferenciarte con un portafolio fuerte.',
  },
]

const EMERGING = [
  { id: 'cyber', icon: '🛡️', name: 'Ciberseguridad', tag: 'demand', tagLabel: 'Alta Demanda', why: '¿Por qué te interesaría?', desc: 'Proteges empresas y personas de ataques digitales. Cada año hay más hackeos y menos expertos.', glow: '#7c3aed' },
  { id: 'data',  icon: '📊', name: 'Ciencia de Datos', tag: 'demand', tagLabel: 'Alta Demanda', why: '¿Por qué te interesaría?', desc: 'Conviertes enormes cantidades de datos en decisiones inteligentes. El petróleo del siglo XXI.', glow: '#06b6d4' },
  { id: 'ux',    icon: '🎯', name: 'UX / Product Design', tag: 'growing', tagLabel: 'En Crecimiento', why: '¿Por qué te interesaría?', desc: 'Diseñas cómo las personas interactúan con apps y productos. Combina psicología y diseño.', glow: '#f43f5e' },
  { id: 'mkt',   icon: '📱', name: 'Marketing Digital', tag: 'new', tagLabel: 'Nueva Era', why: '¿Por qué te interesaría?', desc: 'Estrategias en redes, SEO, publicidad pagada y contenido. Mueves marcas en el mundo digital.', glow: '#f59e0b' },
  { id: 'auto',  icon: '🤖', name: 'Automatización & IA', tag: 'future', tagLabel: 'Futuro', why: '¿Por qué te interesaría?', desc: 'Programas robots y sistemas que aprenden. La carrera que definirá los próximos 30 años.', glow: '#10b981' },
  { id: 'log',   icon: '🚚', name: 'Logística & Supply Chain', tag: 'growing', tagLabel: 'En Crecimiento', why: '¿Por qué te interesaría?', desc: 'Gestionas el flujo de productos globalmente. E-commerce disparó su demanda al máximo.', glow: '#0ea5e9' },
]

const RESULTS = [
  { id: 'r1', name: 'Ingeniería de Software', reason: 'Tu interés en tecnología e investigación encaja perfectamente con este campo en constante evolución.', label: 'top', labelText: 'Muy Afín', pct: 94 },
  { id: 'r2', name: 'Ciencia de Datos', reason: 'Combina matemáticas, investigación y tecnología — tres de tus áreas más fuertes.', label: 'possible', labelText: 'Posible Opción', pct: 78 },
  { id: 'r3', name: 'UX / Product Design', reason: 'Tu lado creativo y organizativo encaja muy bien con el diseño de experiencias digitales.', label: 'explore', labelText: 'Explorar Más', pct: 62 },
]

const UNIVERSITIES = [
  { id: 'u1', name: 'PUCE', career: 'Ingeniería de Sistemas', cost: '$1,800 / semestre', mode: 'Presencial', scholarship: 'Becas por mérito disponibles', location: 'Quito', proximity: 'near', proxLabel: 'Cerca de ti' },
  { id: 'u2', name: 'ESPOL', career: 'Ingeniería en Computación', cost: '$700 / semestre', mode: 'Presencial', scholarship: 'SENESCYT cubre hasta 60%', location: 'Guayaquil', proximity: 'far', proxLabel: 'Requiere traslado' },
  { id: 'u3', name: 'UTE', career: 'Diseño Gráfico y Digital', cost: '$1,200 / semestre', mode: 'Híbrida', scholarship: 'Convenio Fe y Alegría', location: 'Quito', proximity: 'near', proxLabel: 'Cerca de ti' },
  { id: 'u4', name: 'UIDE', career: 'Marketing Digital', cost: '$1,500 / semestre', mode: 'Semipresencial', scholarship: 'Beca excelencia 25%', location: 'Quito', proximity: 'near', proxLabel: 'Cerca de ti' },
]

/* ── Component ────────────────────────────────── */
export default function App() {
  const [selected, setSelected] = useState([])

  const toggleInterest = (id) =>
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bf-app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="compass">🧭</span>
          <span>Brújula Futura</span>
        </div>
        <button className="nav-cta" onClick={() => scroll('intereses')}>Comenzar</button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="inicio">
        <div className="hero-bg" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-content section-inner">
          <div className="hero-badge">
            <span className="dot" />
            Orientación Vocacional para Bachilleres
          </div>
          <h1>
            Explora tu<br />
            <span className="accent">futuro</span>
          </h1>
          <p className="hero-sub">
            Descubre carreras, conoce nuevas opciones y encuentra un camino más claro para tu vida. Una experiencia guiada, rápida y pensada para ti.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scroll('intereses')}>
              ✨ Explorar ahora
            </button>
            <button className="btn-secondary" onClick={() => scroll('carreras')}>
              Ver prototipo
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">7</span><span className="stat-label">Pasos guiados</span></div>
            <div className="stat"><span className="stat-num">20+</span><span className="stat-label">Carreras exploradas</span></div>
            <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Gratuito</span></div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Descubre más</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ── Intereses ── */}
      <section className="section interests-bg" id="intereses">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Paso 1</div>
            <h2 className="section-title">¿Qué te mueve por dentro?</h2>
            <p className="section-desc">Elige los temas que más te llaman la atención. No hay respuestas correctas, solo las tuyas.</p>
          </div>
          <div className="chips-grid">
            {INTERESTS.map(i => (
              <button
                key={i.id}
                id={`chip-${i.id}`}
                className={`chip${selected.includes(i.id) ? ' active' : ''}`}
                onClick={() => toggleInterest(i.id)}
                aria-pressed={selected.includes(i.id)}
              >
                <span className="chip-icon">{i.icon}</span>
                {i.label}
              </button>
            ))}
          </div>
          {selected.length > 0 && (
            <p className="chip-hint">
              Seleccionaste <span>{selected.length}</span> {selected.length === 1 ? 'interés' : 'intereses'} — ¡genial, sigamos!
            </p>
          )}
        </div>
      </section>

      {/* ── Vive una Carrera ── */}
      <section className="section" id="carreras">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Paso 2</div>
            <h2 className="section-title">Vive una carrera</h2>
            <p className="section-desc">Así se siente trabajar en estas carreras, día a día. No una descripción aburrida, sino la realidad.</p>
          </div>
          <div className="careers-grid">
            {CAREERS.map(c => (
              <div key={c.id} className="career-card" id={`career-${c.id}`}>
                <div className="career-card-icon">{c.icon}</div>
                <h3>{c.name}</h3>
                <p className="desc">{c.desc}</p>
                <div className="career-details">
                  <div className="detail-item">
                    <span className="detail-badge badge-do">Harías</span>
                    <span className="detail-text">{c.do}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-badge badge-good">Lo bueno</span>
                    <span className="detail-text">{c.good}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-badge badge-challenge">Reto</span>
                    <span className="detail-text">{c.challenge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Descubre Carreras Nuevas ── */}
      <section className="section emerging-bg" id="emergentes">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Paso 3</div>
            <h2 className="section-title">Descubre carreras nuevas</h2>
            <p className="section-desc">Opciones que quizás no conocías pero que están transformando el mundo. ¿Te animas a explorarlas?</p>
          </div>
          <div className="emerging-grid">
            {EMERGING.map(e => (
              <div key={e.id} className="emerging-card" id={`emerging-${e.id}`}>
                <div className="emerging-card-glow" style={{ background: e.glow }} />
                <div className="emerging-top">
                  <span className="emerging-icon">{e.icon}</span>
                  <span className={`emerging-tag tag-${e.tag}`}>{e.tagLabel}</span>
                </div>
                <h3>{e.name}</h3>
                <p className="why">🔍 {e.why}</p>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resultados ── */}
      <section className="section" id="resultados">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Paso 4</div>
            <h2 className="section-title">Carreras que encajan contigo</h2>
            <p className="section-desc">Basado en lo que seleccionaste, estas son las opciones con más compatibilidad.</p>
          </div>
          <div className="results-grid">
            {RESULTS.map(r => (
              <div key={r.id} className="result-card" id={`result-${r.id}`}>
                <span className={`result-label label-${r.label}`}>{r.labelText}</span>
                <h3>{r.name}</h3>
                <p>{r.reason}</p>
                <div className="result-match">
                  <div className="match-bar-wrap">
                    <div className="match-bar" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="match-pct">{r.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Universidades ── */}
      <section className="section universities-bg" id="universidades">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Paso 5</div>
            <h2 className="section-title">¿Dónde podrías estudiar?</h2>
            <p className="section-desc">Opciones reales en Ecuador, con información clara sobre costos, modalidad y becas disponibles.</p>
          </div>
          <div className="uni-grid">
            {UNIVERSITIES.map(u => (
              <div key={u.id} className="uni-card" id={`uni-${u.id}`}>
                <div className="uni-header">
                  <span className="uni-name">{u.name}</span>
                  <span className={`uni-proximity prox-${u.proximity}`}>{u.proxLabel}</span>
                </div>
                <p className="uni-career">🎓 {u.career}</p>
                <div className="uni-info">
                  <div className="uni-info-item">
                    <span className="ui-label">Costo</span>
                    <span className="ui-value">{u.cost}</span>
                  </div>
                  <div className="uni-info-item">
                    <span className="ui-label">Modalidad</span>
                    <span className="ui-value">{u.mode}</span>
                  </div>
                  <div className="uni-info-item">
                    <span className="ui-label">Ubicación</span>
                    <span className="ui-value">{u.location}</span>
                  </div>
                </div>
                <div className="uni-scholarship">
                  🎫 {u.scholarship}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ruta Final ── */}
      <section className="route-section" id="ruta">
        <div className="section-inner">
          <div className="route-card">
            <h2 className="route-title">Tu ruta está lista 🎯</h2>
            <p className="route-subtitle">Un resumen personalizado de tu exploración vocacional.</p>
            <div className="route-summary">
              <div className="summary-item">
                <span className="summary-icon">✨</span>
                <div className="summary-content">
                  <span className="summary-label">Intereses elegidos</span>
                  <span className="summary-value">
                    {selected.length > 0
                      ? INTERESTS.filter(i => selected.includes(i.id)).map(i => i.label).join(' · ')
                      : 'Tecnología · Investigación · Creatividad'}
                  </span>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🏆</span>
                <div className="summary-content">
                  <span className="summary-label">Carrera más afín</span>
                  <span className="summary-value">Ingeniería de Software — 94% compatibilidad</span>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🚀</span>
                <div className="summary-content">
                  <span className="summary-label">Carreras nuevas descubiertas</span>
                  <span className="summary-value">Ciencia de Datos · Ciberseguridad · UX Design</span>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🏫</span>
                <div className="summary-content">
                  <span className="summary-label">Universidades sugeridas</span>
                  <span className="summary-value">PUCE · UTE · ESPOL</span>
                </div>
              </div>
            </div>
            <div className="route-actions">
              <button className="btn-save" id="btn-guardar">💾 Guardar mi ruta</button>
              <button className="btn-explore" id="btn-seguir" onClick={() => scroll('intereses')}>Seguir explorando</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Hecho con ❤️ para estudiantes de Fe y Alegría · <strong>Brújula Futura</strong> © 2025 · PUCE G8</p>
      </footer>
    </div>
  )
}
