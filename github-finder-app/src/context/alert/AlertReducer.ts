// FIXME: 型定義
const AlertReducer = (state: any, action: any) => {
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
