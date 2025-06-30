import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CentralUsuario from "./components/usuario/Centralusuario";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="usuario/*" element={<CentralUsuario />} />
      </Route>
    </Routes>
  );
}
