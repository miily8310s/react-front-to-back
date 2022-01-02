import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserLayout } from "@/components/model/user/UserLayout";
import { Spinner } from "@/components/ui/Spinner";
import GithubContext from "@/context/github/GithubContext";
import { GithubReducerActionTypes } from "@/context/github/GithubReducer";
import { getUserAndRepos } from "@/lib/axios/github/GitHubAction";

export const User = () => {
  const { state, dispatch } = useContext(GithubContext);
  const { login } = useParams();
  const { setLoad, getUser } = GithubReducerActionTypes;
  const { loading, user, repos } = state;

  useEffect(() => {
    dispatch({ type: setLoad });
    (async () => {
      const userData = await getUserAndRepos(login!);
      dispatch({ type: getUser, payload: userData });
    })();
  }, [getUser, setLoad, dispatch, login]);

  if (loading) {
    return <Spinner />;
  }
  return <UserLayout user={user!} repos={repos!}></UserLayout>;
};
