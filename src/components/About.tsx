
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">DS</span>
                  </div>
                  <p className="text-gray-300 font-medium">Desenvolvedor Senior</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                Especialista em Desenvolvimento Java Enterprise
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Com mais de uma década de experiência no desenvolvimento de software, 
                especializei-me em criar soluções robustas e escaláveis utilizando Java Enterprise Edition, 
                Spring Framework e arquiteturas de microserviços.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Minha expertise abrange desde sistemas legados até aplicações modernas em cloud, 
                com forte experiência em integração de APIs, mensageria, e práticas DevOps.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-primary">11+</div>
                  <div className="text-gray-300 text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-gray-300 text-sm">Projetos Entregues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
