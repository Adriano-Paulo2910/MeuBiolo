import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importando os ícones do React Icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold text-lg mb-4">Sobre nós</h3>
                    <p className="text-sm">Somos uma plataforma dedicada a oferecer os melhores produtos com preços acessíveis e uma experiência de compra incrível.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">Links úteis</h3>
                    <ul>
                        <li><a href="/sobre" className="text-sm hover:text-yellow-400">Sobre nós</a></li>
                        <li><a href="/contato" className="text-sm hover:text-yellow-400">Contato</a></li>
                        <li><a href="/política-de-privacidade" className="text-sm hover:text-yellow-400">Política de Privacidade</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">Redes sociais</h3>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://facebook.com" className="text-xl hover:text-yellow-400">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" className="text-xl hover:text-yellow-400">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" className="text-xl hover:text-yellow-400">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">Contatos</h3>
                    <p className="text-sm">Email: contato@empresa.com</p>
                    <p className="text-sm">Telefone: (11) 1234-5678</p>
                </div>
            </div>
            <div className="text-center text-sm mt-8">
                <p>&copy; 2025 EnterpriseXPTO. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
