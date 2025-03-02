import "./Sidebar.css"

function Sidebar({ isOpen, responses, onResponseClick, currentResponseId }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Previous Analyses</h2>
      </div>
      <div className="sidebar-content">
        {responses.length === 0 ? (
          <div className="no-responses">No previous analyses</div>
        ) : (
          responses.map((response) => (
            <button
              key={response.id}
              className={`response-item ${response.id === currentResponseId ? "active" : ""}`}
              onClick={() => onResponseClick(response)}
            >
              <div className="response-item-content">
                <div className="response-item-title">
                  <span className="icon">🎵</span>
                  <span className="audio-name">{response.audioName}</span>
                </div>
                <div className="response-item-timestamp">
                  <span className="icon">🕒</span>
                  <span>{response.timestamp}</span>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}

export default Sidebar

