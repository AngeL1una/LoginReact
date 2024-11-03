// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, handleLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">
          <Link to="/">Mi Aplicación</Link>
        </h1>
        <div>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white mx-2">Tu Cuenta</Link>
              <button
                onClick={() => {
                  handleLogout();
                  navigate("/login");
                }}
                className="text-white mx-2"
              >
                Salir de Cuenta
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mx-2">Login</Link>
              <Link to="/register" className="text-white mx-2">Registro</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
