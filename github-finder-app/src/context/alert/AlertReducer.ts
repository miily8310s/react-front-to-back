import { ValueOf } from "@/utils/typesUtils";

const AlertReducerActionTypes = {
  set: "SET_ALERT",
  remove: "REMOVE_ALERT",
} as const;

export interface AlertReducerState {
  msg: string;
  type: string;
}
interface AlertReducerAction {
  type: ValueOf<typeof AlertReducerActionTypes>;
  payload?: {
    msg: string;
    type: string;
  };
}

// FIXME: 型定義
const AlertReducer = (state: any, action: AlertReducerAction) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default AlertReducer;
