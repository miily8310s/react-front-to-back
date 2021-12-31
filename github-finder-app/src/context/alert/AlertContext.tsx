import { createContext, useReducer } from "react";
import AlertReducer, {
  AlertReducerState,
  AlertReducerActionTypes,
} from "./AlertReducer";

interface AlertProviderProps {
  children: React.ReactNode;
}

const AlertContext = createContext(
  {} as {
    alert: AlertReducerState;
    setAlert: (msg: string, type: string) => void;
  }
);

export const AlertProvider = (children: AlertProviderProps) => {
  const initialState = {} as AlertReducerState;
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: AlertReducerActionTypes.set,
      payload: { msg, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: AlertReducerActionTypes.remove,
          payload: { msg: "", type: "" },
        }),
      3000
    );
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
