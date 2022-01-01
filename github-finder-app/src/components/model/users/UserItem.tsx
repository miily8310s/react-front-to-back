import { User } from "@/entities/users";
import { Link } from "react-router-dom";

interface UserItemProps {
  user: User;
}

export const UserItem = ({ user }: UserItemProps) => {
  return (
    <div className="card shadow-md compact side bg-accent-focus">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt={`${user.login}Profile`} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link to={`/user/${user.login}`} className=" text-base-content">
            ユーザーの詳細を見る
          </Link>
        </div>
      </div>
    </div>
  );
};
