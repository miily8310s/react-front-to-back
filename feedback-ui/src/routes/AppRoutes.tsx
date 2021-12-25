import { useRoutes } from "react-router-dom";
import { About } from "../components/page/About";

export const AppRoutes = () => {
  const element = useRoutes([
    // FIXME: path: / change element
    { path: "/", element: <About /> },
    { path: "/about", element: <About /> },
  ]);
  return <>{element}</>;
};
