import React, { ReactNode, useContext, useState } from "react";

interface ContactMenuOpenedContextType {
  isContactMenuOpened: boolean;
  setIsContactMenuOpened: (value: boolean) => void;
}

const ContactMenuOpenedContext =
  React.createContext<ContactMenuOpenedContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const ContactMenuOpenedProvider = ({ children }: Props) => {
  const [isContactMenuOpened, setIsContactMenuOpened] = useState(false);

  const value = {
    isContactMenuOpened,
    setIsContactMenuOpened,
  };

  return (
    <ContactMenuOpenedContext.Provider value={value}>
      {children}
    </ContactMenuOpenedContext.Provider>
  );
};

export const useContactMenuOpenedState = (): ContactMenuOpenedContextType => {
  const context = useContext(ContactMenuOpenedContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(ContactMenuOpenedContext), did you forget to put the provider ?`
    );
  }

  return context;
};

export default ContactMenuOpenedProvider;
