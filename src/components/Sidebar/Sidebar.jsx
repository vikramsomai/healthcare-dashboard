import "./Sidebar.css";
import { navigationLinks } from "../../data/navigationLinks";

function Sidebar({ isOpen }) {
  const generalLinks = navigationLinks.filter(
    (link) => link.category === "general"
  );
  const toolsLinks = navigationLinks.filter(
    (link) => link.category === "tools" && link.id !== "setting"
  );
  const settingLinks = navigationLinks.filter((link) => link.id === "setting");
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <span className="logo-health">Health</span>
        <span className="logo-care">care.</span>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-section-title">General</h3>
          <ul className="nav-links">
            {generalLinks.map((link) => (
              <li
                key={link.id}
                className={`nav-item ${link.active ? "active" : ""}`}
              >
                <a href="#" className="nav-link">
                  <span className="nav-icon material-icons-sharp">
                    {link.icon}
                  </span>
                  <span className="nav-text">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Tools</h3>
          <ul className="nav-links">
            {toolsLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a href="#" className="nav-link">
                  <span className="nav-icon material-icons-sharp">
                    {link.icon}
                  </span>
                  <span className="nav-text">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-section setting-section">
          <li key="settingLinks" className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-icon material-icons-sharp">
                {settingLinks[0].icon}
              </span>
              <span className="nav-text">{settingLinks[0].name}</span>
            </a>
          </li>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
