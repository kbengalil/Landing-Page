
import { GoogleGenAI, Type } from "@google/genai";
import { DesignTheme, DesignVibe } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateThemeFromVibe = async (prompt: string): Promise<DesignTheme | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Transform this landing page layout into a new style. The user wants: "${prompt}".
      Return a JSON object representing the design theme. 
      Use Tailwind CSS naming conventions where appropriate (specifically for buttonClasses and heroGradient).
      
      Styles available: Cyberpunk, Minimalist, Bento, Organic, Luxury.
      Include hex colors for specific values.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            primaryColor: { type: Type.STRING },
            backgroundColor: { type: Type.STRING },
            cardBackground: { type: Type.STRING },
            textColor: { type: Type.STRING },
            accentColor: { type: Type.STRING },
            borderRadius: { type: Type.STRING, description: 'Tailwind class like rounded-xl or rounded-full' },
            fontFamily: { type: Type.STRING, enum: ['font-sans', 'font-display', 'font-serif'] },
            buttonClasses: { type: Type.STRING, description: 'Tailwind utility classes for the primary button' },
            heroGradient: { type: Type.STRING, description: 'Tailwind gradient classes starting with "from-"' },
            vibe: { type: Type.STRING, enum: Object.values(DesignVibe) }
          },
          required: ['primaryColor', 'backgroundColor', 'cardBackground', 'textColor', 'accentColor', 'borderRadius', 'fontFamily', 'buttonClasses', 'heroGradient', 'vibe']
        }
      }
    });

    return JSON.parse(response.text.trim()) as DesignTheme;
  } catch (error) {
    console.error("Gemini Design Error:", error);
    return null;
  }
};
