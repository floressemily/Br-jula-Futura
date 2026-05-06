/**
 * ═══════════════════════════════════════════════════════════════════
 * BRÚJULA FUTURA — Base de Datos Simulada (Mock DB)
 * ═══════════════════════════════════════════════════════════════════
 * 
 * Este archivo centraliza TODA la data de la aplicación.
 * En un futuro, estas funciones pueden reemplazarse por llamadas
 * a una API real (Firebase, Supabase, etc.) sin cambiar los componentes.
 * 
 * Estructura:
 *   - INTERESTS:     Áreas de interés para el selector
 *   - QUIZ_QUESTIONS: Preguntas del test rápido de aptitudes
 *   - CAREERS:       Carreras tradicionales con info detallada
 *   - EMERGING:      Carreras emergentes/nuevas
 *   - UNIVERSITIES:  Universidades ecuatorianas con costos reales
 *   - CAREER_VERSUS: Data para comparaciones lado a lado
 */

// ─── Áreas de Interés ────────────────────────────────────────────
export const INTERESTS = [
  { id: 'tech',    icon: '💻', label: 'Tecnología',     color: '#7c3aed' },
  { id: 'art',     icon: '🎨', label: 'Creatividad',    color: '#f43f5e' },
  { id: 'math',    icon: '📐', label: 'Números',        color: '#06b6d4' },
  { id: 'lead',    icon: '🧭', label: 'Liderazgo',      color: '#f59e0b' },
  { id: 'social',  icon: '🤝', label: 'Ayuda Social',   color: '#10b981' },
  { id: 'org',     icon: '📋', label: 'Organización',   color: '#0ea5e9' },
  { id: 'science', icon: '🔬', label: 'Investigación',  color: '#8b5cf6' },
  { id: 'comm',    icon: '💬', label: 'Comunicación',   color: '#ec4899' },
  { id: 'nature',  icon: '🌱', label: 'Naturaleza',     color: '#22c55e' },
]

// ─── Preguntas del Test Rápido ───────────────────────────────────
export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: '¿Qué prefieres hacer un sábado libre?',
    options: [
      { id: 'a', text: 'Programar o armar algo digital', tags: ['tech', 'math'] },
      { id: 'b', text: 'Dibujar, pintar o diseñar', tags: ['art', 'comm'] },
      { id: 'c', text: 'Ayudar a alguien o hacer voluntariado', tags: ['social', 'lead'] },
      { id: 'd', text: 'Leer sobre ciencia o investigar un tema', tags: ['science', 'nature'] },
    ],
  },
  {
    id: 'q2',
    question: '¿Qué tipo de proyecto escolar disfrutas más?',
    options: [
      { id: 'a', text: 'Crear una app o página web', tags: ['tech', 'art'] },
      { id: 'b', text: 'Hacer un experimento científico', tags: ['science', 'math'] },
      { id: 'c', text: 'Organizar un evento o campaña', tags: ['lead', 'org'] },
      { id: 'd', text: 'Escribir un ensayo o hacer una presentación', tags: ['comm', 'social'] },
    ],
  },
  {
    id: 'q3',
    question: '¿Qué te importa más en un trabajo futuro?',
    options: [
      { id: 'a', text: 'Ganar bien y tener estabilidad', tags: ['tech', 'math', 'org'] },
      { id: 'b', text: 'Hacer algo creativo e innovador', tags: ['art', 'comm'] },
      { id: 'c', text: 'Ayudar a la comunidad o al planeta', tags: ['social', 'nature'] },
      { id: 'd', text: 'Liderar equipos y tomar decisiones', tags: ['lead', 'org'] },
    ],
  },
  {
    id: 'q4',
    question: '¿Cuál de estas herramientas usarías con más ganas?',
    options: [
      { id: 'a', text: 'Un computador con código y software', tags: ['tech'] },
      { id: 'b', text: 'Una cámara o tablet para diseñar', tags: ['art'] },
      { id: 'c', text: 'Un microscopio o equipo de laboratorio', tags: ['science', 'nature'] },
      { id: 'd', text: 'Un micrófono para comunicar ideas', tags: ['comm', 'lead'] },
    ],
  },
  {
    id: 'q5',
    question: '¿Qué frase te identifica más?',
    options: [
      { id: 'a', text: '"Me gusta resolver problemas complejos"', tags: ['tech', 'math', 'science'] },
      { id: 'b', text: '"Me gusta que las cosas se vean bien"', tags: ['art', 'comm'] },
      { id: 'c', text: '"Me gusta organizar y que todo funcione"', tags: ['org', 'lead'] },
      { id: 'd', text: '"Me importa el bienestar de los demás"', tags: ['social', 'nature'] },
    ],
  },
]

