import { Configuration, OpenAIApi } from "openai";



const chatgpt = async (req:any, res:any) => {
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

const getReply = (message:string) => {
  return "Hello";
};

export default chatgpt;
