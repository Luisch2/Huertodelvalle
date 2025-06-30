import React from 'react';

const Section3 = () => {
  return (
    <div className="my-8 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Lo que dicen nuestros clientes</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <p className="text-lg italic">"Excelente atención y productos de calidad. ¡Muy recomendados!"</p>
          <p className="font-semibold">Carlos S.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <p className="text-lg italic">"Me encantaron los descuentos y la rapidez en la entrega. Sin duda volveré."</p>
          <p className="font-semibold">Laura M.</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
