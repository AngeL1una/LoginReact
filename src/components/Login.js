import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      alert(response.data.message);

      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', response.data.token);

      // Actualizar el estado de autenticación
      setIsAuthenticated(true);

      // Redirigir al dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Error en el inicio de sesión');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Iniciar Sesión
        </button>
        <p className="text-center mt-4">
          ¿No tienes cuenta? <Link to="/register" className="text-blue-500 hover:underline">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
