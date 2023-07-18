import React, { createContext, useMemo, useState } from "react";

interface AppProviderProps {
  children: React.ReactElement;
}

export interface AppContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [token, setToken] = useState("");
  const [userName, setUsername] = useState("");

  const store = useMemo(() => {
    // console.log("Store");
    return {
      token,
      userName,
      setToken,
      setUsername,
    };
  }, [token, setToken, userName, setUsername]);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
