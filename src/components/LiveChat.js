import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat?.messages);
  const [liveChatMessage, setLiveChatMesasge] = useState("");
  useEffect(() => {
    //assume API polling happening

    const interval = setInterval(() => {
      dispatch(
        addChatMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-2 border-gray-100  m-4 h-[500px]  bg-gray-50 flex flex-col overflow-y-scroll">
      <div className="p-2">
        {chatMessages.map((chat, index) => (
          <div className="flex m-2" key={index}>
            <img
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="user_logo"
              className="h-8 m-2 "
            />
            <div>
              <h1 className="font-medium">{chat.name}</h1>
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
        <div className="flex m-2">
          <input
            type="text"
            placeholder="Send message"
            className="p-2 border-2 border-gray-400 rounded-lg w-full"
            value={liveChatMessage}
            onChange={(e) => setLiveChatMesasge(e.target.value)}
          />
          <button
            className="bg-gray-300 p-2 rounded-lg ml-1"
            onClick={() => {
              dispatch(
                addChatMessage({
                  name: "Ijas",
                  message: liveChatMessage,
                })
              );
              setLiveChatMesasge("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
