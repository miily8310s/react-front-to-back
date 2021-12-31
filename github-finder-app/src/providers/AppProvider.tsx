import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { Alert } from "@/components/functional/Alert";
import { AlertProvider } from "@/context/alert";
import { GithubProvider } from "@/context/github";
import { BrowserRouter as Router } from "react-router-dom";
interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <GithubProvider>
      {/* <AlertProvider> */}
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
      {/* </AlertProvider> */}
    </GithubProvider>
  );
};
