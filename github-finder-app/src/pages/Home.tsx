import { UserSearch } from "@/components/model/users/UserSearch";
import { UserResult } from "@/components/model/users/UserResult";

export const Home = () => {
  return (
    <>
      <UserSearch />
      <UserResult />
    </>
  );
};
