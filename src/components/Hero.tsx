
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">

          <br /><br /><br />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Danilo Meneghel</span>
          </h1>
          <h4 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-100"><Desenvolvimento Web></span>
          </h4>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Especialista Java e API REST com mais de 11 anos de experiência em desenvolvimento de sistemas robustos, 
            microserviços e arquiteturas escaláveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('experience')}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Ver Experiência
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
            >
              Ver Projetos
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-primary" />
      </button>
    </section>
  );
};

export default Hero;
