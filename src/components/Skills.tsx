
const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: [
        { name: "Java", level: 98, years: 11 },
        { name: "JavaScript/TypeScript", level: 98, years: 18 },
        { name: "PHP", level: 98, years: 15 },
        { name: "Python", level: 75, years: 3 },
        { name: "Kotlin", level: 75, years: 2 }
      ]
    },
    {
      title: "Frameworks & Tecnologias",
      skills: [
        { name: "Spring Boot", level: 90, years: 9 },
        { name: "Angular/React", level: 85, years: 5 },
        { name: "Laravel/Zend", level: 98, years: 8 },
        { name: "Docker/Kubernetes", level: 85, years: 6 },
        { name: "Microserviços", level: 90, years: 7 }
      ]
    },
    {
      title: "Banco de Dados",
      skills: [
        { name: "MySQL/MariaDB", level: 98, years: 16 },
        { name: "PostgreSQL", level: 90, years: 9 },
        { name: "Oracle", level: 85, years: 8 },
        { name: "MongoDB", level: 80, years: 5 },
        { name: "Redis", level: 80, years: 5 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85, years: 6 },
        { name: "Azure", level: 80, years: 5 },
        { name: "GCP", level: 75, years: 4 },
        { name: "CI/CD", level: 75, years: 5 },
        { name: "Git", level: 90, years: 11 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Expertise consolidada em tecnologias enterprise e arquiteturas modernas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-slide-up">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-100 mb-6">{category.title}</h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-200">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{skill.years} anos</span>
                            <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                          </div>
                        </div>
                        
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
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

export default Skills;
