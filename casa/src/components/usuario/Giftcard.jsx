import { Gift } from "lucide-react";
import { useState } from "react";

export default function Giftcard() {
  const [codigo, setCodigo] = useState("");

  const handleChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleCheck = () => {
    alert(`Código ingresado: ${codigo}`);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans px-10 pt-6">
      <div className="bg-white w-full max-w-[520px] rounded-3xl p-10 shadow-sm">

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-black text-white p-3 rounded-full">
            <Gift className="w-5 h-5" />
          </div>
          <h2 className="text-[15px] font-medium text-black font-poppins mb-1">
            Giftcard
          </h2>
        </div>

        {/* Formulario */}
        <div className="text-[13px] font-poppins">
          <label className="block mb-2 text-black font-medium">Código *</label>
          <input
            type="text"
            value={codigo}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-md py-2 px-3 mb-6 focus:outline-none"
          />
          <div className="flex justify-center">
            <button
              onClick={handleCheck}
              className="bg-[#b3babe] text-white text-[12px] font-semibold uppercase px-6 py-2 rounded-sm tracking-wide w-[180px]"
            >
              Chequear código
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
