import React from 'react';
import Slider from 'react-slick'; // Importar el Slider de react-slick
import { BsArrowRightCircle } from 'react-icons/bs';

// Importar imágenes locales
import imagen1 from '../assets/Imagen1.jpg';
import imagen2 from '../assets/Imagen2.jpg';
import imagen3 from '../assets/Imagen3.jpg';

// Datos de ejemplo para las imágenes
const carouselData = [
  {
    id: 1,
    image: imagen1,
    title: 'Atención al Cliente',
    subtitle: 'Escríbenos en WhatsApp y te ayudamos',
    ctaText: 'Escríbenos',
    phoneNumber: '912294034',
  },
  {
    id: 2,
    image: imagen2,
    title: 'Nuevos Productos',
    subtitle: 'Conoce las últimas ofertas de nuestra tienda',
    ctaText: 'Ver Ofertas',
    phoneNumber: '912294034',
  },
  {
    id: 3,
    image: imagen3,
    title: 'Servicios Especiales',
    subtitle: 'Consulta sobre nuestros servicios exclusivos',
    ctaText: 'Consultar',
    phoneNumber: '912294034',
  }
];

const Carousel = () => {
  const settings = {
    dots: true, // Puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de cambio
    slidesToShow: 1, // Mostrar solo una imagen a la vez
    slidesToScroll: 1, // Desplazar una imagen a la vez
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad de reproducción automática (3 segundos)
  };

  return (
    <div className="relative">
      <Slider {...settings}> {/* Configuración del carrusel */}
        {carouselData.map((item) => (
          <div key={item.id} className="flex flex-col justify-center items-center relative">
            {/* Imagen del Carrusel */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            {/* Texto sobre la imagen */}
            <div className="absolute top-1/2 transform -translate-y-1/2 text-center text-white px-4">
              <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
              <p className="text-xl mb-4">{item.subtitle}</p>
              {/* Botón de llamada a la acción */}
              <a
                href={`https://wa.me/${item.phoneNumber}`}
                className="bg-green-500 text-white py-2 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
              >
                {item.ctaText}
                <BsArrowRightCircle className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
