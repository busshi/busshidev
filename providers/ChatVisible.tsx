import React, { ReactNode, useContext, useState } from "react";

interface ChatVisibleContextType {
  isChatVisible: boolean;
  setIsChatVisible: (value: boolean) => void;
}

const ChatVisibleContext = React.createContext<ChatVisibleContextType | null>(
  null
);

interface Props {
  children: ReactNode;
}

export const ChatVisibleProvider = ({ children }: Props) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const value = {
    isChatVisible,
    setIsChatVisible,
  };

  return (
    <ChatVisibleContext.Provider value={value}>
      {children}
    </ChatVisibleContext.Provider>
  );
};

export const useChatVisibleState = (): ChatVisibleContextType => {
  const context = useContext(ChatVisibleContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(ChatVisibleContext), did you forget to put the provider ?`
    );
  }

  return context;
};

export default ChatVisibleProvider;
