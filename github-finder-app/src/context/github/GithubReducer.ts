import { ValueOf } from "@/utils/typesUtils";
import { User } from "@/entities/users";

export const GithubReducerActionTypes = {
  getUsers: "GET_USERS",
  getUserAndRepos: "GET_USER_AND_REPOS",
  setLoad: "SET_LOADING",
  clearUsers: "CLEAR_USERS",
} as const;

// FIXME: 型定義
export interface GitHubReducerState {
  users?: User[];
  user?: User;
  repos?: object[];
  loading?: boolean;
}
export interface GitHubReducerAction {
  type: ValueOf<typeof GithubReducerActionTypes>;
  payload?: GitHubReducerState;
}

const githubReducer = (
  state: GitHubReducerState,
  action: GitHubReducerAction
) => {
  switch (action.type) {
    case GithubReducerActionTypes.getUsers:
      return {
        ...state,
        users: action.payload!.users,
        loading: false,
      };
    case GithubReducerActionTypes.getUserAndRepos:
      return {
        ...state,
        user: action.payload!.user,
        repos: action.payload!.repos,
        loading: false,
      };
    case GithubReducerActionTypes.setLoad:
      return {
        ...state,
        loading: true,
      };
    case GithubReducerActionTypes.clearUsers:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
