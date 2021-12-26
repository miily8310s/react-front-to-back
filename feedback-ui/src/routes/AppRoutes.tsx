import { useRoutes } from "react-router-dom";
import { Home } from "@/components/page/Home";
import { About } from "@/components/page/About";

export const AppRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);
  return <>{element}</>;
};
