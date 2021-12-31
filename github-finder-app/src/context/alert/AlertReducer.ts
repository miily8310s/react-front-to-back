import { ValueOf } from "@/utils/typesUtils";

export const AlertReducerActionTypes = {
  set: "SET_ALERT",
  remove: "REMOVE_ALERT",
} as const;

export interface AlertReducerState {
  msg: string;
  type: string;
}
export interface AlertReducerAction {
  type: ValueOf<typeof AlertReducerActionTypes>;
  payload: {
    msg: string;
    type: string;
  };
}

const AlertReducer = (state: AlertReducerState, action: AlertReducerAction) => {
  switch (action.type) {
    case AlertReducerActionTypes.set:
      return action.payload;
    case AlertReducerActionTypes.remove:
      return {
        ...state,
        msg: "",
        type: "",
      };
    default:
      return state;
  }
};

export default AlertReducer;
