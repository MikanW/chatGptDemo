import { useEffect, useState } from "react";

export const useChatGpt = (message: string) => {
  const [data, setData] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (message: string) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());
      if (response.reply) {
        console.log("Hook api call response", response.reply);
        setData(response.reply.content);
        setRole(response.reply.role);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (message) {
      fetchData(message);
    }
  }, [message]);

  return {
    data,
    role,
    isLoading,
    isError,
  };
};
