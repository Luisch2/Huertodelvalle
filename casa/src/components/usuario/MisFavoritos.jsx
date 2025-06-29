import { Heart } from "lucide-react";

const Favoritos = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans px-10 pt-6">
      <div className="bg-white w-full max-w-[720px] rounded-3xl p-10 shadow-sm">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-black text-white p-3 rounded-full">
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="block text-[15px] font-medium text-black font-poppins mb-1">
            Mis productos Favs
          </h2>
        </div>

        <div className="text-center py-20">
          <p className="text-gray-500 text-sm mb-6">
            Aún no hay Favs registrados
          </p>
          <button className="bg-[#2e2e2e] text-white px-6 py-2 text-sm rounded-sm font-semibold">
            Navega el sitio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;
