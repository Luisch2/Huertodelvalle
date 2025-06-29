import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ onClose = () => {} }) {
  const location = useLocation();

  const menuItems = [
    { label: "Mi cuenta", path: "" },
    { label: "Mis datos", path: "mis-datos" },
    { label: "Mis direcciones", path: "direcciones" },
    { label: "Mis pedidos", path: "pedidos" },
    { label: "Mis favoritos", path: "favoritos" },
    { label: "Giftcard", path: "giftcard" },
  ];

  return (
    <aside className="min-h-screen w-full md:w-[280px] p-6 bg-white font-sans">
      {/* Encabezado */}
      <h2 className="text-[18px] font-bold mb-1">Hola,</h2>
      <p className="text-sm mb-6 text-gray-600 break-all">
        camposluis2722@gmail.com
      </p>

      {/* Navegación */}
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item, i) => {
          const fullPath = `/usuario${item.path ? "/" + item.path : ""}`;
          const isActive = location.pathname === fullPath;

          return (
            <Link
              key={i}
              to={fullPath}
              onClick={onClose}
              className={`flex items-center text-[15px] pl-4 relative group transition-all duration-200
                ${isActive ? "font-semibold text-black" : "text-gray-600 hover:text-black"}`}
            >
              {/* Rayita negra a la izquierda */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-black rounded-sm
                  transition-all duration-200
                  ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              />

              {item.label}

              {/* Badge si existe */}
              {item.badge && (
                <span className="ml-2 text-xs bg-lime-300 text-black px-2 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Cerrar sesión */}
      <div className="mt-10">
        <button className="text-[15px] font-bold text-gray-800">Cerrar Sesión</button>
      </div>
    </aside>
  );
}
