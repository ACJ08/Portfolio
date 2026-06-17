import { motion } from "motion/react";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Gemini Certified Student",
      issuer: "Google for Education",
      year: "2026",
      category: "AI & Technology",
      valid: "Valid through: 01/06/2029",
    },
    {
      title: "UNLEASH Philippines Talent",
      issuer: "UNLEASH Philippines Innovation Lab",
      year: "2025",
      category: "Innovation & Development",
      details: "September 19-25, 2025 | Health Equity & Biomedical Innovation Track",
    },
    {
      title: "Module 3: Performance Evaluation & Presentation Coaching",
      issuer: "BPI DataWave 2025",
      year: "2025",
      category: "Data Science",
    },
    {
      title: "Module 2: Solution Blueprint & AI Architecture",
      issuer: "BPI DataWave 2025",
      year: "2025",
      category: "AI & Technology",
    },
    {
      title: "Module 1: Human-Centered Market Research & Ideation",
      issuer: "BPI DataWave 2025 Learning Sprint",
      year: "2025",
      category: "Data Science",
    },
    {
      title: "Create & Conquer 2025 Hackathon",
      issuer: "Computer Engineering Organization, FEU Tech",
      year: "2025",
      category: "Hackathon",
    },
    {
      title: "Introduction to Python",
      issuer: "DataCamp",
      year: "2025",
      category: "Programming",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      year: "2024",
      category: "Web Development",
    },
    {
      title: "Google Analytics for Beginners",
      issuer: "Google Analytics Academy",
      year: "2024",
      category: "Data Analytics",
    },
    {
      title: "Introduction to Neural Network",
      issuer: "Great Learning Academy",
      year: "2024",
      category: "Artificial Intelligence",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Great Learning Academy",
      year: "2024",
      category: "Artificial Intelligence",
    },
    {
      title: "Canva for Graphic Design",
      issuer: "Department of Information and Communications Technology (DICT)",
      year: "2024",
      category: "Design",
    },
    {
      title: "Basic JavaScript for Web Development",
      issuer: "Department of Information and Communications Technology (DICT)",
      year: "2024",
      category: "Programming",
    },
    {
      title: "Conduct Award",
      issuer: "The First Uniting Christian School",
      year: "2019",
      category: "Academic Excellence",
      details: "DepEd CORE VALUES: Maka-Diyos, Makatao, Makakalikasan, at Makabansa",
    },
    {
      title: "3rd Place - Impromptu Speech",
      issuer: "2019 English Month Celebration",
      year: "2019",
      category: "Communication",
      achievement: "3rd Place - Higher Level",
    },
    {
      title: "Service Team Award",
      issuer: "CFC-YFC Cavite Provincial General Assembly",
      year: "2022",
      category: "Community Service",
      details: "Relentless Assembly - CVSU-Silang Campus",
    },
  ];

  const categories = [
    ...new Set(certifications.map((cert) => cert.category)),
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognitions across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-primary mb-1 line-clamp-2 text-base">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-xs border border-accent/40">
                  {cert.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {cert.year}
                </span>
              </div>

              {cert.achievement && (
                <div className="mb-3 flex items-center gap-1 text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.achievement}</span>
                </div>
              )}

              {cert.valid && (
                <div className="text-xs text-muted-foreground bg-primary/5 p-2 rounded border border-primary/10">
                  {cert.valid}
                </div>
              )}

              {cert.details && !cert.valid && (
                <div className="text-xs text-muted-foreground">
                  {cert.details}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center">
            <h3 className="mb-4 text-primary">Key Highlights</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">
                  {certifications.length}+
                </p>
                <p className="text-sm text-muted-foreground">
                  Certifications & Awards
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">
                  {categories.length}
                </p>
                <p className="text-sm text-muted-foreground">
                  Areas of Expertise
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">Top 4</p>
                <p className="text-sm text-muted-foreground">
                  CSSprint Finalist
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">Top 6</p>
                <p className="text-sm text-muted-foreground">
                  BPI DataWave Finalist
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
