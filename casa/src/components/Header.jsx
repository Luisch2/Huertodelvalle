import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaHeart,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    if (user) {
      navigate("/usuario");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="w-full">
      {/* Barra animada superior */}
      <div className="bg-teal-500 overflow-hidden h-[32px]">
        <div className="animate-marquee whitespace-nowrap text-white text-sm font-semibold flex gap-16 px-4">
          <span>¡Realiza tu pedido aquí y obten un cupón de descuento!</span>
          <span>Envío gratis a partir de S/100</span>
          <span>¡Realiza tu pedido aquí y obten un cupón de descuento!</span>
          <span>Envío gratis a partir de S/100</span>
        </div>
      </div>

      {/* Menú principal */}
      <nav className="bg-white shadow">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Navegación */}
          <ul className="flex space-x-6 text-teal-800 font-medium text-sm">
            <li><a href="#" className="hover:text-orange-500">Inicio</a></li>
            <li><a href="#" className="hover:text-orange-500 font-semibold">Tienda</a></li>
            <li><a href="#" className="hover:text-orange-500">Recetas</a></li>
            <li><a href="#" className="hover:text-orange-500">Carrito</a></li>
          </ul>

          {/* Íconos */}
          <div className="flex items-center gap-5 text-teal-800 text-lg relative">
            <FaHeart />

            {/* Ícono de Usuario con dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <FaUser
                onClick={handleClick}
                className="cursor-pointer"
              />
              {showDropdown && (
                <div className="absolute top-8 left-[-20px] bg-white border shadow p-2 text-sm rounded z-50 w-[120px]">
                  <span className="block hover:text-orange-500 cursor-pointer" onClick={handleClick}>
                    {user ? "Mi cuenta" : "Iniciar sesión"}
                  </span>
                </div>
              )}
            </div>

            {/* Carrito */}
            <div className="flex items-center gap-1 text-sm relative">
              <span>S/0,00</span>
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
