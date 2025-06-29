import { useState } from "react";
import { MapPin } from "lucide-react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

// Ícono del marcador (por defecto Leaflet no carga bien el ícono si no lo defines)
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


const LocationPicker = ({ onSelect }) => {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
};


const MisDirreciones= () => {
  const [form, setForm] = useState({
    nombre: "Luis",
    apellido: "Campos Huarcaya",
    dni: "71461422",
    codigo: "+51",
    celular: "956 467 958",
    direccion: "",
    referencia: "",
    piso: "",
    adicional: "",
  });

  const [latLng, setLatLng] = useState(null);

useEffect(() => {
  if (latLng) {
    const fetchAddress = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latLng.lat}&lon=${latLng.lng}&format=json`
        );
        const data = await res.json();
        setForm((prevForm) => ({
          ...prevForm,
          direccion: data.display_name || "Dirección no encontrada",
        }));
      } catch (error) {
        console.error("Error al obtener dirección:", error);
      }
    };
    fetchAddress();
  }
}, [latLng]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] font-poppins px-10 pt-6 pb-40">

      <div className="bg-white w-full max-w-[720px] rounded-3xl p-10 shadow-sm">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-black text-white p-3 rounded-full">
  <MapPin className="w-5 h-5" />
</div>

          <h2 className="text-[15px] font-medium text-black">Mis direcciones</h2>
        </div>

        {/* Info Personal */}
        <h3 className="text-[13px] font-semibold text-black underline mb-6">Información Personal</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            { label: "Nombre*", name: "nombre", value: form.nombre },
            { label: "Apellido*", name: "apellido", value: form.apellido },
            { label: "DNI *", name: "dni", value: form.dni }
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-[13px] font-medium text-black mb-1">{field.label}</label>
              <input
                name={field.name}
                type="text"
                value={field.value}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-sm py-1"
              />
            </div>
          ))}

          <div>
            <label className="block text-[13px] font-medium text-black mb-1">Teléfono móvil*</label>
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

        {/* Dirección */}
        <h3 className="text-[13px] font-semibold text-black underline mt-10 mb-6">Dirección</h3>

        <div className="mb-6">
          <input
            name="direccion"
            type="text"
            placeholder="Ingresa tu dirección"
            value={form.direccion}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-sm py-1"
          />
        </div>
{/* Mapa para seleccionar ubicación */}
<div className="h-[300px] w-full rounded-lg overflow-hidden mb-8 z-0">

  <MapContainer
  center={[-12.0464, -77.0428]}
  zoom={14}
  scrollWheelZoom={true}
  zoomAnimation={true}
  fadeAnimation={true}
  className="h-full w-full"
>

<TileLayer
  attribution='&copy; CartoDB'
  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
/>






    <LocationPicker onSelect={setLatLng} />
    {latLng && <Marker position={latLng} icon={icon} />}
  </MapContainer>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-6">
          <div>
            <label className="block text-[13px] font-medium text-black mb-1">Referencia</label>
            <input
              name="referencia"
              type="text"
              value={form.referencia}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-sm py-1"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-black mb-1">Piso/Depto</label>
            <input
              name="piso"
              type="text"
              value={form.piso}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-sm py-1"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[13px] font-medium text-black mb-1">Información adicional</label>
          <input
            name="adicional"
            type="text"
            placeholder="Escribir aquí"
            value={form.adicional}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-sm py-1"
          />
        </div>

        {/* Botón */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#2e2e2e] text-white text-[10px] font-semibold uppercase px-6 py-2 rounded-sm tracking-wide w-[180px] h-[40px]">
            Guardar cambios
          </button>
        </div>

      </div>
    </div>
  );
};

export default MisDirreciones;
