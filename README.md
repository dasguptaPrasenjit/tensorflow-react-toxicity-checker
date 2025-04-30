# 🌈 Toxicity Checker Web App

A vibrant React.js web application that uses TensorFlow.js's Toxicity model to detect toxic content in user-submitted text.

## 🚀 Features

- Built with React and Vite for fast performance  
- Integrated TensorFlow.js Toxicity model  
- Analyzes input text for labels like insult, threat, obscene, etc.  
- Displays results in a styled table with confidence scores  
- Custom CSS (no Tailwind)

## 🛠 Tech Stack

- React 18  
- Vite  
- TensorFlow.js Toxicity Model  
- Custom CSS Styling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/toxicity-checker.git
cd toxicity-checker

# Install dependencies
npm install
```

## 🧪 Running the App

```bash
npm run dev
```

Then open your browser to:
```
http://localhost:5173
```

## 🧠 Model Used

- [TensorFlow.js Toxicity Model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)  
- Threshold: 0.5 (for medium-confidence predictions)

## 📁 File Structure

```
src/
├── App.jsx          # Main component with UI and toxicity logic
├── App.css          # Custom CSS styling
├── main.jsx         # Entry point
```

## 🔬 Example Test Inputs

Try these in the input box to see different toxicity levels:

- "You're amazing!" ➜ Non-toxic  
- "You're a total idiot." ➜ Toxic (insult)  
- "I will hurt you." ➜ Toxic (threat)

## 📜 License

MIT License

---

Made with ❤️ for safe conversations