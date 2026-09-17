import { useEffect, useState, useCallback } from "react";
import profileImg from "@/imports/WhatsApp_Image_2026-08-12_at_3.15.11_PM.jpeg";

// ── Resume URL (served from /public for reliable download on GitHub Pages) ──
const RESUME_URL = "/Prashanth_Singh_Resume.pdf";

// ── Unsplash project images ──
const PROJECT_IMAGES: Record<string, string> = {
  "Brain Tumour Detection":
    "https://images.unsplash.com/photo-1711409645921-ef3db0501f96?w=600&h=340&fit=crop&auto=format",
  "Iris Flower Identification":
    "https://images.unsplash.com/photo-1654289595570-cb6660b69c2e?w=1200&h=675&fit=crop&crop=entropy&auto=format",
  "Fever Prediction":
    "https://images.unsplash.com/photo-1594790628624-9e563bea851d?w=600&h=340&fit=crop&auto=format",
  "Basic Resume Website":
    "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=600&h=340&fit=crop&auto=format",
  "Tip Predictor (Machine Learning Application)":
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600&h=340&fit=crop&auto=format",
};

// ── Data ────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
];

const ROLES = [
  "SDE & AI/ML Intern",
  "Full-Stack Developer",
  "Machine Learning Enthusiast",
  "BCA Student @ Cambridge College",
];

interface Project {
  title: string;
  category: string;
  desc: string;
  details: string[];
  tags: string[];
  gradient: string;
  glow: string;
  org: string;
  link: string;
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    title: "Brain Tumour Detection",
    category: "ML Application",
    desc: "ML system that analyzes MRI brain images and classifies tumor categories using HOG, LBP, and GLCM feature extraction. Flask web app provides automated classification with prediction confidence scores.",
    details: [
      "Developed a Brain Tumor Detection System using machine learning to analyze MRI brain images.",
      "Applied image preprocessing and feature extraction techniques (HOG, LBP, GLCM) to convert MRI images into meaningful features.",
      "Built classification models to detect and categorize tumor types with confidence scoring.",
      "Integrated the trained model into a Flask-based web application that accepts MRI uploads.",
      "Provides real-time tumor classification results with prediction confidence percentages.",
    ],
    tags: ["Python", "Flask", "Machine Learning", "HOG", "LBP", "GLCM", "MRI Analysis", "scikit-learn"],
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(8,127,134,0.15)",
    org: "IMTDA Infotech",
    link: "https://github.com/Pras097/brain_tumour",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-1.029.196a10 10 0 01-3.837-.849l-1.424-.547" />
      </svg>
    ),
  },
  {
    title: "Iris Flower Identification",
    category: "ML Application",
    desc: "Classification system using sepal and petal measurements to identify Setosa, Versicolor, and Virginica species with an interactive Flask web interface displaying real-time predictions.",
    details: [
      "Built a machine learning–based Iris Flower Identification system from scratch.",
      "Preprocessed and analyzed the Iris dataset using pandas and scikit-learn.",
      "Applied classification algorithms to identify all three species: Setosa, Versicolor, and Virginica.",
      "Achieved reliable prediction accuracy through cross-validation and model tuning.",
      "Developed an interactive Flask web application that accepts sepal/petal measurements and displays predicted species with confidence.",
    ],
    tags: ["Python", "Flask", "Classification", "Iris Dataset", "Scikit-learn", "Pandas", "NumPy"],
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(77,98,168,0.15)",
    org: "Personal Project",
    link: "https://github.com/Pras097/iris_project",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Fever Prediction",
    category: "Machine Learning",
    desc: "Intelligent fever screening solution using body temperature and symptom indicators to estimate fever likelihood. Integrated ML model with a Flask interface for instant confidence-aware health predictions.",
    details: [
      "Engineered an intelligent fever screening solution using body temperature and symptom indicators.",
      "Designed the data-processing and classification workflow, transforming patient inputs into meaningful ML features.",
      "Trained and evaluated classification models to estimate the likelihood of fever accurately.",
      "Integrated the trained model with a Flask-based web interface.",
      "Users can enter health indicators and receive instant predictions with confidence information.",
    ],
    tags: ["Python", "Flask", "Healthcare ML", "Feature Engineering", "Classification", "scikit-learn"],
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(44,96,157,0.15)",
    org: "Personal Project",
    link: "https://github.com/Pras097/fever_predictor",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Basic Resume Website",
    category: "Full Stack Application",
    desc: "Personal resume website demonstrating full-stack fundamentals: clean UI design, basic routing, and seamless frontend-backend integration to display structured profile information effectively.",
    details: [
      "Designed and developed a simple personal resume website to demonstrate full-stack development concepts.",
      "Created a clean, responsive user interface using HTML and CSS.",
      "Implemented basic routing and navigation between profile sections.",
      "Integrated frontend with backend components (Python) to display structured profile information.",
      "Deployed the project on GitHub Pages for live hosting and accessibility.",
    ],
    tags: ["Python", "HTML", "CSS", "Full Stack", "GitHub Pages", "Backend Logic"],
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(22,118,111,0.15)",
    org: "Personal Project",
    link: "https://github.com/Pras097/my-website",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Tip Predictor (Machine Learning Application)",
    category: "Machine Learning",
    desc: "Machine learning application that estimates restaurant tip amounts from customer and bill details through an interactive Flask interface.",
    details: [
      "Built a machine learning–based Tip Predictor application to estimate restaurant tip amounts based on customer and bill details.",
      "Preprocessed and analyzed the tipping dataset, applying regression techniques to generate accurate tip predictions from user inputs.",
      "Developed an interactive Flask web application that accepts bill information through a simple interface and displays the predicted tip instantly.",
    ],
    tags: ["Python", "Flask", "Machine Learning", "Regression", "Data Analysis", "scikit-learn"],
    gradient: "from-amber-400 to-orange-600",
    glow: "rgba(217, 119, 6, 0.15)",
    org: "Personal Project",
    link: "https://github.com/Pras097/tip_predictor",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9A2.25 2.25 0 0118.75 6v12a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 015.25 18V6A2.25 2.25 0 017.5 3.75zM8.5 8.25h7m-7 3.75h7m-7 3.75h3" />
      </svg>
    ),
  },
];

