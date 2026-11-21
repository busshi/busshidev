import { useIsUserInactive } from "@busshi/react-hooks";
import { isChatLoaded, openChat } from "../lib/chat";
import React, { ReactNode, useContext, useEffect, useState } from "react";

interface ChatVisibleContextType {
  isChatVisible: boolean;
  setIsChatVisible: (value: boolean) => void;
  // Clicked by the visitor (as opposed to the inactivity timer): shows the
  // widget and opens it, instead of just revealing the closed bubble.
  requestChatOpen: () => void;
  isOpenRequested: boolean;
  clearOpenRequest: () => void;
}

const ChatVisibleContext = React.createContext<ChatVisibleContextType | null>(
  null
);

interface Props {
  children: ReactNode;
}

export const ChatVisibleProvider = ({ children }: Props) => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isOpenRequested, setIsOpenRequested] = useState(false);
  const userInactive = useIsUserInactive();

  useEffect(() => {
    userInactive && setIsChatVisible(true);
  }, [userInactive]);

  const requestChatOpen = () => {
    // Widget script already loaded: open it right away. Otherwise load it
    // (isChatVisible) and let Layout open it once the script is ready.
    if (isChatLoaded()) return openChat();
    setIsOpenRequested(true);
    setIsChatVisible(true);
  };

  const value = {
    isChatVisible,
    setIsChatVisible,
    requestChatOpen,
    isOpenRequested,
    clearOpenRequest: () => setIsOpenRequested(false),
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
