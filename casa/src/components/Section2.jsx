import React from 'react';

const Section2 = () => {
  return (
    <div className="my-8 bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Ofertas Especiales</h2>
      <p className="text-lg mb-4">Aprovecha las ofertas limitadas en nuestra tienda, ¡los productos más vendidos a precios increíblemente bajos!</p>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all">
          Ver Ofertas
        </button>
      </div>
    </div>
  );
};

export default Section2;
