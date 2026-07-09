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
    { text: "Education", href: "#education" },
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
  education: [
    {
      institution: "MTech in Artificial Intelligence & Machine Learning",
      degree: "Currently Pursuing",
      startDate: "Present",
      endDate: "Present",
    },
    {
      institution: "KMC Language University",
      degree: "B.Tech. in Computer Science and Engineering (AI/ML)",
      startDate: "2022",
      endDate: "2025",
    },
    {
      institution: "Govt. Girls Polytechnic",
      degree: "Diploma in Information Technology",
      startDate: "2019",
      endDate: "2022",
      location: "Ballia, UP",
    },
  ],
  experience: [
    {
      company: "Academic Training / TATA Motors",
      position: "Python & AI/ML Intern",
      startDate: "May 2026",
      endDate: "Present",
      summary: [
        "Developed AI/ML solutions and contributed to the Multimodal AI Video Assistant project using Python, FastAPI, and React.",
        "Worked on RAG, LangChain, Qdrant, model integration, debugging, and deployment for real-world AI applications.",
      ],
    },
    {
      company: "Summer Training / Techpile Technology Pvt. Ltd.",
      position: "Python with Django Trainee",
      startDate: "Jul 2024",
      endDate: "Sep 2024 (60 Days)",
      summary: [
        "Completed a 60-day training in Python with Django, building web applications with Django and MySQL.",
        "Implemented CRUD operations, authentication, database connectivity, and responsive web interfaces.",
      ],
    },
  ],
  projects: [
    {
      name: "Contexians: A Conscious Context-Aware Multi-Document Q&A System Using RAG",
      summary:
        "A full-stack context-aware multi-document Q&A system using RAG, enabling users to upload and query multiple PDF documents with precise cited source attribution.",
      linkPreview: "https://contexians-react.vercel.app/",
      linkSource: "https://github.com/Vandu63",
      image: "/contexians_rag.png",
      slug: "contexians-rag",
      description:
        "Contexians is a full-stack, conscious context-aware multi-document Q&A application designed to analyze and query complex document sets. Users can upload multiple PDF documents (such as legal agreements, academic research papers, or technical manuals) and interact with them using natural language. The system leverages Retrieval-Augmented Generation (RAG) to scan across all uploaded files, identify relevant context, synthesize an accurate answer, and provide precise citation and source attribution for every piece of information used, ensuring trust and verifiability.",
      myRole: "Full-Stack AI Engineer",
      techStack: [
        "Python",
        "LangChain",
        "FastAPI",
        "React",
        "Vector Database",
        "ChromaDB / Pinecone",
        "OpenAI / Hugging Face",
        "PyPDF",
        "RAG",
      ],
      features: [
        "Multi-document ingestion: Upload and process multiple PDFs concurrently.",
        "Context-aware Q&A: Query across all uploaded documents simultaneously with semantic understanding.",
        "Cited source attribution: Detailed citation with page numbers and source document names for transparency.",
        "Interactive chat interface: User-friendly conversational UI showing source citations alongside answers.",
        "Vector similarity search: Efficient document chunking, embedding generation, and indexing in a vector store.",
      ],
      challenges: [
        "Handling large PDF documents with diverse structures, formatting, and layouts.",
        "Mitigating hallucinations by strictly constraining responses to the retrieved context.",
        "Optimizing chunking strategies and overlap parameters to maintain semantic cohesion.",
      ],
      learnings: [
        "Implementing end-to-end Retrieval-Augmented Generation (RAG) pipelines using Python and LangChain.",
        "Working with vector databases for efficient semantic indexing and similarity searches.",
        "Designing clear citation structures in conversational interfaces to build reliable AI applications.",
      ],
    },
    {
      name: "Multimodal AI Video Assistant with RAG",
      summary:
        "A multimodal AI video assistant that transcribes audio, analyzes visual keyframes, and lets users search, retrieve, and chat with video content using RAG.",
      linkPreview: "",
      linkSource: "https://github.com/Vandu63/rag-video-assistant",
      image: "/video_assistant.png",
      slug: "multimodal-ai-video-assistant-rag",
      description:
        "A full-stack multimodal AI video assistant that uses Retrieval-Augmented Generation to make video content searchable and conversational. The system extracts audio with FFmpeg, transcribes speech, captures visual keyframes with OpenCV, stores metadata in PostgreSQL, indexes text and visual embeddings in Qdrant, and provides a React dashboard where users can upload videos, ask questions, inspect timestamps, generate notes, and compare video content.",
      myRole: "Full-Stack AI Engineer",
      techStack: [
        "Python",
        "FastAPI",
        "React",
        "Material UI",
        "LangChain",
        "Qdrant",
        "PostgreSQL",
        "PyTorch",
        "Transformers",
        "OpenCV",
        "FFmpeg",
        "Docker",
        "RAG",
      ],
      features: [
        "Asynchronous video processing pipeline for audio extraction, transcription, keyframe capture, and metadata storage.",
        "Multimodal retrieval using transcript embeddings and visual frame representations for richer video search.",
        "Interactive chat dashboard for asking questions about video content with timestamp-aware responses.",
        "Qdrant-powered vector search with PostgreSQL tracking videos, transcripts, frames, jobs, and query logs.",
        "Docker Compose setup for running the FastAPI backend, React frontend, PostgreSQL, and Qdrant together.",
      ],
      challenges: [
        "Coordinating audio, transcript, visual frame, and metadata pipelines across multiple backend services.",
        "Designing retrieval logic that can answer from both spoken content and visual scene context.",
        "Keeping long-running video processing responsive for users through job status tracking.",
      ],
      learnings: [
        "Building production-style multimodal RAG workflows with FastAPI, LangChain, Qdrant, and React.",
        "Integrating computer vision, speech transcription, vector search, and relational storage in one application.",
        "Designing user-facing AI tools that make unstructured media searchable, explainable, and easier to study.",
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
  ],
  about: {
    description: `
      Hi, I'm Vandana Yadav — currently pursuing MTech in Artificial Intelligence & Machine Learning. I work primarily with Python and its rich ecosystem to build intelligent, data-driven solutions. My core stack includes TensorFlow, PyTorch, and Scikit-learn for machine learning and deep learning, Pandas and NumPy for data manipulation, Matplotlib and Seaborn for visualization, and FastAPI and Django for building scalable backends. I also work with LangChain and Hugging Face for LLM-based applications. I'm passionate about leveraging cutting-edge technology to solve real-world problems and make a meaningful impact through innovation.
    `,
    image: "/avatar-big.jpg",
  },
};
