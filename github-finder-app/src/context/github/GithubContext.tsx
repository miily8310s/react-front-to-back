import { User } from "@/entities/users";
import { createContext, useReducer } from "react";
import githubReducer, {
  GitHubReducerState,
  GitHubReducerAction,
} from "./GithubReducer";

const GithubContext = createContext(
  {} as {
    state: GitHubReducerState;
    dispatch: React.Dispatch<GitHubReducerAction>;
  }
);

interface GithubProviderProps {
  children: React.ReactNode;
}

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const initialState: GitHubReducerState = {
    users: [],
    user: {} as User,
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
