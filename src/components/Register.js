import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error en el registro');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
        />
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
          Registrarse
        </button>
        <p className="text-center mt-4">
          ¿Ya tienes cuenta? <Link to="/login" className="text-blue-500 hover:underline">Inicia sesión aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
