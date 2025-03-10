import { User, Code2, Target, Lightbulb } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

export function About() {
  const aboutSections = [
    {
      icon: User,
      title: "Who I Am",
      description: [
        "A passionate MERN-STACK developer with a strong foundation in REACT, NEXT, MONGODB, NODEJS, EXPRESSJS.",
        "Enjoy solving complex problems and creating scalable web applications.",
        "Always exploring new technologies and improving my skills.",
      ],
      color: "bg-blue-600",
    },
    {
      icon: Code2,
      title: "What I Do",
      description: [
        "Develop high-performance web applications using modern tech stacks.",
        "Solve algorithmic problems and optimize code efficiency.",
        "Contribute to open-source projects and stay updated with industry trends.",
      ],
      color: "bg-purple-600",
    },
    {
      icon: Target,
      title: "My Goals",
      description: [
        "Build impactful tech products that solve real-world challenges at a large scale.",
        "Advance as a MERN developer by mastering new frameworks.",
        "Grow the developer community by sharing knowledge and open-source contributions.",
      ],
      color: "bg-green-600",
    },
    {
      icon: Lightbulb,
      title: "My Philosophy",
      description: [
        "Technology should simplify and enhance lives, not complicate them.",
        "Good software is not just about writing code but solving problems effectively.",
        "Continuous learning is the key to staying ahead in the fast-evolving tech industry.",
      ],
      color: "bg-orange-600",
    },
  ];

  return (
    <section id="about" className="py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 text-center px-4">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Bishal Kc</span>,  
            a Full-Stack Developer and 2nd Year Computer Science student.  
            My journey in tech has been about learning, experimenting, and building—from solving  
            complex coding problems to developing scalable web applications.  
            I thrive on tackling real-world challenges and pushing the boundaries of technology.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow text-sm sm:text-base">
              🚀 I like to build products and solve problems
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 sm:p-8 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {title}
                  </h3>
                </div>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
