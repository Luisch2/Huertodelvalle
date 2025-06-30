import React from 'react';

const PopularItems = () => {
  const products = [
    { id: 1, name: 'Producto A', image: 'https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-almendra-natural-1.jpg', price: '$25.00' },
    { id: 2, name: 'Producto B', image: 'https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-pecana-partida.jpg', price: '$30.00' },
    { id: 3, name: 'Producto C', image: 'https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-mani-partido.jpg', price: '$15.00' },
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4 px-3">Productos Populares</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl">{product.name}</h3>
            <p className="text-lg text-green-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
