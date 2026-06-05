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
      company: "Company Name",
      position: "Backend Developer",
      startDate: "Nov 2025",
      endDate: "Present",
      summary: [
        "Building Agent AI workflows, integrating AI models, and orchestrating asynchronous tasks using Node.js and NestJS while maintaining clean architecture.",
        "Working in agile environments helped me prioritize tasks effectively, deliver incremental improvements, and adapt quickly to evolving AI-driven requirements.",
        "Strengthened my ability to debug complex AI-related issues, from model response inconsistencies to performance bottlenecks in agent pipelines.",
      ],
    },
    {
      company: "Previous Company",
      position: "Node.js Developer",
      startDate: "Sept 2023",
      endDate: "May 2025",
      summary: [
        "Gained hands-on experience in building REST APIs, Websockets using Node.js and NestJS, implementing clean architecture, and integrating third-party services.",
        "Working in agile environments taught me how to prioritize tasks, deliver iteratively, and adapt to changing requirements.",
        "Sharpened ability to troubleshoot complex issues, whether it was a bug in the code or a performance bottleneck.",
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
      image: "/project1.png",
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
      image: "/project2.png",
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
      image: "/project3.png",
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
      Hi, I'm Vandana Yadav — currently pursuing MTech in Artificial Intelligence & Machine Learning. I work primarily with Python and its powerful ecosystem of libraries to build intelligent, data-driven solutions. My interests span machine learning, deep learning, and AI research. I'm passionate about leveraging cutting-edge technology to solve real-world problems and make a meaningful impact through innovation.
    `,
    image: "/avatar-big.jpg",
  },
};
