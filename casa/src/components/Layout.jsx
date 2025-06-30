import Footer from "./Footer";
import Header from "./Header";
import { PiChatTeardropDotsBold } from "react-icons/pi";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Outlet } from "react-router-dom"; // 👈 IMPORTANTE
import Carousel from "./Carousel.jsx";
import PopularItems from "./PopularItems.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />

      <main className="flex-grow pb-0 flex flex-col space-y-8">
        {/* Aquí se renderizarán las rutas hijas */}
        <Outlet />

        {/* Sección 1: Carrusel */}
        <section className="justify-center items-center w-full">
          <Carousel />
        </section>

        {/* Sección 2: Productos Populares */}
        <section className="flex justify-center items-center w-full">
          <div className="w-full px-4 sm:px-8">
            <PopularItems />
          </div>
        </section>

        {/* Sección 3: Sección 2 */}
        <section className="flex justify-center items-center w-full">
          <div className="w-full px-4 sm:px-8">
            <Section2 />
          </div>
        </section>

        {/* Sección 4: Sección 3 */}
        <section className="flex justify-center items-center w-full">
          <div className="w-full px-4 sm:px-8">
            <Section3 />
          </div>
        </section>
      </main>

      <Footer />

      {/* Botones flotantes globales */}
      <div className="fixed bottom-4 left-4 z-50">
        <PiChatTeardropDotsBold className="text-purple-500 text-5xl drop-shadow" />
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <IoIosArrowDropupCircle className="text-purple-400 text-5xl drop-shadow" />
      </div>
    </div>
  );
}
