import user_profile from "../assets/img/user-profile.svg";
import google from "../assets/img/google.png"

const Login = () => {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4 sm:p-6 lg:p-8">
            <div className="relative bg-white bg-opacity-90 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg p-6 space-y-6">
                {/* Formulário de Login */}
                <form className="space-y-4">
                    {/* Cabeçalho do Modal */}
                    <div className="flex flex-col items-center align-middle justify-center">
                        <img src={user_profile} alt="user-profile" className="w-20 h-20" />
                        <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
                    </div>

                    {/* Campo de Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Digite seu email"
                        />
                    </div>

                    {/* Campo de Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    {/* Lembrar-me e Esqueceu a senha */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Lembrar-me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Esqueceu a senha?
                            </a>
                        </div>
                    </div>

                    {/* Botão de Login */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Entrar
                        </button>
                    </div>

                    {/* Divisor */}
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-500">ou</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Botão de Login com Google */}
                    <div>
                        <button
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <div className="w-5 h-5 mr-2">
                                <img src={google} alt="" />
                            </div>
                            Entrar com Google
                        </button>
                    </div>

                    {/* Link para criar uma conta */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Não tem uma conta?{" "}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Crie uma conta
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
