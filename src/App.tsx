import React, { useState } from 'react';
import { Eye, EyeOff, Shield, FileText, TrendingUp, Pill } from 'lucide-react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-1/2 p-12 flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <Pill className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-blue-600">Farmácia Digital</h1>
          </div>
          <p className="text-lg text-gray-700 mb-12">
            Simples, seguro e <span className="font-semibold">100% Gratuito</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-200"
                placeholder="Digite seu e-mail de cadastro"
              />
            </div>

            <div className="group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-200"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">
              Esqueceu sua senha?
            </a>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-200 hover:shadow-blue-300"
            >
              Acessar
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Não tem Acesso?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Cadastre-se usando SNGPC
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Info Section */}
      <div className="w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
        
        <div className="text-white max-w-lg relative z-10">
          <h2 className="text-4xl font-bold mb-12 leading-tight">
            Sistema Digital para Dispensação de Receitas
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="p-3 bg-white/10 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Autentique-se com SNGPC</h3>
                <p className="opacity-80">
                  Validamos seus dados com a ANVISA para garantir que é uma farmácia ativa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="p-3 bg-white/10 rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Registre a dispensação</h3>
                <p className="opacity-80">
                  Evite dupla dispensação fazendo um registro digital no arquivo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="p-3 bg-white/10 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Alcance mais pacientes</h3>
                <p className="opacity-80">
                  Sua farmácia aparecerá como opção de compra para todos os pacientes com Receita Digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;