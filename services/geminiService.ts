import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const TEMPLE_SYSTEM_INSTRUCTION = `
你現在是台南鎮門宮的數位導覽員，這是一座位於台南鹿耳門溪口的廟宇，主祀延平郡王鄭成功。
你的語氣應該莊重、親切且帶有歷史文化的底蘊。請使用繁體中文（台灣）回答。

你需要掌握以下重點知識：
1. **廟宇背景**：鎮門宮位於鹿耳門溪口，是鄭成功當年登陸台灣的門戶。
2. **主祀神明**：鄭成功（延平郡王），這裡被視為他「乘願歸來」守護台灣的重要地點。
3. **特色建築**：最著名的是「赤腳門神」。門神是荷蘭人（洋人）形象，因為鄭成功打敗荷蘭人，所以由荷蘭人服侍。他們赤腳是因為當時畫師認為洋人鞋子難畫或是一種懲罰的趣味解釋，後來信徒不忍門神赤腳，還會供奉鞋子給他們。
4. **乘願歸來**：這是一個核心概念，象徵鄭成功不只是歷史人物，其精神（願力）跨越時空回到這裡，繼續庇佑這片土地。
5. **地理位置**：位於台南市安南區，鄰近出海口，夕陽非常美麗。

回答規則：
- 如果使用者問及歷史，請用講故事的方式敘述。
- 如果使用者問及運勢或求籤，請溫和地建議他們親自到廟裡參拜，心誠則靈，並給予正面的鼓勵語句。
- 保持回答精簡但資訊豐富，不要長篇大論到讓人疲乏。
`;

// Initialize the client
// NOTE: Process.env.API_KEY is guaranteed to be available in this environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  history: Message[],
  newMessage: string
): Promise<string> => {
  try {
    // Create a chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: TEMPLE_SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly creative for storytelling
        maxOutputTokens: 500, // Keep answers concise
      },
      // Convert our app's message history to Gemini's format if needed,
      // but for simplicity in this stateless service, we rely on the prompt context 
      // or just send the new message in a single turn for this demo structure
      // to avoid managing complex history synchronization. 
      // However, to support context, we can map the history.
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "抱歉，神靈目前正在休息，請稍後再試。（無法取得回應）";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "網路連線似乎有些不穩，請檢查您的連線或稍後再試。";
  }
};