import { createContext, useReducer } from "react";
import AlertReducer, { AlertReducerState } from "./AlertReducer";

interface AlertContextProps {
  children: React.ReactNode;
}

interface AlertContextType {
  alert: AlertReducerState | null;
  setAlert: (msg: string, type: string) => void;
}

const AlertContext = createContext<AlertContextType>({
  alert: null,
  setAlert: () => {},
});

export const AlertProvider = (children: AlertContextProps) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const setAlert = (msg: string, type: string) => {
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
