
import { Book } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: "Sistemas de Informação",
      institution: "Universidade do Sul de Santa Catarina - Unisul",
      period: "2009 - 2011"
    },
    {
      title: "Ciência da Computação",
      institution: "Universidade de Santa Cruz do Sul - Unisc", 
      period: "2001 - 2007"
    }
  ];

  const courses = [
    { name: "Java EE, EJB, JPA e JSF", provider: "DevMedia", duration: "90h" },
    { name: "AngularJS, VueJS, ReactJS, NodeJS", provider: "DevMedia", duration: "80h" },
    { name: "Python e Django", provider: "Prime Courses", duration: "80h" },
    { name: "Ruby on Rails", provider: "Internet", duration: "60h" },
    { name: "Flutter/Dart com Web API", provider: "Alura", duration: "31h" },
    { name: "DevOps & Agile Culture", provider: "FIAP", duration: "60h" },
    { name: "Event Driven Architecture com Java", provider: "DIO", duration: "3h" },
    { name: "API Gateways no Azure Spring Cloud", provider: "DIO", duration: "5h" },
    { name: "TDD - JUnit e Mockito", provider: "Alura", duration: "12h" },
    { name: "BDD - Cucumber e Gherkin", provider: "Alura", duration: "10h" },
    { name: "Generative AI", provider: "Santander Open Academy", duration: "8h" },
    { name: "Project Management e Agile", provider: "Santander Open Academy", duration: "8h" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Educação & Certificações</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Formação acadêmica e aprendizado contínuo através de cursos especializados.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Academic Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Formação Acadêmica</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-lg shadow-lg card-hover animate-slide-up">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-lg">
                      <Book size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-100 mb-2">{edu.title}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <span className="text-gray-300">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Cursos e Especializações</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg shadow hover:shadow-md transition-shadow animate-slide-up">
                  <h4 className="font-semibold text-gray-100 mb-2 text-sm leading-snug">{course.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-primary text-sm font-medium">{course.provider}</span>
                    <span className="text-gray-400 text-xs">{course.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
