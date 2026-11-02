export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Project = {
  number: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  artwork: "rag" | "translation" | "wellbeing" | "vision";
  repository?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "R"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "Regression", "Random Forest", "XGBoost", "KNN", "SVM", "K-Means"],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "ANN", "CNN", "RNN", "LSTM", "Transformers"],
  },
  {
    title: "Generative AI",
    skills: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Qdrant",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend & Frontend",
    skills: ["FastAPI", "REST APIs", "Pydantic", "React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Tools & Data",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Pytest",
      "SQLite",
      "Jupyter",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    type: "Retrieval · Generative AI",
    title: "Semantic Cache RAG Engine",
    description:
      "A retrieval-augmented generation engine with document ingestion, semantic retrieval, and tenant-aware caching.",
    technologies: ["FastAPI", "React", "TypeScript", "Qdrant", "Sentence Transformers"],
    features: [
      "PDF and TXT ingestion with document chunking and embeddings",
      "Semantic search with source citations",
      "Tenant-scoped semantic caching, TTL, and invalidation",
      "Confidence-based escalation",
    ],
    artwork: "rag",
    repository: "https://github.com/divya234-hue/Semantic-Cache-Cost-Aware-RAG-Engine",
  },
  {
    number: "02",
    type: "NLP · Machine Translation",
    title: "Language Translation AI",
    description:
      "A local neural machine translation application designed to translate text without relying on third-party translation APIs.",
    technologies: ["PyTorch", "Hugging Face Transformers", "MarianMT", "FastAPI", "React", "Docker"],
    features: [
      "English translation to French, German, Spanish, and Hindi",
      "In-memory caching for repeated translations",
      "Configurable CPU or GPU inference",
      "FastAPI backend and React interface",
    ],
    artwork: "translation",
    repository: "https://github.com/divya234-hue/language-translator",
  },
  {
    number: "03",
    type: "Machine Learning · API",
    title: "Mental Health Score Predictor",
    description:
      "A prediction project comparing linear regression and random forest models through a reusable data-preprocessing workflow.",
    technologies: ["Scikit-learn", "Pandas", "FastAPI"],
    features: [
      "Linear Regression and Random Forest comparison",
      "Data preprocessing pipeline",
      "Model evaluation",
      "FastAPI prediction endpoint",
    ],
    artwork: "wellbeing",
    repository: "https://github.com/divya234-hue/mental-health-score-",
  },
  {
    number: "04",
    type: "Computer Vision · Deep Learning",
    title: "Face Emotion Detection",
    description:
      "A CNN-based computer vision project that classifies facial expressions and supports real-time webcam inference.",
    technologies: ["TensorFlow", "Keras", "OpenCV"],
    features: [
      "Seven-emotion classification with a CNN",
      "Image augmentation during training",
      "Face detection",
      "Real-time webcam inference",
    ],
    artwork: "vision",
    repository: "https://github.com/divya234-hue/face-emotion-detection",
  },
];

export const certifications = [
  { name: "Python", issuer: "GeeksforGeeks" },
  { name: "LangChain and LangGraph", issuer: "IBM" },
  { name: "Claude Certificate", issuer: "Anthropic" },
];
