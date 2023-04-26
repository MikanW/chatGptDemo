import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatgpt = async (req: any, res: any) => {
  const { message } = req.body;
  console.log("api call");
  console.log(process.env.OPENAI_API_KEY);
  if (!message) {
    res.status(400).json({ error: "Message is required." });
    return;
  }
  const reply = await getReply(message);
  res.status(200).json({ reply });
  return;
};

const getReply = async (message: string) => {
  console.log(getReply);
  const completion = await openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello world" }],
    },
    {
      proxy: {
        host: "127.0.0.1",
        port: 7890,
      },
    }
  );
  return completion.data.choices[0].message;
};

export default chatgpt;
