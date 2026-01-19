// import { Configuration, OpenAIApi } from "openai"
// import { OPEN_AI_TOKEN, OPEN_AI_BASEPATH } from "../constants/config"

// export default function openAiInstance(apiKey = OPEN_AI_TOKEN) {
//     const openai_config = new Configuration({
//         apiKey,
//         basePath: OPEN_AI_BASEPATH || undefined
//     })
//     return new OpenAIApi(openai_config)
// }

import { Configuration, OpenAIApi } from "openai";

export default function openAiInstance(apiKey) {
  const openai_config = new Configuration({
    apiKey: apiKey || process.env.OPENAI_API_KEY,
    basePath: process.env.OPENAI_BASEPATH || undefined
  });

  return new OpenAIApi(openai_config);
}
