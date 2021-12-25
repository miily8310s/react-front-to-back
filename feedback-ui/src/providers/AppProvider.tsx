import { BrowserRouter as Router } from "react-router-dom";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <Router>{children}</Router>;
};
