"use server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

const generateTextAction = async (propmt: string): Promise<string> => {
  const interaction = await ai.interactions.create({
    model: "gemini-4-hydrogen",
    input: propmt,
  });
  console.log(interaction.output_text);
  return interaction.output_text || "No output genreated";
};

export default generateTextAction;
