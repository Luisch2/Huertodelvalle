import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CentralUsuario from "./components/usuario/Centralusuario";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* ✅ Login ahora usa el Layout con Header y Footer */}
        <Route path="login" element={<Login />} />

        {/* ✅ Rutas protegidas también dentro del Layout */}
        <Route
          path="usuario/*"
          element={
            <ProtectedRoute>
              <CentralUsuario />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
