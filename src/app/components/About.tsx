import { motion } from "motion/react";
import { Award, Target, Users, Code, Briefcase, GraduationCap, Trophy, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Dean's Lister",
      description: "GWA: 1.225 | High Honors Graduate",
      color: "from-primary to-accent",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Hackathon Finalist",
      description: "Top 6 BPI DataWave | Top 4 CSSprint",
      color: "from-accent to-primary",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Leader",
      description: "UST Student Council & Organizations",
      color: "from-primary to-secondary",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Developer",
      description: "Web, Mobile, AI & Data Science Projects",
      color: "from-secondary to-primary",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project Manager",
      description: "Led Multidisciplinary Teams & Deployments",
      color: "from-accent to-secondary",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Research Experience",
      description: "ML, NLP, Data Warehousing & BI",
      color: "from-primary to-accent",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "System Designer",
      description: "Architecture, UML, ERD & Documentation",
      color: "from-secondary to-accent",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Enthusiast",
      description: "UNLEASH Philippines Talent Program",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border">
            <p className="text-lg leading-relaxed mb-6">
              I am a <span className="text-primary font-medium">4th year Computer Science student</span> specializing in Data Science at the University of Santo Tomas. My interests span{" "}
              <span className="text-primary font-medium">
                software engineering, full-stack development, artificial intelligence, machine learning, data science, data analytics, business intelligence, cloud technologies, and emerging technologies
              </span>.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Throughout my academic journey, I have led and contributed to multidisciplinary projects involving{" "}
              <span className="font-medium">web development, mobile applications, AI-powered systems, NLP research, data warehousing, business intelligence dashboards, and software engineering solutions</span>.
              I have developed strong foundations in system design, software development, data management, technical documentation, leadership, teamwork, and project management.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              As an aspiring technology professional, I am actively seeking{" "}
              <span className="text-primary font-medium">internship opportunities across various technology fields</span>, including but not limited to{" "}
              software engineering, full-stack development, data science, machine learning, AI engineering, business intelligence, data analytics, QA/testing, cloud computing, product development, and other technology-related roles.
            </p>
            <p className="text-lg leading-relaxed">
              My goal is to contribute to{" "}
              <span className="text-primary font-medium">meaningful and impactful real-world systems</span>{" "}
              while continuously growing as a developer, engineer, researcher, and future technology leader.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:scale-105 h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h3 className="mb-2 text-primary">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
