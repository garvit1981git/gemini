
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCqaK9wxdxkrzrfmc10gl0JY9HvLBsyTuQ" });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    generationConfig: {
      maxOutputTokens: 50, // Limits response size
    },
  });
  let finaltext = response.text
  return finaltext
}

export default main;