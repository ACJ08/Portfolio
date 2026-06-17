import { motion } from "motion/react";
import { Briefcase, Users, Trophy, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Project Manager | Full-Stack Project Lead",
      organization: "CakewJoy Order Management System",
      period: "2025-2026 (SE1-SE2)",
      achievement: "Deployed: https://cakewjoy.vercel.app",
      description:
        "Led end-to-end planning, development, testing, deployment, and client delivery of a full-stack web-based order management system for a real bakery business. Managed cross-functional team using Waterfall methodology across all SDLC phases. Coordinated system architecture design for six user roles. Led client-facing meetings for UAT and final validation.",
      technologies: "React, TypeScript, Firebase, Vercel, Figma",
    },
    {
      type: "project",
      icon: <Trophy className="w-5 h-5" />,
      title: "Team Lead, Project Manager, Fullstack Developer & Researcher",
      organization: 'FinSight AI – BPI DataWave Hackathon 2025 – "Next-Gen Prototyping: Empowering Philippine Banks to Serve MSMEs through AI-Powered Market Simulation with FinSight AI"',
      period: "July–August 2025",
      achievement: "🏆 Top 6 Finalist",
      description:
        "Led a 4-member development team in building FinSight AI, an AI-powered simulation platform for prototyping and evaluating MSME-focused financial products for banks. Led overall project execution including sprint planning, task delegation, and delivery management. Served as project manager and technical lead, coordinating both product direction and fullstack development workflow. Conducted research on MSME financing gaps in the Philippines to guide system design, simulation logic, and feature prioritization. Developed and integrated the fullstack application end-to-end — React frontend, Node.js/Express backend, OpenAI API simulation engine, and MongoDB Atlas database. Designed and implemented system architecture for seamless communication between all layers. Built and maintained RESTful APIs with JWT-based authentication for secure user and simulation data handling. Integrated OpenAI API to generate synthetic MSME behavioral responses and enable AI-driven financial product simulations. Configured and migrated database to MongoDB Atlas for cloud-based persistence. Resolved critical integration and deployment issues ensuring system stability on Render.",
      technologies: "React.js • Node.js • Express • OpenAI API • MongoDB Atlas • JWT • Render",
    },
    {
      type: "project",
      icon: <Trophy className="w-5 h-5" />,
      title: "Team Lead, Frontend Developer & System Analyst",
      organization: "Verity - CSSprint Hackathon",
      period: "December 2025",
      achievement: "🏆 Top 4 Finalist",
      description:
        "Led 4-member team building corporate web system for budget monitoring, anomaly detection, and anonymous reporting. Acted as System Analyst translating business requirements into architecture, use cases, and database design. Designed full software architecture with role-based access control. Created UML diagrams and technical documentation.",
      technologies: "Next.js, React, Supabase, Tailwind CSS, Shadcn UI",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Team Lead | ML Developer",
      organization: "Sarcasm Detection using BERT Variants",
      period: "2025-2026",
      achievement: "Machine Learning Research Project",
      description:
        "Led ML team developing and benchmarking transformer-based NLP models for sarcasm detection. Managed end-to-end ML pipeline including dataset preprocessing, tokenization, training, and evaluation. Implemented and fine-tuned BERT, RoBERTa, ALBERT, DistilBERT, and ModernBERT. Designed experimental framework comparing model performance using accuracy, precision, recall, and F1-score.",
      technologies: "Python, PyTorch, HuggingFace, Scikit-learn, Pandas",
    },
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Member – Market Analytics Department",
      organization: "UST Technovation Society",
      period: "2025-2026",
      achievement: "Growth Marketing",
      description:
        "Collaborated with Market Analytics Department to enhance project visibility, user engagement, and monetization strategies. Developed and implemented growth marketing initiatives. Contributed to data-driven analyses guiding marketing decisions. Supported campaigns strengthening organization's brand presence.",
    },
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Human Resources Staff",
      organization: "AWS Cloud Club UST",
      period: "2025-2026",
      achievement: "Member Management & Development",
      description:
        "Contribute to HR Department managing member welfare, engagement, and participation. Support initiatives fostering professional development and collaboration. Assist in organizing workshops, seminars, and hackathons promoting cloud computing skills and AWS certification pathways.",
    },
    {
      type: "project",
      icon: <Award className="w-5 h-5" />,
      title: "UNLEASH Philippines Talent",
      organization: "UNLEASH Philippines Innovation Lab",
      period: "September 19-25, 2025",
      achievement: "Selected Regional Representative",
      description:
        "Represented region as one of selected UNLEASH Philippines Talents from all 18 regions nationwide. Applied UNLEASH Innovation Methodology under Health Equity & Biomedical Innovation track. Framed real-world problems, ideated solutions, and developed rapid prototypes. Participated in LIF Launchpad collaboration with Royal Academy of Engineering.",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Team Lead | Data Architect | ETL Lead | BI Analyst",
      organization: "ShopZada Data Warehouse System",
      period: "2025-2026",
      achievement: "Data Engineering & Analytics",
      description:
        "Led end-to-end design of data warehouse system for e-commerce Order-to-Delivery analytics. Designed conceptual, logical, and physical data models using Kimball dimensional modeling. Planned ETL workflows using Python, SQL, and pandas. Performed data profiling and validation. Designed BI reporting frameworks for Tableau.",
      technologies: "PostgreSQL, Python, Pandas, Tableau, Docker",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Backend Developer",
      organization: "Split It - Expense Splitting Mobile App",
      period: "2025-2026",
      achievement: "Flutter & Dart Development",
      description:
        "Developed backend logic for Flutter-based expense splitting application in 3-person team. Implemented core algorithms for automatic fair-share computation. Designed data handling logic for group management, multi-payer transactions, and expense history. Supported integration with Flutter UI using ChangeNotifier.",
      technologies: "Flutter, Dart, ChangeNotifier",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Secretary Officer of the Class (3rd Year)",
      organization: "University of Santo Tomas",
      period: "2025-2026 (1st & 2nd Term)",
      achievement: "Class Leadership",
      description:
        "Maintain accurate records and ensure effective communication within class. Handle class correspondence and announcements. Document and archive important materials. Coordinate with teaching staff and professors. Track deadlines, projects, and assignments.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Executive Staff of Human Resource",
      organization: "UST ICS Student Council",
      period: "2025-2026",
      achievement: "Council Administration",
      description:
        "Provide manpower and administrative support to council officers. Assist in managing well-being, engagement, and performance of council members. Oversee special committees coordination. Support member development initiatives promoting growth and teamwork.",
    },
    {
      type: "project",
      icon: <Trophy className="w-5 h-5" />,
      title: "Team Lead, UI/UX Designer & Researcher",
      organization: "MyND Task - Create & Conquer 2025",
      period: "July 5, 2025",
      achievement: "Certificate of Participation",
      description:
        "Led 5-person team developing gamified productivity dashboard for Filipino freelancers. Designed user flows and interface using Figma with task-as-quest features, wellness tools, and mood tracking. Conducted user research aligning app features with freelancer needs.",
      technologies: "Figma, UI/UX Design, User Research",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Project Lead & Full-Stack Developer",
      organization: "EduGrade - Academic Grading System",
      period: "2024-2025",
      achievement: "Full-Stack Web Application",
      description:
        "Led development of web-based grading system in 2-person team. Built role-based system for students and professors with secure authentication. Designed Java Servlet architecture for grade computation. Developed interactive JSP-based dashboards. Managed deployment on GlassFish Server.",
      technologies: "Java, JSP, Servlets, HTML, CSS, GlassFish",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Academic Committee Staff",
      organization: "UST CSS (2nd Year 1st Term)",
      period: "2024-2025",
      achievement: "Student Support",
      description:
        "Member of Academics Team supporting CS students by organizing quiz bees, programming competitions, tutorials, and evaluations to enhance computer science knowledge and skills.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Vice President of the Class",
      organization: "University of Santo Tomas (2nd Year)",
      period: "2024-2025",
      achievement: "Class Leadership",
      description:
        "Actively supported President, assuming duties in their absence. Mediated conflicts, fostered class harmony, and collaborated on event planning and organization.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Committee Director of Crisis Management",
      organization: "UST ICS Student Council",
      period: "2024-2025",
      achievement: "Emergency Response Leadership",
      description:
        "Led committee in preparing for and managing crises impacting student body. Worked with university crisis management team. Handled emergencies like natural disasters and health issues. Ensured effective communication and support systems for student safety.",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "project":
        return "bg-primary/10 text-primary border-primary/20";
      case "organization":
        return "bg-accent/30 text-accent-foreground border-accent/40";
      case "leadership":
        return "bg-secondary/50 text-secondary-foreground border-secondary";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Leadership Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Projects, hackathons, organizational roles, and leadership positions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline circle - positioned relative to the timeline line, not the card */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10 -translate-x-1/2"></div>

                <div className="md:ml-20 bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0 ${getTypeColor(
                        exp.type
                      )}`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-primary">{exp.title}</h3>
                          <p className="text-foreground font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">
                        {exp.achievement}
                      </p>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.split(", ").map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
