import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

interface AlertContextProps {
  children: React.ReactNode;
}

// FIXME: 型定義
const AlertContext = createContext<any>(null);

export const AlertProvider = (children: AlertContextProps) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  // FIXME: 型定義
  const setAlert = (msg: any, type: any) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
