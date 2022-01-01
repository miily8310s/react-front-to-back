import { User } from "@/entities/users";
import { Link } from "react-router-dom";

interface UserItemProps {
  user: User;
}

export const UserItem = ({ user }: UserItemProps) => {
  return (
    <div className="shadow-md">
      <div className="flex-row items-center space-x-4">
        <div>
          <div>
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt={`${user.login}Profile`} />
            </div>
          </div>
        </div>
        <div>
          <h2>{user.login}</h2>
          <Link
            to={`/user/${user.login}`}
            className="text-opacity-40 text-base"
          >
            ユーザーの詳細を見る
          </Link>
        </div>
      </div>
    </div>
  );
};