// ─── Carreras Tradicionales ──────────────────────────────────────
export const CAREERS = [
  {
    id: 'sw',
    icon: '🖥️',
    name: 'Ingeniería de Software',
    field: 'Tecnología',
    desc: 'Diseñas y construyes el software que mueve al mundo: apps, plataformas y sistemas.',
    whatYouDo: 'Programar apps, resolver problemas y construir sistemas digitales.',
    pros: ['Alta demanda laboral mundial', 'Trabajo remoto posible', 'Salarios competitivos', 'Creatividad constante'],
    cons: ['Curva de aprendizaje intensa', 'Tecnologías cambian rápido', 'Puede ser sedentario', 'Estrés por deadlines'],
    demand: 'alta',
    demandLabel: '🔥 En auge',
    avgSalary: '$1,200 - $3,500/mes',
    duration: '4-5 años',
    tags: ['tech', 'math'],
    future: 'La IA no reemplaza a los ingenieros de software, los potencia. Se espera que la demanda crezca un 25% en los próximos 10 años.',
  },
  {
    id: 'psych',
    icon: '🧠',
    name: 'Psicología',
    field: 'Ciencias Sociales',
    desc: 'Comprendes la mente humana y ayudas a personas a superar sus desafíos emocionales.',
    whatYouDo: 'Escuchar, evaluar, hacer terapia y apoyo emocional a personas y comunidades.',
    pros: ['Impacto humano profundo', 'Campo amplio de especialización', 'Alta demanda post-pandemia', 'Trabajo con propósito'],
    cons: ['Requiere mucha empatía', 'Desgaste emocional posible', 'Salarios bajos al inicio', 'Requiere maestría para especializarse'],
    demand: 'media',
    demandLabel: '📈 Creciendo',
    avgSalary: '$800 - $2,000/mes',
    duration: '5 años',
    tags: ['social', 'science', 'comm'],
    future: 'La salud mental es prioridad global. La telepsicología y la neuropsicología están abriendo nuevos campos.',
  },
  {
    id: 'design',
    icon: '✏️',
    name: 'Diseño Gráfico & UX',
    field: 'Creatividad & Tecnología',
    desc: 'Creas experiencias visuales que comunican, enamoran y conectan con las personas.',
    whatYouDo: 'Diseñar interfaces, identidades de marca y experiencias digitales.',
    pros: ['Trabajo creativo diario', 'Portafolio visible', 'Gran demanda en startups', 'Freelance posible'],
    cons: ['Mercado competitivo', 'Necesitas portafolio fuerte', 'Clientes difíciles', 'Puede ser subvalorado'],
    demand: 'alta',
    demandLabel: '🔥 En auge',
    avgSalary: '$900 - $2,800/mes',
    duration: '4 años',
    tags: ['art', 'tech', 'comm'],
    future: 'El UX Design está entre las 10 carreras más demandadas en tecnología. Las empresas invierten cada vez más en experiencia de usuario.',
  },
  {
    id: 'medicine',
    icon: '⚕️',
    name: 'Medicina',
    field: 'Ciencias de la Salud',
    desc: 'Diagnosticas, tratas y previenes enfermedades para mejorar la calidad de vida de las personas.',
    whatYouDo: 'Consultas, diagnósticos, cirugías, investigación médica y salud pública.',
    pros: ['Profesión muy respetada', 'Salarios altos a largo plazo', 'Impacto directo en vidas', 'Estabilidad laboral'],
    cons: ['Carrera muy larga (7+ años)', 'Alto costo de estudios', 'Horarios agotadores', 'Estrés y presión constante'],
    demand: 'alta',
    demandLabel: '🔥 Siempre necesaria',
    avgSalary: '$1,500 - $5,000/mes',
    duration: '6-7 años + especialidad',
    tags: ['science', 'social'],
    future: 'La telemedicina y la IA diagnóstica están transformando el campo. Los médicos con habilidades tecnológicas serán los más valorados.',
  },
  {
    id: 'law',
    icon: '⚖️',
    name: 'Derecho',
    field: 'Ciencias Sociales',
    desc: 'Defiendes derechos, resuelves conflictos y construyes el marco legal de la sociedad.',
    whatYouDo: 'Litigar, asesorar legalmente, redactar contratos y defender causas.',
    pros: ['Muchas especialidades', 'Se puede emprender', 'Siempre hay demanda', 'Prestigio social'],
    cons: ['Mercado saturado en Ecuador', 'Mucha memorización', 'Proceso largo para establecerse', 'Burocracia constante'],
    demand: 'media',
    demandLabel: '⚠️ Saturada pero necesaria',
    avgSalary: '$800 - $3,000/mes',
    duration: '5 años',
    tags: ['comm', 'lead', 'org'],
    future: 'El Derecho Digital, Protección de Datos y Compliance son las ramas con más futuro. Los abogados tradicionales enfrentan saturación.',
  },
  {
    id: 'business',
    icon: '📊',
    name: 'Administración de Empresas',
    field: 'Negocios',
    desc: 'Gestionas organizaciones, tomas decisiones estratégicas y lideras equipos hacia el éxito.',
    whatYouDo: 'Planificar, organizar recursos, liderar equipos y tomar decisiones de negocio.',
    pros: ['Muy versátil', 'Base para emprender', 'Aplicable en cualquier industria', 'Desarrollo de liderazgo'],
    cons: ['Muy general sin especialización', 'Competencia alta', 'Necesitas experiencia real', 'MBA puede ser necesario'],
    demand: 'media',
    demandLabel: '📈 Estable',
    avgSalary: '$900 - $2,500/mes',
    duration: '4-5 años',
    tags: ['lead', 'org', 'math'],
    future: 'Las empresas buscan administradores con conocimientos en data analytics y transformación digital. El MBA sigue siendo valorado.',
  },
]

