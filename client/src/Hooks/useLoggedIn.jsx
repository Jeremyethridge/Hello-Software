import { createContext, useContext, useState } from "react";

export const LoggedStatus = createContext(null);

export function useLoggedIn() {
  return useContext(LoggedStatus);
}

export function LoggedProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoggedStatus.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </LoggedStatus.Provider>
  );
}
