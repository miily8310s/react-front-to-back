import { Stat } from "@/components/functional/Stat";
import { User } from "@/entities/users";
import { Link } from "react-router-dom";
interface UserLayoutProps {
  user: User;
  repos: Array<any>;
}

export const UserLayout = ({ user, repos }: UserLayoutProps) => {
  return (
    <div className="w-full lg:w-10/12 m-auto">
      <div className="mb-4">
        <Link to="/">検索ページに戻る</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
        <div className="card shadow-xl">
          <figure>
            <img src={user.avatar_url} alt={`${user.login}_Profile`} />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title mb-0">{user.login}</h2>
          <p>{user.name}</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="mb-6">
          <h1 className="card-title text-3xl">{user.name}</h1>
          <p>{user.bio}</p>
          <a
            href={user.html_url}
            target="_blank"
            className="btn btn-outline"
            rel="noreferrer"
          >
            GitHubのプロフィールページを見る
          </a>
        </div>
        <div className="w-full shadow-md bg-base-200 stats">
          {user.location && (
            <div className="stat">
              <div className="stat-title text-md">Location</div>
              <div className="text-lg stat-value">{user.location}</div>
            </div>
          )}
          {user.twitter_username && (
            <div className="stat">
              <div className="stat-title text-md">Twitter</div>
              <div className="text-lg stat-value">
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.twitter_username}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats mt-8">
        <Stat statType="following" userStat={user.following} />
        <Stat statType="followers" userStat={user.followers} />
        <Stat statType="public_repos" userStat={user.public_repos} />
        <Stat statType="public_gists" userStat={user.public_gists} />
      </div>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold card-title">最新のレポジトリ</h2>
          {repos.map((repo) => (
            <div>{repo.id}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
