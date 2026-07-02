
import { GoogleGenAI } from '@google/genai'
import axios from 'axios';

const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_API_KEY
});

export async function createImage(userPrompt: string, imageUrl: string): Promise<Buffer> {
    const base64Image = await axios.
        get(
            imageUrl,
            { responseType: "arraybuffer" }
        )
        .then(response => Buffer.from(response.data, "binary").toString("base64"));

    

    const contents = [
  {
    text: userPrompt
  },
  {
    inlineData: {
      mimeType: "image/png",
      data: base64Image
    }
  }
];


    
   const response = await ai.models.generateContent({
  model: "gemini-3.1-flash-image",
  contents
});



    const parts = response.candidates?.[0]?.content?.parts!;

    

for (const part of parts) {
  if (part.text) {
  } else if (part.inlineData) {
    return Buffer.from(part.inlineData.data!, "base64");
  }
}
throw new Error("Image generation failed");
}