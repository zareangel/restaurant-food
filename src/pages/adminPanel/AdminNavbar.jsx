import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">
        <div className="admin-brand">🍔 Burger Stop Admin</div>

        {/* Links + usuario dentro del menú móvil */}
        <div className={`admin-links ${isOpen ? "active" : ""}`}>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/orders">Orders</Link>

          {isOpen && (
            <div className="admin-user-mobile">
              <span className="admin-email">{user?.name}</span>
              <button className="admin-logout" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Usuario en escritorio */}
        <div className="admin-user-desktop">
          <span className="admin-email">{user?.name}</span>
          <button className="admin-logout" onClick={logout}>
            Logout
          </button>
        </div>

        {/* Hamburger derecha */}
        <div className="admin-hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;