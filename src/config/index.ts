import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Vandana Yadav — AI/ML Engineer & MTech Student",
  author: "Vandana Yadav",
  description:
    "MTech student specializing in Artificial Intelligence & Machine Learning, passionate about building intelligent systems using Python, deep learning, and data-driven solutions.",
  lang: "en",
  siteLogo: "/avatar-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "/projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/Vandu63" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/vandana-yadav-07438928b",
    },
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://vandu63.github.io",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Vandana Yadav",
    specialty: "AI/ML Engineer",
    summary: `Currently pursuing MTech in Artificial Intelligence & Machine Learning. Passionate about building intelligent systems, exploring deep learning, and applying Python-powered solutions to solve real-world problems.`,
    email: "vandana33yadav@gmail.com",
  },
  experience: [
    {
      company: "Self-Learning / Academic Training",
      position: "Python & AI/ML Trainee",
      startDate: "Nov 2025",
      endDate: "Present",
      summary: [
        "Deepening expertise in Python for AI/ML by building end-to-end pipelines using TensorFlow and PyTorch, covering model training, fine-tuning, and deployment.",
        "Exploring advanced deep learning concepts including CNNs, RNNs, transformers, and LLM-based agent workflows using LangChain and Hugging Face.",
        "Strengthened debugging and optimization skills across Python-based AI systems, from data preprocessing bottlenecks to model inference performance tuning.",
      ],
    },
    {
      company: "Academic & Project-Based Training",
      position: "Python Developer",
      startDate: "Sept 2023",
      endDate: "May 2025",
      summary: [
        "Built machine learning and data analysis projects using Python, Scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn, applying statistical and ML techniques to real-world datasets.",
        "Developed REST APIs and backend services using FastAPI and Django, applying clean code principles and data validation with Pydantic.",
        "Sharpened problem-solving skills through debugging data pipelines, model evaluation challenges, and optimizing Python code for performance and readability.",
      ],
    },
  ],
  projects: [
    {
      name: "Health Risk Analysis with PCA & Random Forest",
      summary:
        "ML pipeline applying PCA for dimensionality reduction and Random Forest classification to evaluate health risk with improved accuracy and computational efficiency.",
      linkPreview: "",
      linkSource: "https://github.com/Vandu63/Health-Risk-Analysis-PCA-RandomForest",
      image: "/health_risk_pca.png",
      slug: "health-risk-analysis-pca-randomforest",
      description:
        "A machine learning project focused on health risk classification. A Random Forest classifier is trained on both original and PCA-transformed data to evaluate improvements in classification accuracy and computational efficiency. The project demonstrates how dimensionality reduction through PCA can enhance model performance while reducing training time on high-dimensional health datasets.",
      myRole: "ML Engineer | Academic Research Project",
      techStack: [
        "Python",
        "Scikit-learn",
        "PCA",
        "Random Forest",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      features: [
        "PCA-based dimensionality reduction to improve model efficiency.",
        "Random Forest classifier trained on both raw and PCA-transformed features.",
        "Comparative analysis of classification accuracy before and after PCA.",
        "Visual exploration of principal components and feature importance.",
        "Performance benchmarking using precision, recall, and F1-score metrics.",
      ],
      challenges: [
        "Selecting the optimal number of principal components without sacrificing accuracy.",
        "Handling class imbalance in real-world health datasets.",
        "Interpreting PCA-transformed features in a clinically meaningful way.",
      ],
      learnings: [
        "Deep understanding of PCA as a dimensionality reduction technique.",
        "Practical application of ensemble methods like Random Forest for classification.",
        "Evaluating model trade-offs between computational efficiency and predictive power.",
      ],
    },
    {
      name: "Face Recognition Using OpenCV",
      summary:
        "Real-time face detection and recognition system built with Python and OpenCV, identifying faces from a live webcam feed using LBPH algorithm.",
      linkPreview: "",
      linkSource: "https://github.com/Vandu63/Face-Recognition-Using-OpenCV",
      image: "/face_recognition.png",
      slug: "face-recognition-opencv",
      description:
        "A Python-based Face Recognition system developed using OpenCV for real-time face detection and recognition. The system captures live video from a webcam, detects faces using Haar cascade classifiers, and recognizes them by comparing against a trained dataset. It demonstrates core computer vision techniques including image preprocessing, feature extraction, and classification.",
      myRole: "Computer Vision Developer | Academic Project",
      techStack: [
        "Python",
        "OpenCV",
        "NumPy",
        "Haar Cascade Classifiers",
        "LBPH Face Recognizer",
        "Jupyter Notebook",
      ],
      features: [
        "Real-time face detection from webcam using Haar cascade classifiers.",
        "Face recognition by matching against a pre-trained dataset.",
        "LBPH (Local Binary Patterns Histograms) algorithm for recognition.",
        "Dataset creation pipeline for training custom face models.",
        "Annotated bounding boxes with identity labels on live video feed.",
      ],
      challenges: [
        "Handling varied lighting conditions and facial angles for accurate detection.",
        "Minimizing false positives during real-time classification.",
        "Building an efficient face dataset collection and preprocessing pipeline.",
      ],
      learnings: [
        "In-depth understanding of Haar cascade classifiers and feature extraction.",
        "Practical experience with real-time video stream processing using OpenCV.",
        "Understanding trade-offs between traditional CV and deep learning approaches.",
      ],
    },
    {
      name: "COVID-19 Data Analysis Using Python",
      summary:
        "Exploratory data analysis of the global COVID-19 dataset using Python, Pandas, and statistical techniques to uncover meaningful insights about the pandemic.",
      linkPreview: "",
      linkSource: "https://github.com/Vandu63/COVID19-Data-Analysis-Using-Python",
      image: "/covid_data_analysis.png",
      slug: "covid19-data-analysis",
      description:
        "An exploratory data analysis (EDA) project on the global COVID-19 dataset using Python, Pandas, and statistical techniques to derive meaningful insights. The project examines trends in confirmed cases, recoveries, and fatalities across countries and time periods, producing clear visualizations that communicate the pandemic's progression and regional impact.",
      myRole: "Data Analyst | Academic Project",
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      features: [
        "Country-wise and time-series analysis of COVID-19 spread.",
        "Visualization of confirmed cases, recoveries, and mortality rates.",
        "Statistical summaries and correlation analysis across key metrics.",
        "Data cleaning and preprocessing pipeline for raw COVID-19 datasets.",
        "Comparative regional analysis to identify pandemic hotspots.",
      ],
      challenges: [
        "Handling inconsistent and missing data across multiple countries.",
        "Normalizing datasets from different reporting standards.",
        "Choosing the right visualizations to communicate complex trends clearly.",
      ],
      learnings: [
        "Proficiency in data wrangling and EDA with Pandas and NumPy.",
        "Building compelling visualizations to tell data-driven stories.",
        "Statistical thinking for interpreting real-world epidemiological data.",
      ],
    },
  ],
  about: {
    description: `
      Hi, I'm Vandana Yadav — currently pursuing MTech in Artificial Intelligence & Machine Learning. I work primarily with Python and its rich ecosystem to build intelligent, data-driven solutions. My core stack includes TensorFlow, PyTorch, and Scikit-learn for machine learning and deep learning, Pandas and NumPy for data manipulation, Matplotlib and Seaborn for visualization, and FastAPI and Django for building scalable backends. I also work with LangChain and Hugging Face for LLM-based applications. I'm passionate about leveraging cutting-edge technology to solve real-world problems and make a meaningful impact through innovation.
    `,
    image: "/avatar-big.jpg",
  },
};
