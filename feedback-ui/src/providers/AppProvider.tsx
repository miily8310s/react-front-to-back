import { BrowserRouter as Router } from "react-router-dom";
import { FeedbackProvider } from "@/providers/feedback/FeedbackProvider";
import { Header } from "@/components/ui/Header";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <FeedbackProvider>
      <Header />
      <Router>{children}</Router>
    </FeedbackProvider>
  );
};
