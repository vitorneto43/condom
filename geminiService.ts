
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Initializing GoogleGenAI with exactly the required named parameter structure
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMaintenanceAdvice = async (issue: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Como consultor de gestão predial, forneça uma análise rápida e passos recomendados para a seguinte ocorrência: "${issue}". Responda em português, de forma concisa e profissional.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, não consegui processar seu pedido no momento.";
  }
};

export const summarizeFinance = async (records: any[]) => {
  try {
    const dataStr = JSON.stringify(records);
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analise estes registros financeiros de um condomínio e forneça um resumo de 3 pontos principais (ex: maior gasto, saúde financeira, recomendação): ${dataStr}`,
    });
    return response.text;
  } catch (error) {
    return "Análise financeira indisponível.";
  }
};
