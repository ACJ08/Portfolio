import { motion } from "motion/react";
import { ExternalLink, Github, Figma } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "FinSight AI",
      role: "Team Lead | Project Manager | Fullstack Developer | Researcher",
      description:
        "AI-powered MSME market simulation platform enabling Philippine banks to prototype and evaluate financial products. Led a 4-member team end-to-end — fullstack development, OpenAI API simulation engine, MongoDB Atlas database, and JWT authentication.",
      tech: ["React.js", "Node.js", "Express", "OpenAI API", "MongoDB Atlas", "JWT", "Render"],
      achievement: "🏆 BPI DataWave Hackathon 2025 – Top 6 Finalist",
      links: {
        github: "https://github.com/ACJ08/finsightAI-fullstack",
        demo: "https://finsight-api-rvll.onrender.com",
      },
      category: ["AI/ML", "Full-stack"],
    },
    {
      title: "Verity System",
      role: "Team Lead | Frontend Developer | System Analyst",
      description:
        "Corporate web system for automated budget anomaly detection and secure anonymous reporting using tracking codes. Led a 4-member team, designed full system architecture with role-based access control.",
      tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "Shadcn UI"],
      achievement: "🏆 CSSprint December 2025 – Top 4 Finalist",
      links: { github: "https://github.com/zenpa1/verity" },
      category: ["Full-stack"],
    },
    {
      title: "Joyful Bakes: CakewJoy Order Management System",
      role: "Project Manager | Full-Stack Project Lead",
      description:
        "Full-stack order management system for a real bakery business with multi-role support (Customer, Admin, Staff, Production, Baker, Sales). Successfully deployed and used in production.",
      tech: ["React", "TypeScript", "Firebase Auth", "Firebase Realtime DB", "Vercel", "Figma"],
      achievement: "🚀 Live Production System | SE1-SE2 2025–2026",
      links: {
        github: "https://github.com/Luis-Jay/Cakewithjoy",
        demo: "https://cakewjoy.vercel.app",
      },
      category: ["Full-stack"],
    },
    {
      title: "NYC Yellow Taxi Trip Duration Prediction",
      role: "Data Engineer | ML Developer",
      description:
        "End-to-end geospatial data pipeline processing 500K+ NYC taxi trips. Engineered Haversine distance, CRS-based spatial features, and zone metrics. Evaluated Ridge, Lasso, ElasticNet, and Huber regression with bias-variance analysis.",
      tech: ["Python", "GeoPandas", "scikit-learn", "Pandas", "Feature Engineering", "CRS"],
      achievement: "📍 500K+ Records | Geospatial ML Pipeline",
      links: { github: "https://github.com/ACJ08/GeoRide-Analytics-Geospatial-Taxi-Duration-Prediction-Pipeline" },
      category: ["Data Science", "Data Engineering"],
    },
    {
      title: "BankTerm Intelligence",
      role: "ML Developer | Data Scientist",
      description:
        "End-to-end classification pipeline predicting customer term deposit subscriptions from 45,000+ records. Addressed 11.7% class imbalance using Random Forest, Gradient Boosting, and threshold optimization for F1-optimal and 90% recall targets.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      achievement: "🏦 45K+ Records | Imbalanced Classification",
      links: { github: "https://github.com/ACJ08/BankTerm-Intelligence---Customer-Term-Deposit-Subscription-Prediction" },
      category: ["Data Science", "AI/ML"],
    },
    {
      title: "Sarcasm Detection (BERT Variants)",
      role: "Team Lead | ML Developer",
      description:
        "Transformer-based NLP system benchmarking BERT, RoBERTa, ALBERT, DistilBERT, and ModernBERT for sarcasm detection in news headlines. Evaluated using accuracy, precision, recall, and F1-score.",
      tech: ["Python", "PyTorch", "HuggingFace Transformers", "scikit-learn", "Pandas", "Google Colab"],
      achievement: "📊 5-Model BERT Variants Benchmark",
      links: { github: "https://github.com/ACJ08/DataSci7_3CSD_ML-Project" },
      category: ["AI/ML"],
    },
    {
      title: "Multi-Class Text Classification (20 Newsgroups)",
      role: "ML Developer",
      description:
        "Multi-class text classifier for 18,000+ news documents across 20 topics using TF-IDF (n-gram 1–2, sublinear TF) combined with document metadata features. Conducted 20×20 confusion matrix analysis and super-category consolidation.",
      tech: ["Python", "scikit-learn", "TF-IDF", "NumPy"],
      achievement: "📰 18K+ Documents | 20-Class NLP",
      links: { github: "https://github.com/ACJ08/Multi-Class-Text-Classification-using-20-Newsgroups-Dataset" },
      category: ["AI/ML", "Data Science"],
    },
    {
      title: "ShopZada Data Warehouse",
      role: "Team Lead | Data Architect | ETL Lead | BI Analyst",
      description:
        "E-commerce Order-to-Delivery data warehouse using Kimball dimensional modeling and star schema architecture. Built ETL pipelines, conducted data profiling, and delivered three interactive Tableau dashboards.",
      tech: ["Airflow", "Docker", "SQL", "Python", "Pandas", "Kimball Modeling", "Tableau"],
      achievement: "📈 3 Tableau Dashboards | Kimball DWH",
      links: {
        github: "https://github.com/GoldenSpectrum/dwh_finalproject_3CSD-E_group_5WORKS",
        demo: "https://public.tableau.com/app/profile/anne.carol.jonson/viz/TopCampaignsbyNumberofRedemptions/Dashboard2?publish=yes",
      },
      category: ["Data Engineering"],
    },
    {
      title: "EduGrade – Web-Based Grading System",
      role: "Project Lead | Full-Stack Developer",
      description:
        "Full-stack academic grading system with role-based access for students and professors. Implements MVC-style architecture, session management, authentication, and custom error handling (403/404/500). Deployed on GlassFish Server.",
      tech: ["Java", "JSP", "Servlets", "HTML", "CSS", "GlassFish"],
      achievement: "🎓 MVC | Role-Based Authentication",
      links: { github: "https://github.com/ACJ08/ICS2608_Final-Project" },
      category: ["Full-stack"],
    },
    {
      title: "Split It – Expense Splitting App",
      role: "Backend Developer | Technical Contributor",
      description:
        "Flutter-based mobile expense splitting app with fair-share computation algorithm, group management, multi-payer transactions, and expense history tracking using ChangeNotifier state management.",
      tech: ["Flutter", "Dart", "ChangeNotifier"],
      achievement: "📱 Cross-Platform Mobile App",
      links: { github: "https://github.com/ACJ08/Split-It-Final-Project" },
      category: ["Mobile Development"],
    },
    {
      title: "MyND Task – Gamified Productivity App",
      role: "UI/UX Designer | Researcher",
      description:
        "Gamified productivity app for Filipino freelancers featuring customizable quests, modular dashboards, mood tracking, and wellness tools to address burnout. Designed in Figma based on user research.",
      tech: ["Figma", "UI/UX Design", "User Research", "Prototyping"],
      achievement: "🎨 Certificate of Participation – 2025",
      links: { figma: "https://www.figma.com/design/R8qTByYcqovv6a7NzwpcvA/MYND?node-id=0-1&t=srh6pzBCGlCClUUs-1" },
      category: ["UI/UX"],
    },
    {
      title: "Rescute – Animal Rescue HCI App",
      role: "Interactive Designer",
      description:
        "HCI web and mobile application connecting stray animals with rescue volunteers using location tracking and detailed animal profiles to reduce pet homelessness. Wireframed and prototyped in Figma.",
      tech: ["Figma", "Wixsite", "UI/UX Design", "Prototyping"],
      achievement: "🐾 HCI Design Project – 2024",
      links: { demo: "https://annecaroljonsoncic.wixsite.com/rescute" },
      category: ["UI/UX"],
    },
    {
      title: "Dijkstra's Algorithm Visualization",
      role: "Developer | Contributor",
      description:
        "Educational Scratch project demonstrating Dijkstra's shortest path algorithm with conceptualized program flow, scripting, custom backdrops, and voiceovers for each section.",
      tech: ["Scratch", "Algorithms", "Data Structures"],
      achievement: "📚 Algorithm Visualization – 2024",
      links: { demo: "https://scratch.mit.edu/projects/988386764/" },
      category: ["Other"],
    },
    {
      title: "Multimedia: Technology as a Weapon (Interactive Game)",
      role: "Lead Developer | Game Designer",
      description:
        "Interactive Scratch game exploring technology as a powerful modern weapon through immersive gameplay and storytelling. Authored the script and programmed the entire game flow.",
      tech: ["Scratch", "Game Design", "Storytelling"],
      achievement: "🎮 Interactive Education Game – 2022",
      links: { demo: "https://scratch.mit.edu/projects/628876398/" },
      category: ["Other"],
    },
    {
      title: "DANGER_ALERT: EV3 Robotics",
      role: "Robotics Developer",
      description:
        "EV3 On-Brick Programming project simulating danger alerts: emits sound, displays warning sign, turns brick buttons red, and rotates motors counterclockwise for two seconds — repeated three times.",
      tech: ["LEGO EV3", "On-Brick Programming", "Robotics"],
      achievement: "🤖 Robotics Alert Simulation – 2021",
      links: { demo: "https://drive.google.com/drive/folders/1qZXLgs-Lb3Yvc5szeq-AY7i0z6nBVwJ5" },
      category: ["Other"],
    },
  ];

  const filters = ["All", "AI/ML", "Full-stack", "Data Science", "Data Engineering", "Mobile Development", "UI/UX", "Other"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web development, mobile apps, AI/ML systems, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === filterOption
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card/80 backdrop-blur-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              {filterOption}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="mb-2 text-primary">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 italic">
                  {project.role}
                </p>
                <p className="text-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent/30 text-accent-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-primary mb-4">
                  {project.achievement}
                </p>
              </div>
              <div className="flex gap-3 pt-4 border-t border-border">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Figma className="w-4 h-4" />
                    Design
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
