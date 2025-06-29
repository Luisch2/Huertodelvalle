import { ShoppingBag } from "lucide-react";

export default function MisPedidos() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans px-10 pt-6">
      <div className="bg-white w-full max-w-[720px] rounded-3xl p-10 shadow-sm">

        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-3 rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h2 className="text-[15px] font-medium text-black font-poppins mb-1">
              Mis Pedidos
            </h2>
          </div>
          <span className="text-[13px] font-medium text-[#666]">1 Pedido</span>
        </div>

        {/* Tarjeta de Pedido */}
        <div className="grid grid-cols-5 gap-4 py-4 border-t border-gray-200 text-[13px] font-poppins">
          <div>
            <span className="block text-black mb-1">N° de pedido</span>
            <span className="font-medium text-[#999]">97000202432</span>
          </div>
          <div>
            <span className="block text-black mb-1">Fecha</span>
            <span className="font-medium text-[#999]">2/12/24</span>
          </div>
          <div>
            <span className="block text-black mb-1">Total</span>
            <span className="font-medium text-[#999]">s/ 47,88</span>
          </div>
          <div>
            <span className="block text-black mb-1">Estado</span>
            <span className="text-green-600 font-semibold">Entregado</span>
          </div>
          <div className="flex items-end">
            <button className="text-[#666] hover:text-black font-semibold text-[13px] underline">
              Ver Pedido
            </button>
          </div>
        </div>

        {/* Paginación */}
        <div className="flex justify-end items-center mt-6 text-[13px] text-[#666] font-medium">
          <span className="mr-2">Mostrar</span>
          <select className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none text-[13px] font-poppins">
            <option>10</option>
            <option>20</option>
          </select>
          <span className="ml-2">Por página</span>
        </div>
      </div>
    </div>
  );
}
