import { useContext, createContext } from "react";

export const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}
// https://serverless-stack.com/chapters/add-the-session-to-the-state.html
