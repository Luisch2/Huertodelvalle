import { CircleUser, MapPin, Lock, Package, Gift } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <main className="flex-1 p-6 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {/* Columna 1 */}
          <div className="flex flex-col gap-6">
            {/* Compras recientes */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Package className="w-6 h-6 bg-black text-white rounded-full p-1" />
                  <h3 className="text-[13px] font-semibold">Compras recientes</h3>
                </div>
                <a href="#" className="text-[12px] text-gray-500">Ver todo</a>
              </div>
              <div className="text-[13px] leading-relaxed">
                <p className="mb-1 font-medium">N° de pedido: <span className="font-normal">97000202432</span></p>
                <p className="mb-1 font-medium">Fecha: <span className="font-normal">2/12/24</span></p>
                <p className="mb-1 font-medium">Enviar a: <span className="font-normal">Luis Campos</span></p>
                <p className="mb-1 font-medium">Total: <span className="font-normal">s/ 47,88</span></p>
                <p className="mb-1 font-medium">Estado: <span className="text-green-500 font-bold">Entregado</span></p>
              </div>
            </div>

            {/* Info de contacto */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <CircleUser className="w-6 h-6 bg-black text-white rounded-full p-1" />
                <h3 className="text-[13px] font-semibold">Info. de contacto</h3>
              </div>
              <div className="text-[13px]">
                <p className="font-medium">Nombre y apellidos</p>
                <p className="text-gray-600 mb-2">Luis Campos Huarcaya</p>
                <p className="font-medium">E-mail</p>
                <p className="text-gray-600">camposluis2722@gmail.com</p>
                <div className="flex gap-2 mt-2 text-xs">
                  <a href="#" className="underline">Editar</a>
                  <a href="#" className="underline">Editar contraseña</a>
                </div>
              </div>
            </div>

            {/* Mis direcciones */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 bg-black text-white rounded-full p-1" />
                  <h3 className="text-[13px] font-semibold">Mis direcciones</h3>
                </div>
                <a href="#" className="text-[12px] text-gray-500">Ver todas</a>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[13px]">
                <div>
                  <p className="font-medium">Dirección de Facturación</p>
                  <p className="text-gray-500 text-[13px]">Aún no guardaste una dirección de facturación.</p>
                  <a href="#" className="text-xs underline">Editar</a>
                </div>
                <div>
                  <p className="font-medium">Dirección de Envío</p>
                  <p className="text-gray-500 text-[13px]">Aún no guardaste una dirección de envío.</p>
                  <a href="#" className="text-xs underline">Editar</a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col gap-6">
            {/* Perfil completado */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      className="text-gray-200 stroke-current"
                      strokeWidth="4"
                      fill="none"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-lime-800 stroke-current"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="13, 100"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[12px] font-medium">13%</span>
                  </div>
                </div>
                <p className="text-[13px] font-medium">Perfil completado</p>
              </div>
              <div className="flex justify-around mt-4 text-xs text-center">
                <div className="flex flex-col items-center gap-1">
                  <CircleUser className="w-4 h-4" />
                  <a href="#" className="underline">Personal</a>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Lock className="w-4 h-4" />
                  <a href="#" className="underline">Intereses</a>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Package className="w-4 h-4" />
                  <a href="#" className="underline">Contacto</a>
                </div>
              </div>
            </div>

            {/* Giftcard */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-6 h-6 bg-black text-white rounded-full p-1" />
                <h3 className="text-[13px] font-semibold">Giftcard</h3>
              </div>
              <div className="text-[13px]">
                <label className="text-[13px] font-medium text-gray-700 mb-1 block">Código *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
                  placeholder="Ingresa el código"
                />
                <button className="w-full bg-gray-400 text-white font-semibold py-2 rounded-md text-[12px]">
                  CHEQUEAR CÓDIGO
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="py-4 text-center text-[12px] text-gray-400">
        {/* Footer personalizado si deseas */}
      </footer>
    </div>
  );
}
