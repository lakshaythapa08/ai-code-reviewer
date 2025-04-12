const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getGeminiReview(code) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-thinking-exp-01-21"
  });
  const prompt = `Please review the following code and suggest improvements as a list of short, clear bullet points. 
  Each point should be just one sentence.\n\nCode:\n${code}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = getGeminiReview;
