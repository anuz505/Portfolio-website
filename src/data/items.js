const projectsData = [
  {
    id: 1,
    number: "01",
    name: "AI Posture Coach for Powerlifting",
    description:
      "A comprehensive real-time posture analysis application for powerlifting exercises using computer vision and machine learning. The system provides live feedback on exercise form for Bench Press, Squat, and Deadlift movements with both webcam analysis and video upload capabilities.",
    technicalDetails:
      "Built with Python, Streamlit, MediaPipe, OpenCV, scikit-learn, and PyTorch. Features real-time pose estimation, exercise classification models (benchpress.pkl, squat.pkl, deadlift.pkl), audio feedback system using pygame, and advanced angle calculation algorithms.",
    mainImage: "/LiftingAss.png",
    link: "https://github.com/prabinb50/lifting_assisstant",
    type: "Streamlit Application",
  },

  // {
  //   id: 2,
  //   number: "02",
  //   name: "BinHero: Smart Waste Disposal Tracker",
  //   description:
  //     "A real-time smart waste disposal monitoring system that uses computer vision and object tracking to verify trash dumping actions and promote eco-conscious behavior. Users earn points for responsible disposal, encouraging participation through a gamified reward system.",
  //   technicalDetails:
  //     "Developed using Python, Flask, YOLOv11, DeepSORT, and OpenCV. The system supports real-time video inference through a server-side architecture and tracks disposal actions using motion verification. Mobile app integration enables real-time data transfer and user engagement.",
  //   mainImage: "/binhero1.png",
  //   link: "https://github.com/anuz505/Capstone-BinHERO-Detection-Model",
  //   type: "AI-Powered Solution",
  // },
  {
    id: 2,
    number: "02",
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
    id: 3,
    number: "03",
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
    id: 4,
    number: "04",
    name: "Sentence Completion using Word2Vec and LSTM",
    description:
      "I built this project to understand sequence-to-one learning, how to use pre-trained embeddings in NLP tasks, and how to train LSTM networks for language modeling. Implements advanced NLP techniques for text completion.",
    technicalDetails:
      "Word2Vec embeddings, LSTM neural networks, TensorFlow/Keras, sequence modeling, natural language processing.",
    mainImage: "/Sentence_completion.png",
    link: "https://github.com/anuz505/Sentence-Completion-using-Word2Vec-and-LSTM",
    type: "Jupyter Notebook",
  },
  {
    id: 5,
    number: "05",
    name: "RNN from Scratch",
    description:
      "Implementation of Recurrent Neural Networks from scratch to understand the fundamentals of sequence modeling and temporal data processing. Built without using high-level frameworks.",
    technicalDetails:
      "Pure Python/NumPy implementation, vanilla RNN architecture, gradient computation, sequence processing, educational implementation.",
    mainImage: "/RNN.webp",
    link: "https://github.com/anuz505/RNN-from-scratch",
    type: "Jupyter Notebook",
  },
  {
    id: 6,
    number: "06",
    name: "English to French Translation - seq2seq LSTM",
    description:
      "A sequence-to-sequence model using LSTM networks for English to French translation. Implements encoder-decoder architecture with attention mechanisms for neural machine translation.",
    technicalDetails:
      "Seq2seq architecture, LSTM encoder-decoder, attention mechanism, TensorFlow/Keras, machine translation, multilingual NLP.",
    mainImage: "/translate.webp",
    link: "https://github.com/anuz505/English-to-French-Translation-seq2seq-LSTM",
    type: "Jupyter Notebook",
  },
];

export { projectsData };