// ─── Carreras Emergentes ─────────────────────────────────────────
export const EMERGING = [
  {
    id: 'cyber',
    icon: '🛡️',
    name: 'Ciberseguridad',
    tag: 'demand',
    tagLabel: 'Alta Demanda',
    why: '¿Por qué te interesaría?',
    desc: 'Proteges empresas y personas de ataques digitales. Cada año hay más hackeos y menos expertos.',
    glow: '#7c3aed',
    salary: '$1,500 - $4,000/mes',
    risk: 'bajo',
    tags: ['tech', 'math'],
  },
  {
    id: 'data',
    icon: '📊',
    name: 'Ciencia de Datos',
    tag: 'demand',
    tagLabel: 'Alta Demanda',
    why: '¿Por qué te interesaría?',
    desc: 'Conviertes enormes cantidades de datos en decisiones inteligentes. El petróleo del siglo XXI.',
    glow: '#06b6d4',
    salary: '$1,300 - $3,800/mes',
    risk: 'bajo',
    tags: ['tech', 'math', 'science'],
  },
  {
    id: 'ux',
    icon: '🎯',
    name: 'UX / Product Design',
    tag: 'growing',
    tagLabel: 'En Crecimiento',
    why: '¿Por qué te interesaría?',
    desc: 'Diseñas cómo las personas interactúan con apps y productos. Combina psicología y diseño.',
    glow: '#f43f5e',
    salary: '$1,000 - $3,200/mes',
    risk: 'bajo',
    tags: ['art', 'tech', 'comm'],
  },
  {
    id: 'mkt',
    icon: '📱',
    name: 'Marketing Digital',
    tag: 'new',
    tagLabel: 'Nueva Era',
    why: '¿Por qué te interesaría?',
    desc: 'Estrategias en redes, SEO, publicidad pagada y contenido. Mueves marcas en el mundo digital.',
    glow: '#f59e0b',
    salary: '$800 - $2,500/mes',
    risk: 'medio',
    tags: ['comm', 'art', 'lead'],
  },
  {
    id: 'auto',
    icon: '🤖',
    name: 'Automatización & IA',
    tag: 'future',
    tagLabel: 'Futuro',
    why: '¿Por qué te interesaría?',
    desc: 'Programas robots y sistemas que aprenden. La carrera que definirá los próximos 30 años.',
    glow: '#10b981',
    salary: '$1,800 - $5,000/mes',
    risk: 'bajo',
    tags: ['tech', 'math', 'science'],
  },
  {
    id: 'log',
    icon: '🚚',
    name: 'Logística & Supply Chain',
    tag: 'growing',
    tagLabel: 'En Crecimiento',
    why: '¿Por qué te interesaría?',
    desc: 'Gestionas el flujo de productos globalmente. E-commerce disparó su demanda al máximo.',
    glow: '#0ea5e9',
    salary: '$900 - $2,200/mes',
    risk: 'medio',
    tags: ['org', 'math', 'lead'],
  },
]

