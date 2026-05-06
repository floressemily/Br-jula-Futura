import { useState } from 'react'
import { UNIVERSITIES } from '../data/db'

export default function UniversitySection() {
  const [selectedUniversity, setSelectedUniversity] = useState(null)

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

        <div className="uni-grid">
          {UNIVERSITIES.map(u => (
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
          ))}
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