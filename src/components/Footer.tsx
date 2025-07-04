
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-4">DevPortfolio</div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center text-gray-400 border-t border-gray-700 pt-8">
            <p>&copy; 2024 Desenvolvedor Java Senior. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Desenvolvido com React, TypeScript e Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
