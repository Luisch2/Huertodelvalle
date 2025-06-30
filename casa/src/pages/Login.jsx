import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();


    const validatePassword = () => {
        if (!password.trim()) {
            setPasswordError("La contraseña es obligatoria");
        } else {
            setPasswordError("");
        }
    };


    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEmailError("Por favor Ingrese dirección de correo electrónico válida. (Ej.: johndoe@dominio.com).");
        } else {
            setEmailError("");
        }
    };
const { login } = useAuth();
    const handleSubmit = (e) => {
  e.preventDefault();

  let isValid = true;

  if (!email.includes("@")) {
    setEmailError("Incluye un correo válido");
    isValid = false;
  }

  if (!password.trim()) {
    setPasswordError("La contraseña es obligatoria");
    isValid = false;
  }

  if (isValid) {
    login(email); // ✅ Guarda el usuario en el contexto
    navigate("/usuario"); // ✅ Redirige al dashboard
  }
};


    return (
        <div className="flex flex-col items-center justify-start min-h-screen px-4 bg-white pt-10">

            <div className="w-full max-w-md mt-10">
                {/* Tabs */}
                <div className="flex justify-between border-b mb-8 text-sm font-semibold text-gray-700">
                    <button
                        onClick={() => setIsRegister(false)}
                        className={`w-1/2 pb-2 ${!isRegister ? "border-b-2 border-black" : "text-gray-400"}`}
                    >
                        Iniciar sesión
                    </button>
                    <button
                        onClick={() => setIsRegister(true)}
                        className={`w-1/2 pb-2 ${isRegister ? "border-b-2 border-black" : "text-gray-400"}`}
                    >
                        Crear cuenta
                    </button>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">E-mail *</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                            className={`w-full border-b-2 outline-none py-2 ${emailError ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {emailError && (
                            <p className="text-red-500 text-xs mt-1">⚠️ {emailError}</p>
                        )}
                    </div>


                    <div className="relative">
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Contraseña *</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                            className={`w-full border-b-2 outline-none py-2 ${passwordError ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-9 cursor-pointer text-gray-500 text-sm"
                        >
                            👁
                        </span>
                        {passwordError && (
                            <p className="text-red-500 text-xs mt-1">⚠️ {passwordError}</p>
                        )}
                    </div>


                    {isRegister && (
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Repetir contraseña *</label>
                            <input
                                type="password"
                                className="w-full border-b-2 outline-none py-2"
                                required
                            />
                        </div>
                    )}

                    {!isRegister && (
                        <div className="text-right text-xs text-gray-400 cursor-pointer hover:text-black">
                            ¿Olvidaste la contraseña?
                        </div>
                    )}

                    {isRegister && (
                        <div className="flex flex-col gap-4 text-xs text-gray-600">
                            <label className="flex items-start gap-2">
                                <input type="checkbox" className="mt-1" />
                                Acepto formar parte del programa de lealtad y recibir información por email.
                            </label>
                            <label className="flex items-start gap-2 text-red-500">
                                <input type="checkbox" className="mt-1" />
                                Acepto los Términos y Condiciones y las Políticas de Privacidad del sitio.
                            </label>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-gray-400 text-white font-bold mt-4 hover:bg-gray-500"
                    >
                        {isRegister ? "Crear cuenta" : "Ingresar"}
                    </button>
                </form>

                {/* Registro link */}
                {!isRegister && (
                    <p className="text-center text-sm mt-6 text-gray-700">
                        ¿Todavía no tenés cuenta?{" "}
                        <span
                            className="text-black font-bold cursor-pointer"
                            onClick={() => setIsRegister(true)}
                        >
                            Regístrate
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
}
