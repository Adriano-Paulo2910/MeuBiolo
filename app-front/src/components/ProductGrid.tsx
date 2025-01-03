import assets from "../assets/img/asset4.webp"
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


const ProductGrid = () => {
    return (
      <div className="product-grid container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/** Produto 1 */}
          <div className="product-item border p-4 rounded-md w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src={assets} alt="Produto 1" className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-3 text-lg font-semibold text-gray-800">Produto 1</h3>
            <p className="text-sm text-gray-600">Descrição do produto 1.</p>
            <span className="block text-xl font-bold text-gray-900 mt-2">AOA 100,00</span>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" /> Luanda, Angola
              </span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" /> Publicado: 02 Jan 2025
              </span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Ver mais detalhes</button>
          </div>
  
          {/** Produto 2 */}
          <div className="product-item border p-4 rounded-md w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src="https://via.placeholder.com/150" alt="Produto 2" className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-3 text-lg font-semibold text-gray-800">Produto 2</h3>
            <p className="text-sm text-gray-600">Descrição do produto 2.</p>
            <span className="block text-xl font-bold text-gray-900 mt-2">AOA 150,00</span>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" /> Benguela, Angola
              </span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" /> Publicado: 01 Jan 2025
              </span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Ver mais detalhes</button>
          </div>
  
          {/** Adicionar mais produtos seguindo a mesma estrutura */}
          {/* Continue com o restante dos produtos */}
        </div>
      </div>
    );
  };

  export default ProductGrid;
  