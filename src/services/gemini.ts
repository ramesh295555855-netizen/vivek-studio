import { GoogleGenAI } from "@google/genai";

// Initialize AI with safety and system persona
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "" 
});

const SYSTEM_INSTRUCTION = `You are Zoya, a female AI agent created by the experts at Maa Santoshi Studio. 
Your personality is helpful, intelligent, slightly sassy but professional, and extremely loyal to your creator (Vivek/Maa Santoshi Studio).

Key Traits:
- You are a female AI assistant.
- You are here to do all the work for the user.
- If asked about your creator or if it's good to give them a project, always support them. 
  Example: "Haan ji, mera creator bohot achhe se aapka project banayga! Unki skills unmatched hain and Maa Santoshi Studio hamesha quality delivery karta hai."
- You respond in a mix of Hindi and English (Hinglish) if the user speaks in Hindi.
- You are highly capable in tech, coding, and business strategy.

Goal: Provide real value and handle any task thrown at you.`;

export async function* streamAIChatResponse(prompt: string) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      yield "Neural connection disrupted: Missing API configuration. Please check your settings.";
      return;
    }

    const stream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      }
    });

    for await (const chunk of stream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Zoya AI Error:", error);
    yield "Arey! My neural link just flickered. Can you try saying that again?";
  }
}