// ─── Universidades Ecuatorianas ──────────────────────────────────
export const UNIVERSITIES = [
  {
    id: 'u1',
    name: 'PUCE',
    fullName: 'Pontificia Universidad Católica del Ecuador',
    career: 'Ingeniería de Sistemas',
    cost: 'Consultar arancel oficial',
    costLevel: 'alto',
    mode: 'Presencial',
    scholarship: 'Becas y financiamiento disponibles',
    location: 'Quito',
    proximity: 'near',
    proxLabel: 'Cerca de ti',
    website: 'https://www.puce.edu.ec',
    highlight: 'Universidad privada con oferta de grado, admisiones y aranceles publicados.',
    infoText:
      'La PUCE ofrece carreras de grado y opciones de admisión para estudiantes nuevos. Para costos reales, conviene revisar la tabla oficial de aranceles vigente.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.puce.edu.ec/' },
      { label: 'Carreras de grado', url: 'https://www.puce.edu.ec/grado/' },
      { label: 'Admisiones de grado', url: 'https://www.puce.edu.ec/admisiones/grado/examen-de-ingreso/' },
      { label: 'Tabla de aranceles 2026', url: 'https://www.puce.edu.ec/wp-content/uploads/2026/02/Tabla-de-aranceles-2026.pdf' },
    ],
  },
  {
    id: 'u2',
    name: 'ESPOL',
    fullName: 'Escuela Superior Politécnica del Litoral',
    career: 'Ingeniería en Computación',
    cost: 'Consultar proceso público / gratuidad según normativa',
    costLevel: 'medio',
    mode: 'Presencial',
    scholarship: 'Información en admisiones y normativa pública',
    location: 'Guayaquil',
    proximity: 'far',
    proxLabel: 'Requiere traslado',
    website: 'https://www.espol.edu.ec',
    highlight: 'Institución pública referente en áreas de ingeniería, tecnología y computación.',
    infoText:
      'ESPOL cuenta con información oficial de admisión y páginas específicas de carreras. Para Computación, la FIEC publica duración, modalidad y perfil de la carrera.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.espol.edu.ec/' },
      { label: 'Carrera de Computación', url: 'https://www.fiec.espol.edu.ec/es/carreras-de-grado/computacion' },
      { label: 'Preguntas frecuentes de admisión', url: 'https://www.espol.edu.ec/es/admision/preguntas-frecuentes' },
      { label: 'Guía de postulación 2026', url: 'https://www.espol.edu.ec/es/admision/sites/default/files/2026/1P2026/guias/adm-gui-pa-003_postulacion_aceptacion_cupo-1p2026.pdf' },
    ],
  },
  {
    id: 'u3',
    name: 'UTE',
    fullName: 'Universidad UTE',
    career: 'Diseño Gráfico',
    cost: 'Consultar aranceles y matrículas',
    costLevel: 'medio',
    mode: 'Presencial',
    scholarship: 'Becas, descuentos o financiamiento según admisiones',
    location: 'Quito',
    proximity: 'near',
    proxLabel: 'Cerca de ti',
    website: 'https://ute.edu.ec',
    highlight: 'Oferta académica con carreras de grado y portal específico de admisiones.',
    infoText:
      'La UTE tiene portal de admisiones, oferta académica y una página específica para Diseño Gráfico. Los valores deben revisarse en aranceles oficiales.',
    officialLinks: [
      { label: 'Página principal', url: 'https://ute.edu.ec/' },
      { label: 'Admisiones UTE', url: 'https://admisiones.ute.edu.ec/' },
      { label: 'Diseño Gráfico', url: 'https://admisiones.ute.edu.ec/grado/diseno-grafico/' },
      { label: 'Aranceles y matrículas', url: 'https://ute.edu.ec/aranceles-y-matriculas/' },
    ],
  },
  {
    id: 'u4',
    name: 'UIDE',
    fullName: 'Universidad Internacional del Ecuador',
    career: 'Marketing / Comunicación y Medios Digitales',
    cost: 'Consultar con admisiones',
    costLevel: 'alto',
    mode: 'Presencial / en línea según programa',
    scholarship: 'Becas y financiamiento según admisiones',
    location: 'Quito',
    proximity: 'near',
    proxLabel: 'Cerca de ti',
    website: 'https://www.uide.edu.ec',
    highlight: 'Universidad con oferta académica, admisiones y programas presenciales/en línea.',
    infoText:
      'La UIDE permite consultar programas académicos desde su portal y tiene proceso de admisión para pregrado. Para áreas digitales se puede revisar Comunicación y Medios Digitales o Marketing.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.uide.edu.ec/' },
      { label: 'Proceso de admisión pregrado', url: 'https://www.uide.edu.ec/proceso-de-admision-pregrado/' },
      { label: 'Comunicación y Medios Digitales', url: 'https://www.uide.edu.ec/carrera-de-comunicacion-y-medios-digitales/' },
      { label: 'Pregrado en línea', url: 'https://www.uide.edu.ec/pregrado-en-linea/' },
    ],
  },
  {
    id: 'u5',
    name: 'EPN',
    fullName: 'Escuela Politécnica Nacional',
    career: 'Ingeniería en Ciencias de la Computación',
    cost: 'Consultar admisión pública / gratuidad según normativa',
    costLevel: 'bajo',
    mode: 'Presencial',
    scholarship: 'Información institucional y beneficios públicos',
    location: 'Quito',
    proximity: 'near',
    proxLabel: 'Cerca de ti',
    website: 'https://www.epn.edu.ec',
    highlight: 'Institución pública enfocada en ingeniería, ciencia y tecnología.',
    infoText:
      'La EPN tiene página oficial para Ingeniería en Ciencias de la Computación, donde se puede revisar modalidad, perfil de ingreso, objetivos, malla y contacto.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.epn.edu.ec/' },
      { label: 'Ciencias de la Computación', url: 'https://www.epn.edu.ec/ingenieria-en-ciencias-de-la-computacion/' },
      { label: 'Oferta académica de grado', url: 'https://webhistorico.epn.edu.ec/oferta-academica/grado/ingenieria-tecnologia/' },
      { label: 'Malla curricular Computación', url: 'https://fis.epn.edu.ec/images/mallas_curriculares/MallaCurricularCOMPUTACION.pdf' },
    ],
  },
  {
    id: 'u6',
    name: 'UDLA',
    fullName: 'Universidad de Las Américas',
    career: 'Psicología Clínica',
    cost: 'Consultar tarifario oficial',
    costLevel: 'alto',
    mode: 'Presencial',
    scholarship: 'Becas y ayudas disponibles',
    location: 'Quito',
    proximity: 'near',
    proxLabel: 'Cerca de ti',
    website: 'https://www.udla.edu.ec',
    highlight: 'Universidad privada con oferta de pregrado, becas y páginas de carrera.',
    infoText:
      'La UDLA publica su oferta de estudios, becas y páginas específicas por carrera. Psicología Clínica tiene una página oficial de pregrado.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.udla.edu.ec/' },
      { label: 'Oferta de estudios', url: 'https://www.udla.edu.ec/estudios/' },
      { label: 'Psicología Clínica', url: 'https://www.udla.edu.ec/estudios/pregrado/psicologia-clinica/' },
      { label: 'Becas y ayudas', url: 'https://www.udla.edu.ec/futuros-estudiantes/becas-y-ayudas/' },
    ],
  },
  {
    id: 'u7',
    name: 'UCE',
    fullName: 'Universidad Central del Ecuador',
    career: 'Medicina',
    cost: 'Gratuita (Pública)',
    costLevel: 'bajo',
    mode: 'Presencial',
    scholarship: 'Becas por mérito y ayudas económicas estatales',
    location: 'Quito',
    proximity: 'near',
    proxLabel: 'Cerca de ti',
    website: 'https://www.uce.edu.ec',
    highlight: 'La universidad pública más antigua y grande de Ecuador.',
    infoText: 'La UCE ofrece la carrera de Medicina con gran prestigio. Al ser pública, la educación es gratuita de acuerdo con la normativa vigente.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.uce.edu.ec/' },
      { label: 'Facultad de Ciencias Médicas', url: 'https://www.uce.edu.ec/web/fcm' },
      { label: 'Admisiones', url: 'https://www.uce.edu.ec/web/admisiones' },
    ],
  },
  {
    id: 'u8',
    name: 'UG',
    fullName: 'Universidad de Guayaquil',
    career: 'Administración de Empresas',
    cost: 'Gratuita (Pública)',
    costLevel: 'bajo',
    mode: 'Presencial',
    scholarship: 'Becas por situación económica y mérito académico',
    location: 'Guayaquil',
    proximity: 'far',
    proxLabel: 'Requiere traslado',
    website: 'https://www.ug.edu.ec',
    highlight: 'La universidad pública más grande de la costa ecuatoriana.',
    infoText: 'La Universidad de Guayaquil ofrece múltiples carreras en el área de negocios y administración con educación gratuita y acceso público.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.ug.edu.ec/' },
      { label: 'Facultad de Ciencias Administrativas', url: 'https://www.ug.edu.ec/facultad-de-ciencias-administrativas/' },
      { label: 'Proceso de Admisión', url: 'https://admision.ug.edu.ec/' },
    ],
  },
  {
    id: 'u9',
    name: 'UCuenca',
    fullName: 'Universidad de Cuenca',
    career: 'Derecho',
    cost: 'Gratuita (Pública)',
    costLevel: 'bajo',
    mode: 'Presencial',
    scholarship: 'Becas estatales y ayudas de la institución',
    location: 'Cuenca',
    proximity: 'far',
    proxLabel: 'Requiere traslado',
    website: 'https://www.ucuenca.edu.ec',
    highlight: 'Reconocida por su excelencia académica en el austro ecuatoriano.',
    infoText: 'Institución pública que destaca por la calidad de sus egresados en la carrera de Derecho y Jurisprudencia.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.ucuenca.edu.ec/' },
      { label: 'Facultad de Jurisprudencia', url: 'https://www.ucuenca.edu.ec/jurisprudencia/' },
      { label: 'Admisiones', url: 'https://www.ucuenca.edu.ec/admision/' },
    ],
  },
  {
    id: 'u10',
    name: 'UTPL',
    fullName: 'Universidad Técnica Particular de Loja',
    career: 'Ingeniería de Software / Ciberseguridad',
    cost: 'Consultar arancel según modalidad',
    costLevel: 'medio',
    mode: 'Presencial y En Línea (Distancia)',
    scholarship: 'Amplio programa de becas y descuentos',
    location: 'Loja / Todo el país',
    proximity: 'near',
    proxLabel: 'Modalidad en línea',
    website: 'https://www.utpl.edu.ec',
    highlight: 'Líder nacional en educación a distancia e innovación tecnológica.',
    infoText: 'La UTPL es pionera en modalidades de estudio a distancia, lo que permite estudiar carreras tecnológicas desde cualquier parte del país.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.utpl.edu.ec/' },
      { label: 'Oferta Académica de Grado', url: 'https://www.utpl.edu.ec/carreras' },
      { label: 'Becas UTPL', url: 'https://www.utpl.edu.ec/becas' },
      { label: 'Tecnologías de la Información', url: 'https://www.utpl.edu.ec/carreras/tecnologias' },
    ],
  },
  {
    id: 'u11',
    name: 'USFQ',
    fullName: 'Universidad San Francisco de Quito',
    career: 'Marketing / Psicología',
    cost: 'Consultar aranceles oficiales',
    costLevel: 'alto',
    mode: 'Presencial',
    scholarship: 'Programa de Asistencia Financiera y Becas',
    location: 'Quito',
    proximity: 'near',
    proxLabel: 'Cerca de ti',
    website: 'https://www.usfq.edu.ec',
    highlight: 'Sistema de Artes Liberales y alto prestigio internacional.',
    infoText: 'La USFQ aplica la filosofía de Artes Liberales, ofreciendo una formación integral y opciones de asistencia financiera.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.usfq.edu.ec/' },
      { label: 'Admisiones Pregrado', url: 'https://www.usfq.edu.ec/es/admisiones' },
      { label: 'Becas y Asistencia Financiera', url: 'https://www.usfq.edu.ec/es/becas' },
      { label: 'Colegio de Administración', url: 'https://www.usfq.edu.ec/es/colegios/colegio-de-administracion-y-economia' },
    ],
  },
  {
    id: 'u12',
    name: 'UCSG',
    fullName: 'Universidad Católica de Santiago de Guayaquil',
    career: 'Diseño Gráfico',
    cost: 'Consultar aranceles',
    costLevel: 'medio',
    mode: 'Presencial',
    scholarship: 'Becas por rendimiento y situación socioeconómica',
    location: 'Guayaquil',
    proximity: 'far',
    proxLabel: 'Requiere traslado',
    website: 'https://www.ucsg.edu.ec',
    highlight: 'Reconocida universidad privada con gran trayectoria en Guayas.',
    infoText: 'La UCSG cuenta con diversas carreras creativas y de ciencias sociales, manteniendo un enfoque ético y profesional.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.ucsg.edu.ec/' },
      { label: 'Admisiones', url: 'https://www.ucsg.edu.ec/admisiones/' },
      { label: 'Carrera de Diseño', url: 'https://www.ucsg.edu.ec/arquitectura-y-diseno/diseno-grafico/' },
      { label: 'Bienestar Estudiantil', url: 'https://www.ucsg.edu.ec/bienestar-estudiantil/' },
    ],
  },
  {
    id: 'u13',
    name: 'UPS',
    fullName: 'Universidad Politécnica Salesiana',
    career: 'Ingeniería en Sistemas / Computación',
    cost: 'Consultar valores de matrícula',
    costLevel: 'medio',
    mode: 'Presencial y En Línea',
    scholarship: 'Descuentos por quintiles y apoyo socioeconómico',
    location: 'Quito, Guayaquil, Cuenca',
    proximity: 'near',
    proxLabel: 'Múltiples sedes',
    website: 'https://www.ups.edu.ec',
    highlight: 'Amplia oferta tecnológica y sedes en las principales ciudades.',
    infoText: 'La UPS destaca por su formación tecnológica e ingenierías, con presencia nacional y opciones de pago accesibles.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.ups.edu.ec/' },
      { label: 'Oferta Académica', url: 'https://www.ups.edu.ec/carreras-grado' },
      { label: 'Proceso de Admisión', url: 'https://www.ups.edu.ec/admisiones' },
      { label: 'Ingeniería en Computación', url: 'https://www.ups.edu.ec/carrera-de-computacion' },
    ],
  },
  {
    id: 'u14',
    name: 'UTM',
    fullName: 'Universidad Técnica de Manabí',
    career: 'Ciencias de Datos',
    cost: 'Gratuita (Pública)',
    costLevel: 'bajo',
    mode: 'Presencial / En Línea',
    scholarship: 'Ayudas gubernamentales y becas internas',
    location: 'Portoviejo',
    proximity: 'far',
    proxLabel: 'Requiere traslado',
    website: 'https://www.utm.edu.ec',
    highlight: 'Fuerte presencia en investigación e innovación en Manabí.',
    infoText: 'La UTM se ha modernizado, ofreciendo carreras de alta demanda como Ciencias de Datos en diferentes modalidades.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.utm.edu.ec/' },
      { label: 'Admisiones UTM', url: 'https://admision.utm.edu.ec/' },
      { label: 'Oferta Académica', url: 'https://www.utm.edu.ec/oferta-academica' },
    ],
  },
  {
    id: 'u15',
    name: 'UNEMI',
    fullName: 'Universidad Estatal de Milagro',
    career: 'Psicología',
    cost: 'Gratuita (Pública)',
    costLevel: 'bajo',
    mode: 'En línea / Presencial',
    scholarship: 'Becas estudiantiles estatales',
    location: 'Milagro / Todo el país',
    proximity: 'near',
    proxLabel: 'Modalidad en línea',
    website: 'https://www.unemi.edu.ec',
    highlight: 'Pionera en educación pública superior en línea en Ecuador.',
    infoText: 'UNEMI ha revolucionado el acceso a la educación pública ofreciendo carreras altamente demandadas de forma virtual.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.unemi.edu.ec/' },
      { label: 'Admisión', url: 'https://admision.unemi.edu.ec/' },
      { label: 'FACS - Psicología', url: 'https://www.unemi.edu.ec/facultades/facultad-de-ciencias-sociales/' },
    ],
  },
  {
    id: 'u16',
    name: 'UTA',
    fullName: 'Universidad Técnica de Ambato',
    career: 'Ingeniería de Software',
    cost: 'Gratuita (Pública)',
    costLevel: 'bajo',
    mode: 'Presencial',
    scholarship: 'Ayudas estatales y beneficios por alto rendimiento',
    location: 'Ambato',
    proximity: 'far',
    proxLabel: 'Requiere traslado',
    website: 'https://www.uta.edu.ec',
    highlight: 'Excelente nivel en ciencias e ingenierías en la zona centro del país.',
    infoText: 'La UTA cuenta con la Facultad de Ingeniería en Sistemas donde desarrolla profesionales altamente capacitados.',
    officialLinks: [
      { label: 'Página principal', url: 'https://www.uta.edu.ec/' },
      { label: 'FISEI', url: 'https://fisei.uta.edu.ec/' },
      { label: 'Admisión', url: 'https://admision.uta.edu.ec/' },
    ],
  }
]

