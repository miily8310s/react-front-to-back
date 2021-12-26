import { useRoutes } from "react-router-dom";
import { Home } from "@/page/Home";
import { About } from "@/page/About";

export const AppRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);
  return <>{element}</>;
};
