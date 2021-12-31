import { ValueOf } from "@/utils/typesUtils";

const GithubReducerActionTypes = {
  getUsers: "GET_USERS",
  getUserAndRepos: "GET_USER_AND_REPOS",
  setLoad: "SET_LOADING",
  clearUsers: "CLEAR_USERS",
} as const;

// FIXME: 型定義
export interface GitHubReducerState {
  users: object[];
  user: object;
  repos: object[];
  loading: boolean;
}
export interface GitHubReducerAction {
  type: ValueOf<typeof GithubReducerActionTypes>;
  payload: GitHubReducerState;
}

const githubReducer = (
  state: GitHubReducerState,
  action: GitHubReducerAction
) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
