import "./Header.css"

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <button onClick={toggleSidebar} className="sidebar-toggle">
        ☰
      </button>
      <h1>AudioScript</h1>
      <div className="user-menu">
        <button className="user-menu-button">👤</button>
        <div className="user-menu-dropdown">
          <div className="menu-item">Profile</div>
          <div className="menu-item">Settings</div>
          <div className="menu-item">Log out</div>
        </div>
      </div>
    </header>
  )
}

export default Header

