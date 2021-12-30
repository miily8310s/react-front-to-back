import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { AlertProvider } from "@/context/alert";
import { BrowserRouter as Router } from "react-router-dom";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  // TODO: reducer層の準備
  return (
    <AlertProvider>
      <Router>
        <div>
          <Navbar />
          <main>
            {/* <Alert /> */}
            {children}
          </main>
          <Footer />
        </div>
      </Router>
    </AlertProvider>
  );
};
