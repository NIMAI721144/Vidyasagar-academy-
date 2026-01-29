
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askCounselor(question: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: "You are the AI Admission Counselor for Vidyasagar Academy. Vidyasagar Academy is a premier co-educational institution focusing on STEM, Arts, and holistic development. Provide helpful, professional, and warm responses about school history, admissions, curriculum, and extracurriculars based on common Indian school standards. Keep responses concise.",
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm having trouble connecting to the school database right now. Please try again or contact our front office.";
    }
  }
}

export const geminiService = new GeminiService();
