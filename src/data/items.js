const projectsData = [
  {
    id: 1,
    number: "01",
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
    id: 2,
    number: "02",
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
    id: 3,
    number: "03",
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
    id: 4,
    number: "04",
    name: "Deep Learning Hackathon - Image Segmentation for Autonomous Vehicles",
    description:
      "This repository contains the code for the winning model of the Deep Learning Hackathon focused on image segmentation for autonomous vehicles using supervised learning techniques. Our model leverages advanced neural network architectures to achieve state-of-the-art performance.",
    technicalDetails:
      "Built with Python, TensorFlow/PyTorch, implemented U-Net architecture, achieved 95%+ IoU score on validation dataset.",
    mainImage: "/segmentation.jpg",
    link: "https://github.com/anuz505/deep-learning-hackathon",
    type: "Jupyter Notebook",
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
    type: "Jupyter Notebook",
  },
  {
    id: 6,
    number: "06",
    name: "Transformer Architecture Implementation",
    description:
      "A comprehensive implementation of the Transformer architecture from the groundbreaking 'Attention Is All You Need' paper. This project demonstrates the core components including multi-head self-attention, positional encoding, and feed-forward networks, built from scratch for educational purposes and deep understanding of modern NLP architectures.",
    technicalDetails:
      "PyTorch implementation, multi-head self-attention mechanism, positional encoding, layer normalization, feed-forward networks, encoder-decoder architecture, scaled dot-product attention, residual connections, custom dataset preprocessing, gradient clipping, learning rate scheduling.",
    mainImage: "/attention_research_1.png",
    link: "https://github.com/anuz505/Transformer-Implementation",
    type: "Jupyter Notebook",
  },
  {
    id: 7,
    number: "07",
    name: "RNN from Scratch",
    description:
      "Implementation of Recurrent Neural Networks from scratch to understand the fundamentals of sequence modeling and temporal data processing. Built without using high-level frameworks.",
    technicalDetails:
      "Pure Python/NumPy implementation, vanilla RNN architecture, gradient computation, sequence processing, educational implementation.",
    mainImage: "/RNN.webp",
    link: "https://github.com/anuz505/RNN-from-scratch",
    type: "Jupyter Notebook",
  },
];

export { projectsData };
