
const Experience = () => {
  const experiences = [
    {
      company: "Assurant",
      location: "São Paulo",
      position: "Java Expert Consultant",
      period: "12/2023 - 02/2024",
      description: "Suporte ao sistema legado DBS, integração com SOAP/APIs, PagarMe WebHook, Schedulers e criação de novas aplicações.",
      technologies: ["Java EE", "Spring", "Angular", "Oracle", "Docker", "Azure DevOps"]
    },
    {
      company: "Porto",
      location: "São Paulo", 
      position: "Java Senior Consultant",
      period: "10/2022 - 03/2023",
      description: "Migração e desenvolvimento de novos microserviços com Messaging para seguros Auto, Viagem e Vida.",
      technologies: ["Spring Boot", "Kafka", "RabbitMQ", "GCP", "AWS", "Docker"]
    },
    {
      company: "NotreDame",
      location: "São Paulo",
      position: "Java Senior Consultant", 
      period: "10/2021 - 09/2022",
      description: "Desenvolvimento e integração de microserviços do Portal e App NotreDame Intermédica.",
      technologies: ["Spring Boot", "Hibernate", "Azure", "Docker", "Oracle", "Jenkins"]
    },
    {
      company: "Alelo",
      location: "São Paulo",
      position: "Java Senior Consultant",
      period: "05/2021 - 10/2021", 
      description: "Migração e desenvolvimento de microserviços do Portal e App Alelo Frota.",
      technologies: ["Spring Boot", "Angular", "Redis", "OpenShift", "Oracle"]
    },
    {
      company: "Sicredi",
      location: "Porto Alegre",
      position: "Senior Software Analyst",
      period: "02/2020 - 05/2020",
      description: "Automação bancária e métodos de pagamento. Manutenção e desenvolvimento de novos módulos para sistema de gestão.",
      technologies: ["Java", "Struts", "PostgreSQL", "WildFly", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma trajetória sólida em desenvolvimento Java Enterprise, desde sistemas legados até arquiteturas modernas em cloud.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-slide-up">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    
                    <div className="text-lg font-semibold text-primary mb-1">{exp.company}</div>
                    <div className="text-sm text-gray-500 mb-4">{exp.location}</div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
