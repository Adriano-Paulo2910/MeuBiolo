import logo from "../assets/img/Logo-hand.svg";
import loginImg from "../assets/img/login.svg";
import Login from "./Login";
import { useState } from "react";

const Navbar = () => {
    const [loginPop, setLoginPop] = useState(false);

    return (
        <>
            <header className="bg-white shadow-lg">
                <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
                    {/* Logotipo */}
                    <div className="flex items-center">
                        <img src={logo} alt="logotipo" className="w-20 h-12" />
                    </div>

                    {/* Inputs e botão "Vender" */}
                    <div className="flex-grow flex items-center justify-between space-x-2 ml-4">
                        {/* Input de localização */}
                        <input
                            placeholder="Localização"
                            className="border w-full max-w-[150px] md:max-w-[200px] lg:max-w-[250px] p-2 rounded-md text-sm"
                        />
                        {/* Input de busca */}
                        <input
                            placeholder="Encontre os itens aqui..."
                            className="border w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] p-2 rounded-md text-sm"
                        />
                        {/* Botão "Vender" */}
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md">
                            Anunciar e Vender
                        </button>
                    </div>

                    {/* Botão de login */}
                    <div
                        onClick={() => setLoginPop(!loginPop)}
                        className="cursor-pointer flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-full transition duration-300"
                    >
                        <img
                            src={loginImg}
                            alt="login"
                            className="w-8 h-8"
                        />
                        <span className="text-gray-700 font-semibold hidden md:block">
                            Login
                        </span>
                    </div>
                </nav>
            </header>
            {loginPop && <Login />}
        </>
    );
};

export default Navbar;
