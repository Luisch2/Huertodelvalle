import Footer from "./Footer";
import Header from "./Header";
import { PiChatTeardropDotsBold } from "react-icons/pi";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Outlet } from "react-router-dom"; // 

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />

      <main className="flex-grow pb-0">
        <Outlet />
      </main>

      <Footer />
      <a
        href="https://wa.link/1tnubf"  
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50"
      >
        <PiChatTeardropDotsBold className="text-purple-500 text-5xl drop-shadow hover:scale-110 transition-transform" />
      </a>


      <div className="fixed bottom-4 right-4 z-50">
        <IoIosArrowDropupCircle className="text-purple-400 text-5xl drop-shadow" />
      </div>
    </div>
  );
}
