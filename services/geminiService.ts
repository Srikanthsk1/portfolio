
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  constructor() {
    // We instantiate inside methods to ensure we use the latest environment variables
  }

  async chat(message: string, history: { role: 'user' | 'model', content: string }[]) {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        }
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "The AI assistant is temporarily resting. Please try again later.";
    }
  }

  async generateProjectImage(title: string, description: string): Promise<string> {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `A professional, high-quality, conceptual 3D digital render representing the project: "${title}". 
      Description: ${description}. 
      Style: clean, futuristic, cinematic lighting, tech-focused, dark navy and cyan accents, 8k resolution, highly detailed.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData?.data) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
      throw new Error("No image data returned from model");
    } catch (error) {
      console.error("Image Generation Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
