
import { Code, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sistema de Gestão Escolar",
      description: "Sistema completo para gestão educacional com controle de alunos, professores e notas.",
      technologies: ["PHP", "Laravel", "MySQL", "CSS", "JavaScript"],
      category: "Full-stack"
    },
    {
      title: "Sistema de Pagamento Crypto",
      description: "Plataforma para processamento de pagamentos em criptomoedas com API segura.",
      technologies: ["PHP", "Yii", "MySQL", "jQuery", "CSS"],
      category: "Back-end"
    },
    {
      title: "Gestão de Propriedades",
      description: "Sistema para gerenciamento de imóveis com funcionalidades de locação e vendas.",
      technologies: ["Java", "Spring Boot", "MySQL", "CSS", "JavaScript"],
      category: "Back-end"
    },
    {
      title: "Delivery Manager",
      description: "Aplicação para gestão de entregas com dashboard em tempo real.",
      technologies: ["NodeJS", "ReactJS", "MongoDB", "JavaScript"],
      category: "Full-stack"
    },
    {
      title: "Laravel Admin",
      description: "Painel administrativo completo com sistema de permissões e relatórios.",
      technologies: ["Laravel", "PHP", "MySQL"],
      category: "Back-end"
    },
    {
      title: "NodeJS Admin",
      description: "Dashboard administrativo moderno com APIs RESTful.",
      technologies: ["NodeJS", "JavaScript", "MongoDB"],
      category: "Back-end"
    },
    {
      title: "Contacts App",
      description: "Aplicativo mobile para gerenciamento de contatos com sincronização em nuvem.",
      technologies: ["Ionic", "AngularJS", "TypeScript", "Firebase"],
      category: "Mobile"
    },
    {
      title: "Sistema Médico",
      description: "Sistema hospitalar completo com gestão de pacientes e prontuários.",
      technologies: ["Java", "Spring Boot", "Oracle", "React"],
      category: "Full-stack"
    }
  ];

  const categories = ["Todos", "Full-stack", "Back-end", "Mobile"];
  
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfólio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos desenvolvidos ao longo da minha carreira.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-up">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Code size={48} className="text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                    <Github size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