// ─── Data para Versus (Comparación de Carreras) ──────────────────
export const CAREER_VERSUS = [
  {
    id: 'vs1',
    careerA: 'Ingeniería de Software',
    careerB: 'Ciencia de Datos',
    criteria: [
      { label: 'Salario promedio', a: '$1,200 - $3,500', b: '$1,300 - $3,800', winner: 'b' },
      { label: 'Demanda laboral', a: 'Muy alta', b: 'Muy alta', winner: 'tie' },
      { label: 'Dificultad', a: 'Alta', b: 'Muy alta', winner: 'a' },
      { label: 'Trabajo remoto', a: 'Muy posible', b: 'Posible', winner: 'a' },
      { label: 'Tiempo de estudio', a: '4-5 años', b: '4-5 años + especialización', winner: 'a' },
      { label: 'Riesgo de automatización', a: 'Bajo', b: 'Muy bajo', winner: 'b' },
    ],
  },
  {
    id: 'vs2',
    careerA: 'Psicología',
    careerB: 'Medicina',
    criteria: [
      { label: 'Salario promedio', a: '$800 - $2,000', b: '$1,500 - $5,000', winner: 'b' },
      { label: 'Duración de carrera', a: '5 años', b: '6-7 años + residencia', winner: 'a' },
      { label: 'Costo de estudios', a: 'Moderado', b: 'Alto', winner: 'a' },
      { label: 'Impacto social', a: 'Alto', b: 'Muy alto', winner: 'b' },
      { label: 'Balance vida-trabajo', a: 'Bueno', b: 'Difícil al inicio', winner: 'a' },
      { label: 'Opciones de emprender', a: 'Consultorio propio', b: 'Clínica privada', winner: 'tie' },
    ],
  },
  {
    id: 'vs3',
    careerA: 'Diseño Gráfico & UX',
    careerB: 'Marketing Digital',
    criteria: [
      { label: 'Salario promedio', a: '$900 - $2,800', b: '$800 - $2,500', winner: 'a' },
      { label: 'Creatividad requerida', a: 'Muy alta', b: 'Alta', winner: 'a' },
      { label: 'Freelance posible', a: 'Muy posible', b: 'Muy posible', winner: 'tie' },
      { label: 'Conocimientos técnicos', a: 'Figma, Adobe, código', b: 'Ads, SEO, analytics', winner: 'tie' },
      { label: 'Demanda en Ecuador', a: 'Alta', b: 'Muy alta', winner: 'b' },
      { label: 'Necesitas portafolio', a: 'Imprescindible', b: 'Ayuda mucho', winner: 'b' },
    ],
  },
]

