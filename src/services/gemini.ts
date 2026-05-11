import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function getAIChatResponse(prompt: string) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "Neural connection disrupted. Please retry.";
  }
}

export async function* streamAIChatResponse(prompt: string) {
  try {
    const result = await model.generateContentStream(prompt);
    for await (const chunk of result.stream) {
      yield chunk.text();
    }
  } catch (error) {
    console.error("AI Stream Error:", error);
    yield "Neural connection disrupted.";
  }
}
