import { Spinner } from "@/components/ui/Spinner";
import GithubContext from "@/context/github/GithubContext";
import { useContext } from "react";
import { UserItem } from "./UserItem";

export const UserResult = () => {
  const { state } = useContext(GithubContext);
  const { users, loading } = state;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
