import { FaMobileAlt, FaCarAlt, FaHome, FaFutbol, FaLaptop, FaBicycle, FaTv, FaCouch, FaPaintBrush, FaPaw } from 'react-icons/fa'; // Importa mais ícones

const Category = () => {
    return (
        <div className="category-menu py-6 px-4">
            <h2 className="text-xl font-bold text-center mb-6">Categorias</h2>
            <ul className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-center">
                {/* Telefone */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaMobileAlt className="mx-auto mb-2 text-2xl text-blue-600" /> {/* Ícone de Telefone */}
                    <span className="text-xs font-semibold">Telefone</span>
                </li>

                {/* Automóveis */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaCarAlt className="mx-auto mb-2 text-2xl text-green-600" /> {/* Ícone de Automóveis */}
                    <span className="text-xs font-semibold">Automóveis</span>
                </li>

                {/* Imóveis */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaHome className="mx-auto mb-2 text-2xl text-red-600" /> {/* Ícone de Imóveis */}
                    <span className="text-xs font-semibold">Imóveis</span>
                </li>

                {/* Desporto */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaFutbol className="mx-auto mb-2 text-2xl text-yellow-600" /> {/* Ícone de Desporto */}
                    <span className="text-xs font-semibold">Desporto</span>
                </li>

                {/* Computadores */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaLaptop className="mx-auto mb-2 text-2xl text-purple-600" /> {/* Ícone de Computadores */}
                    <span className="text-xs font-semibold">Computadores</span>
                </li>

                {/* Bicicletas */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaBicycle className="mx-auto mb-2 text-2xl text-teal-600" /> {/* Ícone de Bicicletas */}
                    <span className="text-xs font-semibold">Bicicletas</span>
                </li>

                {/* TV/Eletrônicos */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaTv className="mx-auto mb-2 text-2xl text-indigo-600" /> {/* Ícone de TV */}
                    <span className="text-xs font-semibold">Eletrônicos</span>
                </li>

                {/* Móveis */}
                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaCouch className="mx-auto mb-2 text-2xl text-orange-600" /> {/* Ícone de Móveis */}
                    <span className="text-xs font-semibold">Móveis</span>
                </li>

                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaPaintBrush className="mx-auto mb-2 text-2xl text-pink-600" /> {/* Ícone de Decoração */}
                    <span className="text-xs font-semibold">Decoração</span>
                </li>

                <li className="text-center bg-gray-100 p-3 rounded-sm cursor-pointer hover:bg-gray-200 transition-colors">
                    <FaPaw className="mx-auto mb-2 text-2xl text-brown-600" /> {/* Ícone de Pets */}
                    <span className="text-xs font-semibold">Pets</span>
                </li>
            </ul>
        </div>
    );
};

export default Category;
