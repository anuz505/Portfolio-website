const projectsData = [
  {
    id: 1,
    number: "01",
    name: "Real-time Chat Application",
    description:
      "Full-stack web application for instant messaging. Developed a real-time chat platform using FastAPI WebSockets for seamless bi-directional communication. Implemented JWT-based authentication with secure login and registration functionality. Integrated PostgreSQL for message storage and retrieval, enabling users to access chat history. Built an interactive frontend using React and Redux, ensuring real-time UI updates and state management.",
    technicalDetails:
      "FastAPI WebSockets, JWT authentication, PostgreSQL database, React frontend, Redux state management, bi-directional communication, secure login/registration, message persistence, real-time UI updates.",
    mainImage: "/chat_app.png",
    link: "https://github.com/anuz505/Web-Sockets-with-Fast-Api-Chat-app",
    type: "Web Application",
  },
  {
    id: 2,
    number: "02",
    name: "Banter-Bot 🤖🎭",
    description:
      "A finetuned LLaMA 2 model designed for fun, witty one-liner roasts and banter. This conversational AI specializes in humor, sarcasm, and playful comebacks. Built using a custom dataset of roasts collected from Reddit and other community sources.",
    technicalDetails:
      "LLaMA 2 fine-tuning, Hugging Face transformers, custom humor dataset (humorchains-llama2-1k), parameter-efficient fine-tuning techniques, conversational AI, natural language generation.",
    mainImage: "/banter_bot.png",
    link: "https://github.com/anuz505/Banter-Bot-finetuned-LLM-model",
    type: "Jupyter Notebook",
  },
  {
    id: 3,
    number: "03",
    name: "Recipe AI - RAG Application",
    description:
      "A Recipe AI assistant powered by Retrieval-Augmented Generation (RAG) that helps users discover and learn about various dishes from around the world. Uses semantic search to find relevant recipe information and provides intelligent answers about cooking methods, ingredients, and culinary techniques.",
    technicalDetails:
      "Streamlit web interface, Pinecone vector database, sentence-transformers (all-MiniLM-L6-v2), Groq API for LLM integration, PostgreSQL for conversation storage, real-time monitoring with response times and relevance scores.",
    mainImage: "/recipe_ai.png",
    link: "https://github.com/anuz505/Recipe-AI-RAG-application-",
    type: "Streamlit Application",
  },
  {
    id: 4,
    number: "04",
    name: "Foof-del | Full-Stack Food Delivery Platform (MERN)",
    description:
      "Architected and deployed a containerized MERN stack food delivery app with separate customer and admin interfaces. Built a full-stack MERN application with separate React UIs for customers and admins, powered by a Node.js/Express API. Orchestrated a multi-container deployment using Docker Compose, with Nginx reverse proxy managing traffic between frontend, admin panel, and backend. Implemented secure JWT authentication for protected routes, user sessions, and cart management. Designed a RESTful API with Mongoose supporting CRUD operations for products, users, and orders.",
    technicalDetails:
      "MERN stack (MongoDB, Express.js, React, Node.js), Docker Compose, Nginx reverse proxy, JWT authentication, Mongoose ODM, RESTful API, multi-container architecture, separate admin and customer interfaces, cart management, protected routes.",
    mainImage: "/food-del.png",
    link: "https://github.com/anuz505/Food-Delivery.git",
    type: "Web Application",
  },
  {
    id: 5,
    number: "05",
    name: "Receipt Reader",
    description:
      "This repository contains a simple receipt reader that utilizes tesseract to extract text data and gemini api to generate the json data. A practical application for digitizing and processing receipt information automatically.",
    technicalDetails:
      "Python, Tesseract OCR, Gemini API integration, JSON data processing, image preprocessing with OpenCV.",
    mainImage: "/reciept_reader.png",
    link: "https://github.com/anuz505/Reciept-Reader",
    type: "Web Application",
  },
  {
    id: 6,
    number: "06",
    name: "Recipe AI",
    description:
      "A Recipe AI assistant powered by Retrieval-Augmented Generation (RAG) that helps users discover and learn about various dishes from around the world. Uses semantic search to find relevant recipe information and provides intelligent answers about cooking methods, ingredients, and culinary techniques.",
    technicalDetails:
      "Streamlit web interface, Pinecone vector database, sentence-transformers (all-MiniLM-L6-v2), Groq API for LLM integration, PostgreSQL for conversation storage, real-time monitoring with response times and relevance scores.",
    mainImage: "/recipe_ai.png",
    link: "https://github.com/anuz505/Recipe-AI-RAG-application-",
    type: "Streamlit Application",
  },
  {
    id: 7,
    number: "07",
    name: "AI Posture Coach for Powerlifting",
    description:
      "A comprehensive real-time posture analysis application for powerlifting exercises using computer vision and machine learning. The system provides live feedback on exercise form for Bench Press, Squat, and Deadlift movements with both webcam analysis and video upload capabilities.",
    technicalDetails:
      "Built with Python, Streamlit, MediaPipe, OpenCV, scikit-learn, and PyTorch. Features real-time pose estimation, exercise classification models (benchpress.pkl, squat.pkl, deadlift.pkl), audio feedback system using pygame, and advanced angle calculation algorithms.",
    mainImage: "/LiftingAss.png",
    link: "https://github.com/anuz505/RepRightAI",
    type: "Streamlit Application",
  },

  {
    id: 8,
    number: "08",
    name: "Transformer Architecture Implementation",
    description:
      "A comprehensive implementation of the Transformer architecture from the groundbreaking 'Attention Is All You Need' paper. This project demonstrates the core components including multi-head self-attention, positional encoding, and feed-forward networks, built from scratch for educational purposes and deep understanding of modern NLP architectures.",
    technicalDetails:
      "PyTorch implementation, multi-head self-attention mechanism, positional encoding, layer normalization, feed-forward networks, encoder-decoder architecture, scaled dot-product attention, residual connections, custom dataset preprocessing, gradient clipping, learning rate scheduling.",
    mainImage: "/attention_research_1.png",
    link: "https://github.com/anuz505/Transformer-Implementation",
    type: "Jupyter Notebook",
  },
];

export { projectsData };
