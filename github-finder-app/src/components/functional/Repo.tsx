import { RepoType } from "@/entities/user";

export const Repo = ({ repo }: { repo: RepoType }) => {
  return (
    <div className="mb-2 card bg-cyan-400 hover:bg-cyan-500">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-bold">
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
        <p className="mb-3">{repo.description}</p>
        <div>
          <div className="badge badge-info badge-lg bg-cyan-900 text-white mr-2">
            <h2>Watchers:</h2>
            {repo.watchers_count}
          </div>
          <div className="badge badge-info badge-lg bg-cyan-900 text-white">
            <h2>Forks:</h2>
            {repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
};
