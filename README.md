# 🌐 Anne Carol G. Jonson — Personal Portfolio

> A fully responsive personal portfolio website built with **React + TypeScript + Tailwind CSS**, featuring a purple glassmorphism design system, dark/light mode, animated sections, and a functional contact form.

**Live Site:** [View Portfolio](https://carol-portfolio-six.vercel.app) <!-- Replace with your actual deployed URL -->

---

## 👩‍💻 About

Portfolio for **Anne Carol G. Jonson**, a 4th-year Bachelor of Science in Computer Science student at the **University of Santo Tomas**, specializing in **Data Science**. Currently seeking technology internships across software engineering, full-stack development, AI/ML, data science, and related tech domains.

- **GWA:** 1.225 | Consistent Dean's Lister | Candidate for Magna Cum Laude
- **Hackathons:** Top 6 – BPI DataWave 2025 · Top 4 – CSSprint 2025
- **Certifications:** 16+ across cloud, data, web, and AI platforms

---

## ✨ Features

- **Hero Section** — Typing animation cycling through 7 internship role phrases, with dynamic light/dark mode profile photo and smooth crossfade
- **About Me** — Personal summary, stats, and highlight cards
- **Skills & Expertise** — 9 technology categories covering all project stack technologies
- **Featured Projects** — 15 projects with filtering by category (AI/ML, Full-stack, Data Science, Data Engineering, Mobile, UI/UX), live demo and GitHub links
- **Experience** — Leadership, hackathon, and project management roles
- **Education** — UST, senior high, and grade school academic records with honors
- **Certifications** — 16+ verified certifications with issuer badges
- **Contact** — Functional contact form (powered by Formsubmit) that sends directly to email, plus social links
- **Dark / Light Mode** — Full theme toggle with persistent glassmorphism effects
- **Responsive** — Mobile-first, works across all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) |
| Icons | Lucide React |
| Routing | React Router v7 |
| Contact Form | Formsubmit.co |
| Build Tool | Vite 6 |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                  # Root component, theme state, layout
│   └── components/
│       ├── Navigation.tsx       # Sticky nav bar with mobile menu
│       ├── Hero.tsx             # Typing animation + profile photo
│       ├── About.tsx            # Summary + highlight cards
│       ├── Skills.tsx           # 9-category skill grid
│       ├── Projects.tsx         # 15 projects with filter system
│       ├── Experience.tsx       # Work, leadership & hackathon roles
│       ├── Education.tsx        # Academic background + honors
│       ├── Certifications.tsx   # 16+ certifications
│       └── Contact.tsx          # Contact form + social links
├── imports/                     # Profile images and static assets
└── styles/
    ├── theme.css                # CSS custom properties / design tokens
    └── fonts.css                # Font imports
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/ACJ08/your-portfolio-repo.git
cd your-portfolio-repo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
pnpm build
```

---

## 📬 Contact Form Setup

The contact form uses **[Formsubmit.co](https://formsubmit.co)** — no backend or API keys required.

On the very first form submission, Formsubmit will send a one-time activation email to `annecaroljonson1108@gmail.com`. Click **"Activate Form"** in that email, and all future submissions will land directly in your inbox.

---

## 🗂️ Featured Projects (15 Total)

| # | Project | Stack | Links |
|---|---|---|---|
| 1 | **FinSight AI** – BPI DataWave Top 6 | React, Node.js, Express, OpenAI API, MongoDB Atlas | [GitHub](https://github.com/ACJ08/finsightAI-fullstack) · [Demo](https://finsight-api-rvll.onrender.com) |
| 2 | **Verity System** – CSSprint Top 4 | Next.js, React, Supabase | [GitHub](https://github.com/zenpa1/verity) |
| 3 | **CakewJoy OMS** – Live Production | React, TypeScript, Firebase, Vercel | [GitHub](https://github.com/Luis-Jay/Cakewithjoy) · [Demo](https://cakewjoy.vercel.app) |
| 4 | **NYC Taxi Duration Prediction** | Python, GeoPandas, scikit-learn | [GitHub](https://github.com/ACJ08/GeoRide-Analytics-Geospatial-Taxi-Duration-Prediction-Pipeline) |
| 5 | **BankTerm Intelligence** | Python, scikit-learn, Pandas | [GitHub](https://github.com/ACJ08/BankTerm-Intelligence---Customer-Term-Deposit-Subscription-Prediction) |
| 6 | **Sarcasm Detection (BERT Variants)** | PyTorch, HuggingFace Transformers | [GitHub](https://github.com/ACJ08/DataSci7_3CSD_ML-Project) |
| 7 | **20 Newsgroups Text Classification** | Python, scikit-learn, TF-IDF | [GitHub](https://github.com/ACJ08/Multi-Class-Text-Classification-using-20-Newsgroups-Dataset) |
| 8 | **ShopZada Data Warehouse** | Airflow, Docker, SQL, Tableau | [GitHub](https://github.com/GoldenSpectrum/dwh_finalproject_3CSD-E_group_5WORKS) |
| 9 | **EduGrade Grading System** | Java, JSP, Servlets, GlassFish | [GitHub](https://github.com/ACJ08/ICS2608_Final-Project) |
| 10 | **Split It – Expense App** | Flutter, Dart, ChangeNotifier | [GitHub](https://github.com/ACJ08/Split-It-Final-Project) |
| 11 | **MyND Task – Productivity App** | Figma, UX Research | [Figma](https://www.figma.com/design/R8qTByYcqovv6a7NzwpcvA/MYND) |
| 12 | **Rescute – Animal Rescue HCI** | Figma, Wixsite | [Demo](https://annecaroljonsoncic.wixsite.com/rescute) |
| 13 | **Dijkstra's Visualization** | Scratch | [Demo](https://scratch.mit.edu/projects/988386764/) |
| 14 | **Multimedia Interactive Game** | Scratch | [Demo](https://scratch.mit.edu/projects/628876398/) |
| 15 | **DANGER_ALERT EV3 Robotics** | LEGO EV3, On-Brick Programming | [Drive](https://drive.google.com/drive/folders/1qZXLgs-Lb3Yvc5szeq-AY7i0z6nBVwJ5) |

---

## 📜 License

This portfolio is personal and not licensed for reuse or redistribution. All content, projects, and personal information belong to **Anne Carol G. Jonson**.

---

## 🤝 Connect

- **Email:** annecaroljonson1108@gmail.com
- **LinkedIn:** [linkedin.com/in/anne-carol-jonson](https://www.linkedin.com/in/anne-carol-jonson-745752314/)
- **GitHub:** [github.com/ACJ08](https://github.com/ACJ08)
