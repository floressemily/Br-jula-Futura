import { useState, useMemo } from 'react'
import { UNIVERSITIES } from '../data/db'

export default function UniversitySection() {
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  
  const [searchTerm, setSearchTerm] = useState('')
  const [costFilter, setCostFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter(u => {
      const matchSearch = (
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (u.fullName && u.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        u.career.toLowerCase().includes(searchTerm.toLowerCase())
      )
      const matchCost = costFilter === 'all' || u.costLevel === costFilter
      const matchLoc = locationFilter === 'all' || u.location.toLowerCase().includes(locationFilter.toLowerCase())
      
      return matchSearch && matchCost && matchLoc
    })
  }, [searchTerm, costFilter, locationFilter])

  const closeModal = () => {
    setSelectedUniversity(null)
  }

  return (
    <section className="section universities-bg" id="universidades">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-label">Universidades</div>
          <h2 className="section-title">¿Dónde podrías estudiar?</h2>
          <p className="section-desc">
            Opciones reales en Ecuador, con información clara sobre costos, modalidad,
            becas y enlaces oficiales para investigar mejor cada universidad.
          </p>
        </div>

        <div className="uni-filters">
          <input 
            type="text" 
            placeholder="Buscar universidad o carrera..." 
            className="uni-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="uni-filters-row">
            <select 
              className="uni-select" 
              value={locationFilter} 
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="all">Todas las ubicaciones</option>
              <option value="Quito">Quito</option>
              <option value="Guayaquil">Guayaquil</option>
              <option value="Cuenca">Cuenca</option>
              <option value="Loja">Loja</option>
              <option value="Portoviejo">Portoviejo</option>
              <option value="Milagro">Milagro</option>
              <option value="Ambato">Ambato</option>
            </select>
            <select 
              className="uni-select" 
              value={costFilter} 
              onChange={(e) => setCostFilter(e.target.value)}
            >
              <option value="all">Cualquier costo</option>
              <option value="bajo">Costo Bajo (Públicas)</option>
              <option value="medio">Costo Medio</option>
              <option value="alto">Costo Alto</option>
            </select>
          </div>
        </div>

        <div className="uni-grid">
          {filteredUniversities.length > 0 ? (
            filteredUniversities.map(u => (
            <button
              key={u.id}
              type="button"
              className="uni-card uni-card-clickable"
              id={`uni-${u.id}`}
              onClick={() => setSelectedUniversity(u)}
            >
              <div className="uni-header">
                <div>
                  <span className="uni-name">{u.name}</span>
                  {u.fullName && <span className="uni-full-name">{u.fullName}</span>}
                </div>
                <span className={`uni-proximity prox-${u.proximity}`}>{u.proxLabel}</span>
              </div>

              <p className="uni-career">🎓 {u.career}</p>

              {u.highlight && (
                <div className="uni-highlight">⭐ {u.highlight}</div>
              )}

              <div className="uni-info">
                <div className="uni-info-item">
                  <span className="ui-label">Costo</span>
                  <span className={`ui-value cost-${u.costLevel}`}>{u.cost}</span>
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

              <span className="uni-more-hint">Clic para ver enlaces oficiales →</span>
            </button>
            ))
          ) : (
            <div className="uni-empty">No se encontraron universidades con esos filtros.</div>
          )}
        </div>
      </div>

      {selectedUniversity && (
        <div className="uni-modal-overlay" onClick={closeModal}>
          <div
            className="uni-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="uni-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="uni-modal-close"
              onClick={closeModal}
              aria-label="Cerrar ventana"
            >
              ×
            </button>

            <div className="uni-modal-header">
              <span className="uni-modal-badge">{selectedUniversity.proxLabel}</span>
              <h3 id="uni-modal-title">{selectedUniversity.name}</h3>
              <p>{selectedUniversity.fullName}</p>
            </div>

            <div className="uni-modal-body">
              <div className="uni-modal-summary">
                <div>
                  <span className="ui-label">Carrera relacionada</span>
                  <strong>{selectedUniversity.career}</strong>
                </div>
                <div>
                  <span className="ui-label">Costo</span>
                  <strong className={`cost-${selectedUniversity.costLevel}`}>
                    {selectedUniversity.cost}
                  </strong>
                </div>
                <div>
                  <span className="ui-label">Modalidad</span>
                  <strong>{selectedUniversity.mode}</strong>
                </div>
                <div>
                  <span className="ui-label">Ubicación</span>
                  <strong>{selectedUniversity.location}</strong>
                </div>
              </div>

              <p className="uni-modal-text">
                {selectedUniversity.infoText}
              </p>

              <div className="uni-modal-links">
                <h4>Links oficiales para investigar</h4>

                {selectedUniversity.officialLinks?.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uni-official-link"
                  >
                    <span>{link.label}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>

              <p className="uni-modal-note">
                Nota: los costos pueden cambiar por semestre, modalidad, becas o normativa.
                Revisa siempre el enlace oficial antes de tomar una decisión.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}