
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with a named parameter using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAcademicAdvice = async (query: string) => {
  try {
    // Using gemini-3-flash-preview for basic text and Q&A tasks as per guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are the Vidyasager Academy AI Assistant. Your goal is to provide helpful, encouraging, and accurate academic guidance to students, parents, and teachers of Vidyasager Academy. Keep responses professional, polite, and educational. Mention the school's focus on 'academic excellence and holistic development' where appropriate.",
      },
    });
    // Use .text property directly, do not call as a function.
    return response.text;
  } catch (error) {
    console.error("AI Service Error:", error);
    return "I'm sorry, I'm having trouble connecting to my academic database right now. Please try again later or contact the administration desk.";
  }
};
