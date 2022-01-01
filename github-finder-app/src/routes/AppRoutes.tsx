import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { NotFound } from "@/pages/NotFound";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  // TODO: page層の作成
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    // { path: "/user/:login", element: <User /> },
    { path: "/notFound", element: <NotFound /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <>{element}</>;
};
