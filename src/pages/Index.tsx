
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tight">
            Seu Projeto
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          Um espaço em branco esperando por suas ideias extraordinárias
        </p>
        
        {/* Description */}
        <div className="max-w-xl mx-auto">
          <p className="text-gray-500 leading-relaxed">
            Este é o ponto de partida perfeito para criar algo incrível. 
            Comece pequeno, sonhe grande e construa o futuro uma linha de código por vez.
          </p>
        </div>
        
        {/* Call to action area */}
        <div className="pt-8">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Pronto para começar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
