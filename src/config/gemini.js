import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyCifKlltl7m2LOnt7zEA8wk4hf0wQdNgCs";

// const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(
    `Generate only 35 hashtags on the topic of ${prompt}. separate them with commas`
  );
  return result.response.text();
}

export async function runSpecial(socialMedia, contentType, prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const specialResult = await chatSession.sendMessage(
    `Generate only 35 to 45 hashtags which are viral on the app ${socialMedia}, the content type is ${contentType} on the topic of ${prompt}. separate them with commas`
  );
  return specialResult.response.text();
}

export default run;
