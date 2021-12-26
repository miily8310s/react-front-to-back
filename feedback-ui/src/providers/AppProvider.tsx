import { BrowserRouter as Router } from "react-router-dom";
import { FeedbackProvider } from "./feedback/FeedbackProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <FeedbackProvider>
      <Router>{children}</Router>
    </FeedbackProvider>
  );
};
