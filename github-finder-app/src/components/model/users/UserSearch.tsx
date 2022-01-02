import { ChangeEvent, FormEvent, useState, useContext } from "react";
import GithubContext from "@/context/github/GithubContext";
import { GithubReducerActionTypes } from "@/context/github/GithubReducer";
import { searchUsers } from "@/lib/axios/github/GitHubAction";

const { setLoad, getUsers, clearUsers } = GithubReducerActionTypes;

export const UserSearch = () => {
  const [userSearchText, setUserSearchText] = useState("");
  const { state, dispatch } = useContext(GithubContext);
  const { users } = state;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setUserSearchText(e.target.value);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userSearchText) {
      dispatch({ type: setLoad });
      const searchResultUsers = await searchUsers(userSearchText);
      dispatch({
        type: getUsers,
        payload: {
          users: searchResultUsers,
        },
      });
      setUserSearchText("");
    }
  };

  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-200 pr-40 input input-lg text-black"
                placeholder="ユーザー名を入力"
                value={userSearchText}
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-36 rounded-l-none btn btn-lg"
              >
                検索
              </button>
            </div>
          </div>
        </form>
      </div>
      {users!.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: clearUsers })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
