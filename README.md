# AI Code Reviewer

**AI Code Reviewer** is a web application that uses an AI model to review code. It highlights issues and provides suggestions in clear, concise bullet points. Users can paste their code into a text area, and the app will give them feedback on how to improve it.

---

## Features

- **Code Review**: Paste your code into a text area, and the app sends it to the backend for analysis.
- **Review Feedback**: The backend processes the code and sends back a list of suggestions for improvement.
- **Clean UI**: User-friendly interface with a modern design.
- **Error Handling**: Displays error messages if the review fails.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the backend.
- **CSS**: Custom styling for the app.

### Backend
- **Node.js with Express**: For handling backend requests.
- **AI API (Google Gemini)**: For code analysis and review.

---


---

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ai-code-reviewer.git
    cd ai-code-reviewer/backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the backend server**:
    ```bash
    npm start
    ```
   The backend will be running at `http://localhost:5000`.

---

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ai-code-reviewer/frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the React development server**:
    ```bash
    npm start
    ```
   The frontend will be running at `http://localhost:3000`.

4. **Project Structure
```
ai-code-reviewer/
│
├── backend/                 # Backend server code
│   ├── server.js            # Entry point for the backend server
│   ├── /routes              # Defines API routes
│   └── /utils               # Utility functions and AI integration logic
│
├── frontend/                # React frontend application
│   ├── public/              # Static public files (index.html, favicon, etc.)
│   └── src/                 # Source code for the React app
│       ├── App.js           # Main React component
│       ├── App.css          # Styling for the app
│       └── index.js         # Entry point for React
│
├── .gitignore               # Files and folders to ignore in Git
├── package.json             # Project dependencies and scripts
└── LICENSE                  # MIT License for this project

```
---

## How It Works

### Backend
The backend receives a POST request at `/api/review`, containing the code. It processes the code and returns a list of suggestions for improvement.

### Frontend
The frontend sends the code to the backend and displays the suggestions in an easy-to-read format.

---

## Enhancements & Future Work

- **Syntax Highlighting**: Improve readability by adding syntax highlighting.
- **Dark Mode**: Implement dark theme support.
- **Code Formatting**: Integrate code formatting features.
- **AI Customization**: Enhance the AI model to provide more personalized suggestions.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.
