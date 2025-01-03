import loginImg from "../assets/img/login.svg";
import Login from "./Login";
import { FaBell, FaComment, FaUserCircle, FaSearch, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaCommentSms } from "react-icons/fa6";

const Navbar = () => {
    const [loginPop, setLoginPop] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu no mobile

    return (
        <>
            <header className="bg-white shadow-sm">
                <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
                    {/* Logotipo */}
                    <h1 className="text-orange-500 text-lg font-extrabold">Entreprise.<span className="text-black">XPTO</span></h1>
                    {/* Inputs e busca (escondidos no mobile) */}
                    <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
                        {/* Input de localização */}
                        <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-sm max-w-xs w-full">
                            <FaMapMarkerAlt className="text-gray-500 ml-2" />
                            <input
                                type="text"
                                placeholder="Localização"
                                className="flex-grow text-sm p-1 focus:outline-none"
                            />
                        </div>
                        {/* Input de busca */}
                        <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-sm max-w-lg w-full">
                            <FaSearch className="text-gray-500 ml-2" />
                            <input
                                type="text"
                                placeholder="Encontre os itens aqui..."
                                className="flex-grow text-sm p-1 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Ícones de interação e menu hamburguer no mobile */}
                    <div className="flex items-center space-x-4">
                        {/* Ícones para desktop */}
                        <div className="hidden md:flex items-center space-x-4">
                            <FaBell className="text-2xl text-orange-600 cursor-pointer hover:text-orange-500 transition" />
                            <FaComment className="text-2xl text-orange-600 cursor-pointer hover:text-orange-500 transition" />
                            <FaUserCircle className="text-2xl text-orange-600 cursor-pointer hover:text-orange-500 transition" />
                        </div>

                        {/* Botão de login (escondido no mobile) */}
                        <div
                            onClick={() => setLoginPop(!loginPop)}
                            className="hidden md:flex items-center cursor-pointer space-x-2 hover:bg-gray-100 p-2 rounded-full transition duration-300"
                        >
                            <img src={loginImg} alt="login" className="w-6 h-6" />
                            <span className="text-gray-700 font-semibold">Login</span>
                        </div>

                        {/* Menu Hamburguer para mobile */}
                        <button
                            className="md:hidden text-xl text-gray-600"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FaBars />
                        </button>
                    </div>
                </nav>

                {/* Menu Dropdown para mobile */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-md p-4 space-y-4">
                        {/* Inputs de localização e busca para mobile */}
                        <div className="flex items-center border border-gray-300 rounded-full p-2">
                            <FaMapMarkerAlt className="text-gray-500 ml-2" />
                            <input
                                type="text"
                                placeholder="Localização"
                                className="flex-grow text-sm p-1 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-full p-2">
                            <FaSearch className="text-gray-500 ml-2" />
                            <input
                                type="text"
                                placeholder="Encontre os itens aqui..."
                                className="flex-grow text-sm p-1 focus:outline-none"
                            />
                        </div>

                        {/* Ícones de notificação, chat e perfil para mobile */}
                        <div className="flex items-center justify-around gap-2">
                            <FaBell className="text-xl text-gray-600 cursor-pointer hover:text-gray-800 transition" />
                            <FaCommentSms className="text-xl text-gray-600 cursor-pointer hover:text-gray-800 transition" />
                            <FaUserCircle className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800 transition" />
                        </div>

                        {/* Botão de login no mobile */}
                        <div
                            onClick={() => setLoginPop(!loginPop)}
                            className="flex items-center justify-center cursor-pointer space-x-2 hover:bg-gray-100 p-2 rounded-full transition duration-300"
                        >
                            <img src={loginImg} alt="login" className="w-8 h-8" />
                            <span className="text-gray-700 font-semibold">Login</span>
                        </div>
                    </div>
                )}

            </header>
            {loginPop && <Login />}
        </>
    );
};

export default Navbar;