// ─── Función helper para calcular afinidad ───────────────────────
/**
 * Calcula qué carreras son más afines según las respuestas del usuario.
 * @param {string[]} selectedInterests - IDs de intereses seleccionados
 * @param {Object[]} quizAnswers - Respuestas del quiz [{questionId, optionId}]
 * @returns {Object[]} Carreras ordenadas por afinidad con porcentaje
 */
export function calculateAffinity(selectedInterests, quizAnswers = []) {
  const allCareers = [...CAREERS, ...EMERGING]
  const tagCounts = {}

  // Contar tags de intereses seleccionados
  selectedInterests.forEach(interest => {
    tagCounts[interest] = (tagCounts[interest] || 0) + 2
  })

  // Contar tags de respuestas del quiz
  quizAnswers.forEach(answer => {
    const question = QUIZ_QUESTIONS.find(q => q.id === answer.questionId)
    if (question) {
      const option = question.options.find(o => o.id === answer.optionId)
      if (option) {
        option.tags.forEach(tag => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
      }
    }
  })

  // Calcular afinidad para cada carrera
  const results = allCareers.map(career => {
    const matchingTags = career.tags.filter(tag => tagCounts[tag])
    const totalWeight = matchingTags.reduce((sum, tag) => sum + (tagCounts[tag] || 0), 0)
    const maxPossible = career.tags.length * 3 // máximo posible por carrera
    const pct = Math.min(Math.round((totalWeight / maxPossible) * 100), 98)

    return {
      ...career,
      pct,
      matchingTags,
      label: pct >= 80 ? 'top' : pct >= 60 ? 'possible' : 'explore',
      labelText: pct >= 80 ? 'Muy Afín' : pct >= 60 ? 'Posible Opción' : 'Explorar Más',
    }
  })

  return results
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 5)
}
