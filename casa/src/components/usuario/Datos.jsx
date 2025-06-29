import { useState } from "react";

const Datos = () => {
  const [form, setForm] = useState({
    apellido: "",
    nombre: "",
    departamento: "",
    distrito: "",
    dni: "",
    nacimiento: "",
    genero: "",
    celular: "",
    codigo: "+51"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans px-10 pt-6">
      <div className="bg-white w-full max-w-[720px] rounded-3xl p-10 shadow-sm">

        <div className="flex items-center gap-2 mb-8">
          <div className="bg-black text-white p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.28 0 4.13-1.85 4.13-4.13S14.28 3.74 12 3.74 7.87 5.59 7.87 7.87 9.72 12 12 12zm0 2.25c-2.98 0-8.25 1.5-8.25 4.5v1.5h16.5v-1.5c0-3-5.27-4.5-8.25-4.5z"
              />
            </svg>
          </div>
          <h2 className="block text-[15px] font-medium text-black font-poppins mb-1">Info. Personal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 ">
          {[
            { label: "Apellido*", name: "apellido", value: form.apellido },
            { label: "Nombre*", name: "nombre", value: form.nombre },
            {
              label: "Departamento",
              name: "departamento",
              value: form.departamento,
              placeholder: "Por favor coloque un departamento"
            },
            {
              label: "Distrito",
              name: "distrito",
              value: form.distrito,
              placeholder: "Por favor coloque un distrito"
            },
            { label: "DNI*", name: "dni", value: form.dni },
            {
              label: "Fecha de nacimiento",
              name: "nacimiento",
              type: "date",
              value: form.nacimiento
            },
            {
              label: "Género",
              name: "genero",
              value: form.genero,
              placeholder: "Masculino / Femenino"
            }
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-[13px] font-medium text-black font-poppins mb-1">
                {field.label}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={field.value}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-sm py-1"
              />
            </div>
          ))}


          <div>
            <label className="block text-[13px] font-medium text-black font-poppins mb-1">
              Celular
            </label>
            <div className="flex gap-2">
              <input
                name="codigo"
                type="text"
                value={form.codigo}
                onChange={handleChange}
                className="w-20 border-b border-gray-300 focus:outline-none focus:border-black text-sm py-1"
              />
              <input
                name="celular"
                type="text"
                value={form.celular}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-blue-50 focus:outline-none focus:border-black text-sm py-1"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#2e2e2e] text-white text-[10px] font-semibold uppercase px-6 py-2 rounded-sm tracking-wide w-[180px] h-[40px]">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Datos;