const SKILLS = [
  {
    category: "Programming",
    color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/25", boxBg: "bg-cyan-500/15",
    items: ["Python", "Java", "C", "DSA Fundamentals"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    category: "Web & Frameworks",
    color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/25", boxBg: "bg-violet-500/15",
    items: ["Flask", "Django", "HTML & CSS", "REST APIs", "Frontend/Backend Integration"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    category: "AI & Machine Learning",
    color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/25", boxBg: "bg-pink-500/15",
    items: ["Machine Learning", "Data Science", "Feature Extraction", "HOG / LBP / GLCM", "Model Inference"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    category: "Tools & Platforms",
    color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/25", boxBg: "bg-amber-500/15",
    items: ["Git & GitHub", "Git Bash", "Canva", "VS Code"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const EDUCATION = [
  { degree: "Bachelor of Computer Applications (BCA)", institution: "Cambridge College, Bengaluru", gpa: "9.59", label: "CGPA", period: "Present", color: "border-cyan-500", gpaColor: "text-cyan-400", icon: "🎓" },
  { degree: "Senior Secondary (XII) – Science", institution: "BGS PU College", gpa: "88%", label: "Score", period: "Completed", color: "border-violet-500", gpaColor: "text-violet-400", icon: "📘" },
  { degree: "Secondary (X)", institution: "Ujwala Vidya Mandira, Tambihalli Cross, Malur", gpa: "76.66%", label: "Score", period: "Completed", color: "border-pink-400", gpaColor: "text-pink-400", icon: "📗" },
];

interface Certification {
  title: string;
  org: string;
  gradient: string;
  border: string;
  glow: string;
  tag: string;
  learned: string[];
  icon: React.ReactNode;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "Student Development Programme",
    org: "Karunadu Technologies Pvt Ltd",
    gradient: "from-cyan-500/25 to-blue-500/15",
    border: "border-cyan-500/25",
    glow: "rgba(8,127,134,0.12)",
    tag: "Development",
    learned: [
      "Professional development skills and workplace readiness",
      "Effective communication and teamwork techniques",
      "Problem-solving frameworks for technical challenges",
      "Project planning and time management strategies",
      "Exposure to industry best practices in software development",
      "Networking and collaborative working in tech environments",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-cyan-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Data Science and Machine Learning",
    org: "Nasscom Foundation × Capgemini",
    gradient: "from-violet-500/25 to-purple-500/15",
    border: "border-violet-500/25",
    glow: "rgba(77,98,168,0.12)",
    tag: "AI / ML",
    learned: [
      "Fundamentals of Data Science and the data analytics lifecycle",
      "Python programming for data manipulation (NumPy, Pandas)",
      "Data visualization techniques using Matplotlib and Seaborn",
      "Supervised learning algorithms: Linear/Logistic Regression, Decision Trees, SVM",
      "Unsupervised learning: K-Means Clustering and PCA",
      "Model evaluation, validation, and performance metrics",
      "Real-world ML problem-solving and project building",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Diploma in Financial Accounting",
    org: "V Computer Education",
    gradient: "from-emerald-500/25 to-teal-500/15",
    border: "border-emerald-500/25",
    glow: "rgba(22,118,111,0.12)",
    tag: "Finance",
    learned: [
      "Fundamentals of financial accounting principles and standards",
      "Double-entry bookkeeping and ledger management",
      "Preparation of financial statements: Balance Sheet, P&L",
      "Accounts payable and receivable management",
      "Computerized accounting tools and software",
      "Taxation basics and compliance fundamentals",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

// ── Hooks ────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const TECH_MARKS: Record<string, string> = {
  "Python": "⌁", "Java": "♨", "C": "◼", "DSA Fundamentals": "⌘",
  "Flask": "◒", "Django": "◇", "HTML & CSS": "</>", "HTML": "⌂", "CSS": "#",
  "REST APIs": "⇄", "Frontend/Backend Integration": "⟷", "Machine Learning": "✦",
  "Data Science": "▦", "Feature Extraction": "◫", "HOG / LBP / GLCM": "◩",
  "Model Inference": "ƒ", "Git & GitHub": "⑂", "Git Bash": "$_", "Canva": "◉", "VS Code": "⌗",
  "Classification": "⊹", "Iris Dataset": "✾", "Scikit-learn": "◐", "scikit-learn": "◐",
  "Pandas": "◈", "NumPy": "⟐", "Healthcare ML": "✚", "Feature Engineering": "⊞",
  "HOG": "◧", "LBP": "◨", "GLCM": "▧", "MRI Analysis": "◎", "Full Stack": "▣",
  "GitHub Pages": "⎋", "Backend Logic": "∴",
};

function TechnologyTag({ label, tone = "default" }: { label: string; tone?: "default" | "cyan" | "violet" | "pink" | "amber" }) {
  return (
    <span className={`tech-tag tech-tag-${tone}`}>
      <span className="tech-mark" aria-hidden="true">{TECH_MARKS[label] ?? label.slice(0, 2)}</span>
      {label}
    </span>
  );
}

// ── Modals ───────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card max-w-2xl w-full">
        {/* Image */}
        <div className={`relative h-48 -mx-8 mb-6 overflow-hidden rounded-t-3xl ${project.title === "Brain Tumour Detection" ? "-mt-[3.25rem]" : "-mt-8"}`}>
          <img
            src={PROJECT_IMAGES[project.title]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
          <div className={`absolute top-4 left-4 h-0.5 w-16 bg-gradient-to-r ${project.gradient} rounded-full`} />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/90 text-slate-700 border border-slate-900/10 hover:bg-white hover:text-[#1f5f9f] transition-colors text-lg shadow-sm">
            ✕
          </button>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center text-white`}>
            {project.icon}
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">{project.title}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-slate-500 font-mono">{project.category}</span>
              <span className="text-xs text-slate-600 border border-white/10 px-2 py-0.5 rounded-md">{project.org}</span>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.desc}</p>

        <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">What was built</h4>
        <ul className="space-y-2 mb-5">
          {project.details.map((d) => (
            <li key={d} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <span className={`shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} inline-block`} />
              {d}
            </li>
          ))}
        </ul>

        <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">Tech Stack</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t) => <TechnologyTag key={t} label={t} />)}
        </div>

        <a href={project.link} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1f5f9f] text-white font-bold text-sm shadow-lg shadow-blue-950/15 hover:bg-[#174d84] hover:-translate-y-0.5 transition-all">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}

function CertModal({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card max-w-lg w-full">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} border ${cert.border} flex items-center justify-center shrink-0`}>
              {cert.icon}
            </div>
            <div>
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${cert.border} text-slate-400 inline-block mb-1`}>
                {cert.tag}
              </span>
              <h3 className="text-lg font-black text-white leading-snug">{cert.title}</h3>
              <p className="text-slate-500 text-xs mt-0.5">{cert.org}</p>
            </div>
          </div>
          <button onClick={onClose}
            className="text-slate-500 hover:text-[#1f5f9f] transition-colors text-xl leading-none w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-900/10 hover:bg-sky-50 shrink-0 shadow-sm">
            ✕
          </button>
        </div>

        <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">What I Learned</h4>
        <ul className="space-y-2.5">
          {cert.learned.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <span className={`shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${cert.gradient} border ${cert.border} flex items-center justify-center text-xs font-bold text-white`}>
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Contact Modal ────────────────────────────────────────────────
interface ContactForm { name: string; email: string; company: string; message: string; }
function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", company: "", message: "" });
  const set = (f: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [f]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Prashanth,\n\nMy name is ${form.name}${form.company ? ` from ${form.company}` : ""}.\nReply to: ${form.email}\n\n${form.message}\n\nBest regards,\n${form.name}`);
    window.location.href = `mailto:prashanthsingh097@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };
  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-black text-white">Say Hello 👋</h3>
            <p className="text-slate-500 text-xs mt-1">Opens in your email client</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-[#1f5f9f] transition-colors w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-900/10 hover:bg-sky-50 shadow-sm">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-500 mb-1.5 block uppercase tracking-wider">Name *</label>
              <input required className="form-input" placeholder="Your name" value={form.name} onChange={set("name")} />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1.5 block uppercase tracking-wider">Company</label>
              <input className="form-input" placeholder="Optional" value={form.company} onChange={set("company")} />
            </div>
          </div>
          <div>
            <label className="text-xs text-slate-500 mb-1.5 block uppercase tracking-wider">Your Email *</label>
            <input required type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={set("email")} />
          </div>
          <div>
            <label className="text-xs text-slate-500 mb-1.5 block uppercase tracking-wider">Message *</label>
            <textarea required rows={4} className="form-input resize-none" placeholder="What would you like to discuss?" value={form.message} onChange={set("message")} />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-[#1f5f9f] text-white font-bold text-sm shadow-lg shadow-blue-950/20 ring-2 ring-[#1f5f9f]/20 hover:bg-[#174d84] hover:ring-[#1f5f9f]/35 hover:-translate-y-0.5 transition-all">
            Open in Email Client →
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Section Header ───────────────────────────────────────────────
function SectionHeader({ title, centered }: { title: string; centered?: boolean }) {
  return (
    <div className={`reveal ${centered ? "text-center flex flex-col items-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-black text-white">{title}</h2>
      <div className="section-divider" />
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [showContact, setShowContact] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const anyModal = activeProject || activeCert || showContact;
  useEffect(() => {
    document.body.style.overflow = anyModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [anyModal]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleDownload = useCallback(() => {
    const a = document.createElement("a");
    a.href = RESUME_URL;
    a.download = "Prashanth_Singh_Resume.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  return (
    <div className="reference-portfolio min-h-screen overflow-x-hidden">

      {/* Modals */}
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      {activeCert    && <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />}
      {showContact   && <ContactModal onClose={() => setShowContact(false)} />}

      {/* ── Backdrop ── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="backdrop-base" />
        <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
        <div className="blob blob-4" /><div className="blob blob-5" />
        <div className="aurora-mesh" /><div className="orbital-grid" /><div className="grid-overlay" />
      </div>

      {/* ════ NAV ════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav--scrolled" : "nav--at-top"
      }`}>
        <div className="portfolio-header-inner max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button onClick={() => scrollTo("#hero")} className="portfolio-brand flex items-center gap-3">
            <img src={profileImg} alt="Prashanth Singh B M" className="nav-avatar" />
            <span className="hidden sm:block font-bold text-sm gradient-text">Prashanth Singh <span className="header-name-accent">B M</span></span>
          </button>
          <div className="portfolio-nav hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((n) => (
              <button key={n.href} onClick={() => scrollTo(n.href)}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium tracking-wide">
                {n.label}
              </button>
            ))}
          </div>
          <div className="portfolio-actions hidden md:flex items-center gap-3">
            <a href="mailto:prashanthsingh097@gmail.com"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#1f5f9f] hover:bg-[#174d84] transition-colors shadow-lg shadow-blue-950/15">
              LET'S TALK
            </a>
          </div>
          <button className="md:hidden text-slate-700 text-2xl leading-none w-10 h-10 rounded-lg bg-white/80 border border-slate-900/10 shadow-sm hover:bg-sky-50 transition-colors"
            onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-900/8 bg-white/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4">
            {NAV_ITEMS.map((n) => (
              <button key={n.href} onClick={() => scrollTo(n.href)}
                className="text-left text-slate-700 hover:text-cyan-600 font-medium text-base">{n.label}</button>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="mailto:prashanthsingh097@gmail.com"
                className="w-full py-2.5 rounded-lg text-center text-sm font-semibold text-white bg-[#1f5f9f] hover:bg-[#174d84] transition-colors">
                LET'S TALK
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ════ HERO ════ */}
      <section id="hero" className="hero-section relative flex items-center justify-center px-6 pt-24 pb-8 sm:pt-28 sm:pb-10">
        {[
          { size: 6,  top: "18%", left: "8%",  dur: "6s",  delay: "0s",  color: "#087f86" },
          { size: 4,  top: "72%", left: "87%", dur: "8s",  delay: "-2s", color: "#4d62a8" },
          { size: 8,  top: "38%", left: "92%", dur: "7s",  delay: "-4s", color: "#2874b8" },
          { size: 5,  top: "82%", left: "4%",  dur: "9s",  delay: "-1s", color: "#2c609d" },
          { size: 3,  top: "14%", left: "78%", dur: "5s",  delay: "-3s", color: "#4d62a8" },
          { size: 7,  top: "55%", left: "3%",  dur: "10s", delay: "-5s", color: "#16766f" },
          { size: 4,  top: "30%", left: "96%", dur: "6s",  delay: "-2s", color: "#2874b8" },
        ].map((p, i) => (
          <div key={i} className="particle" style={{
            width: p.size, height: p.size, top: p.top, left: p.left,
            background: p.color, boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: p.dur, animationDelay: p.delay,
          }} />
        ))}

        <div className="hero-intro max-w-3xl mx-auto text-center relative z-10">
          <div className="hero-copy reveal">
            <p className="hero-greeting">Hi, I&apos;m</p>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-none mb-1">
              <span className="gradient-text">Prashanth</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 mb-6">
              Singh B M
            </h1>

            <div className="hero-roles mb-6" aria-label="Professional roles">
              {ROLES.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 text-justify">
              Driven BCA student with a <span className="text-cyan-400 font-bold">9.59 CGPA</span> and an SDE &amp; AI/ML Intern.
              I build AI-powered applications, Flask backends, and full-stack web solutions using Python and Java.
              I enjoy creating practical, user-focused software that solves real-world problems. I&apos;m continuously
              strengthening my skills in Machine Learning, DSA, Git, and scalable software development.
            </p>
            <div className="hero-actions flex flex-wrap gap-4">
              <button onClick={() => setShowContact(true)}
                className="px-7 py-3 bg-[#1f5f9f] text-white font-bold text-sm transition-all">
                LET'S TALK ↗
              </button>
              <button onClick={handleDownload}
                className="download-hero-button px-7 py-3 border font-bold text-sm transition-all hover:-translate-y-0.5">
                DOWNLOAD RESUME ↓
              </button>
            </div>
          </div>
        </div>
        <div className="hero-portrait hero-portrait--equal" aria-hidden="true" style={{ opacity: 1 }}>
          <img src={profileImg} alt="" />
        </div>
      </section>

      {/* ════ ABOUT ════ */}
      <section id="about" className="relative pt-8 pb-16 sm:pt-10 sm:pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="About Me" />
          <div className="grid md:grid-cols-5 gap-10 items-center mt-10">
            <div className="md:col-span-3 reveal" style={{ transitionDelay: "0.1s" }}>
              <p className="text-slate-300 text-lg leading-relaxed mb-5 text-justify">
                I am a <span className="text-cyan-400 font-semibold">BCA student</span> at Cambridge College,
                Bengaluru, currently serving as an{" "}
                <span className="text-violet-400 font-semibold">SDE & AI/ML Intern</span> at IMTDA
                Infotech Private Limited. I thrive at the intersection of intelligent systems and
                clean software — from ML pipelines classifying MRI brain images, to Flask-powered
                web apps that make predictions interactive.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 text-justify">
                Beyond code, I serve as{" "}
                <span className="text-emerald-400 font-semibold">Co-lead of Bug-sy</span>, a student
                technical club where I mentor peers, drive knowledge-sharing, and orchestrate
                technical events. Actively seeking internships or entry-level SDE roles.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Bengaluru, Karnataka", icon: "⌖", c: "cyan" },
                  { label: "Open to Work",          icon: "✓", c: "emerald" },
                  { label: "SDE / ML Roles",        icon: "↗", c: "violet" },
                  { label: "CGPA 9.59",             icon: "✦", c: "amber" },
                ].map((b) => (
                  <span key={b.label} className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-transform hover:-translate-y-0.5 font-['JetBrains_Mono',monospace]
                    ${b.c === "cyan"    ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/25" : ""}
                    ${b.c === "emerald" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25" : ""}
                    ${b.c === "violet"  ? "bg-violet-500/10 text-violet-400 border-violet-500/25" : ""}
                    ${b.c === "amber"   ? "bg-amber-500/10 text-amber-400 border-amber-500/25" : ""}
                  `}><span className="grid h-4 w-4 place-items-center rounded-sm bg-current/10 text-xs leading-none">{b.icon}</span>{b.label}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 md:-translate-y-4 grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: "0.2s" }}>
              {[
                { val: "9.59", label: "CGPA",          g: "from-cyan-400 to-blue-500",    s: "shadow-cyan-500/15" },
                { val: "4+",   label: "Projects",       g: "from-violet-400 to-purple-500", s: "shadow-violet-500/15" },
                { val: "3",    label: "Certifications", g: "from-pink-400 to-rose-500",    s: "shadow-pink-500/15" },
                { val: "1",    label: "Internship",     g: "from-emerald-400 to-teal-500", s: "shadow-emerald-500/15" },
              ].map((s) => (
                <div key={s.label} className={`glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-default shadow-lg ${s.s}`}>
                  <div className="stat-value text-3xl font-black mb-1">{s.val}</div>
                  <div className="text-slate-500 text-xs font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ SKILLS ════ */}
      <section id="skills" className="relative py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Skills & Technologies" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {SKILLS.map((group, i) => (
              <div key={group.category} className="reveal glass-card shimmer-card rounded-2xl p-6"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={`skill-icon-box ${group.boxBg} ${group.color}`}>{group.icon}</div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <TechnologyTag key={skill} label={skill} tone={group.category === "Programming" ? "cyan" : group.category === "Web & Frameworks" ? "violet" : group.category === "AI & Machine Learning" ? "pink" : "amber"} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ EXPERIENCE ════ */}
      <section id="experience" className="relative py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Work Experience" />
          <div className="mt-10 reveal">
            <div className="glass-card shimmer-card rounded-2xl overflow-hidden border-l-4 border-cyan-500 relative shadow-xl shadow-cyan-500/5">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cyan-500/5 pointer-events-none" />
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-cyan-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-black text-white">SDE & AI/ML Intern</h3>
                    </div>
                    <p className="text-cyan-400 font-semibold text-lg">IMTDA Infotech Private Limited</p>
                    <p className="text-slate-500 text-sm mt-0.5">Bengaluru, Karnataka</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                      Current Role
                    </span>
                    <span className="text-slate-500 text-xs font-mono">07 / 2026 – Present</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Gaining hands-on experience in Python-based development and AI-driven application architecture.",
                    "Building an AI chatbot with API integration, user interaction workflows, and intelligent backend processing.",
                    "Developed a Brain Tumor Detection System using ML to analyze MRI images and classify tumor categories with confidence scoring.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-cyan-400 shrink-0 mt-0.5">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Flask", "REST APIs", "Machine Learning", "AI Chatbot", "MRI Analysis"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PROJECTS ════ */}
      <section id="projects" className="relative py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Featured Projects" />
          <p className="reveal text-slate-500 mt-3 text-sm" style={{ transitionDelay: "0.1s" }}>
            Click any project card to explore full details ↓
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {PROJECTS.map((p, i) => (
              <button key={p.title} onClick={() => setActiveProject(p)}
                className="reveal glass-card shimmer-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 text-left cursor-pointer"
                style={{ transitionDelay: `${i * 0.1}s`, boxShadow: `0 8px 40px ${p.glow}` }}>
                {/* Project image */}
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img src={PROJECT_IMAGES[p.title]} alt={p.title}
                    className={`w-full h-full object-cover ${p.title === "Brain Tumour Detection" ? "object-top" : "object-center"} group-hover:scale-110 transition-transform duration-700`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/20 to-transparent" />
                  <div className={`absolute top-3 left-3 h-0.5 w-10 bg-gradient-to-r ${p.gradient} rounded-full`} />
                  <span className="absolute top-3 right-3 text-xs text-slate-400 border border-white/15 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm">
                    {p.org}
                  </span>
                  <div className="absolute bottom-3 left-3 right-12 rounded-lg border border-white/15 bg-slate-950/45 px-3 py-2 backdrop-blur-sm">
                    <h3 className="font-black text-sm leading-snug text-white/95 transition-colors group-hover:text-white">{p.title}</h3>
                    <span className="mt-0.5 block text-[10px] font-mono uppercase tracking-[0.12em] text-white/60">{p.category}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`shrink-0 text-white ${p.gradient.includes("cyan") ? "text-cyan-400" : p.gradient.includes("violet") ? "text-violet-400" : p.gradient.includes("pink") ? "text-pink-400" : "text-emerald-400"}`}>
                      {p.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-slate-500">Project overview</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => <TechnologyTag key={t} label={t} />)}
                  {p.tags.length > 4 && <span className="tech-tag tech-tag-default">+{p.tags.length - 4}</span>}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════ EDUCATION ════ */}
      <section id="education" className="relative py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Education" />
          <div className="mt-10 space-y-4">
            {EDUCATION.map((edu, i) => (
              <div key={edu.degree}
                className={`reveal glass-card shimmer-card rounded-2xl p-6 border-l-4 ${edu.color} hover:border-l-[5px] transition-all`}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug">{edu.degree}</h3>
                      <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                      <span className="text-slate-600 text-xs mt-1 inline-block font-mono">{edu.period}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-black ${edu.gpaColor}`}>{edu.gpa}</div>
                    <div className="text-slate-600 text-xs">{edu.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CERTIFICATIONS ════ */}
      <section id="certifications" className="relative py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Certifications" />
          <p className="reveal text-slate-500 mt-3 text-sm" style={{ transitionDelay: "0.1s" }}>
            Click a certificate to see what I learned ↓
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {CERTIFICATIONS.map((cert, i) => (
              <button key={cert.title} onClick={() => setActiveCert(cert)}
                className="reveal glass-card shimmer-card rounded-2xl p-7 text-center hover:scale-105 transition-transform group cursor-pointer text-left"
                style={{ transitionDelay: `${i * 0.1}s`, boxShadow: `0 8px 40px ${cert.glow}` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} border ${cert.border} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${cert.border} text-slate-400 mb-3 inline-block`}>
                  {cert.tag}
                </span>
                <h3 className="font-bold text-white text-sm leading-snug mb-2">{cert.title}</h3>
                <p className="text-slate-500 text-xs mb-3">{cert.org}</p>
                <span className="text-xs text-slate-600 group-hover:text-cyan-400 transition-colors">
                  Click to view details →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════ VOLUNTEERING ════ */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Volunteering & Leadership" />
          <div className="mt-10 reveal">
            <div className="glass-card shimmer-card rounded-2xl border-l-4 border-violet-500 p-8 relative overflow-hidden shadow-xl shadow-violet-500/5">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-violet-500/5 pointer-events-none" />
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-violet-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Co-lead</h3>
                    <p className="text-violet-400 font-bold text-lg mt-0.5">Bug-sy Club</p>
                    <p className="text-slate-500 text-sm">Student Technical Club</p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-mono border border-violet-500/20">Leadership Role</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Spearheaded club initiatives and contributed to student-focused technical activities.",
                  "Facilitated collaboration among members, encouraging participation in technical and creative pursuits.",
                  "Mentored peers through knowledge-sharing sessions and collaborative learning activities.",
                  "Orchestrated club operations, coordinated responsibilities, and supported successful event execution.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-violet-400 shrink-0 mt-0.5">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CONTACT ════ */}
      <section id="contact" className="relative py-16 sm:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Get In Touch" centered />
          <p className="reveal text-slate-400 mt-5 mb-10 max-w-lg mx-auto text-base leading-relaxed"
            style={{ transitionDelay: "0.1s" }}>
            Open to internships, collaborations, and entry-level SDE roles.
            Whether it is an opportunity or a simple hello — my inbox is always open.
          </p>

          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
            style={{ transitionDelay: "0.15s" }}>
            {[
              { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>), label: "Email", value: "prashanthsingh097", href: "mailto:prashanthsingh097@gmail.com", hb: "hover:border-cyan-500/50", ht: "group-hover:text-cyan-400" },
              { icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>), label: "LinkedIn", value: "prashanth0626", href: "https://linkedin.com/in/prashanth0626", hb: "hover:border-blue-500/50", ht: "group-hover:text-blue-400" },
              { icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>), label: "GitHub", value: "Pras097", href: "https://github.com/Pras097", hb: "hover:border-violet-500/50", ht: "group-hover:text-violet-400" },
              { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>), label: "Phone", value: "+91 9945163448", href: "tel:+919945163448", hb: "hover:border-emerald-500/50", ht: "group-hover:text-emerald-400" },
            ].map((c) => (
              <a key={c.label} href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`glass-card rounded-2xl p-5 border border-white/8 ${c.hb} transition-all duration-300 group hover:scale-105 block`}>
                <div className={`text-slate-500 ${c.ht} transition-colors mb-3`}>{c.icon}</div>
                <div className="text-xs text-slate-600 uppercase tracking-widest mb-1.5">{c.label}</div>
                <div className="text-slate-300 text-xs font-medium break-all leading-snug">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="reveal flex flex-wrap items-center justify-center gap-4"
            style={{ transitionDelay: "0.25s" }}>
            <button onClick={() => setShowContact(true)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#1f5f9f] text-white font-bold text-base shadow-2xl shadow-blue-950/20 ring-2 ring-[#1f5f9f]/20 hover:bg-[#174d84] hover:scale-105 hover:ring-[#1f5f9f]/35 transition-all">
              Say Hello ✦
            </button>
            <button onClick={handleDownload}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/85 border border-[#1f5f9f]/25 text-[#1f5f9f] font-bold shadow-lg shadow-blue-950/5 hover:bg-sky-50 hover:border-[#1f5f9f]/50 hover:-translate-y-0.5 transition-all">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1zm-4 13a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/919945163448"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Prashanth on WhatsApp"
      >
        <span className="whatsapp-float__icon" aria-hidden="true">WA</span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* ── Footer ── */}
      <footer className="relative border-t border-white/6 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={profileImg} alt="" className="w-8 h-8 rounded-full object-cover object-top border border-white/15" />
            <div>
              <span className="text-[var(--color-white)] font-black text-base">Prashanth Singh B M</span>
              <p className="text-slate-700 text-xs">SDE & AI/ML Intern · BCA Student</p>
            </div>
          </div>
          <div className="flex gap-5">
            {[
              { label: "GitHub",    href: "https://github.com/Pras097" },
              { label: "LinkedIn",  href: "https://linkedin.com/in/prashanth0626" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="text-slate-600 hover:text-cyan-400 text-sm transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
