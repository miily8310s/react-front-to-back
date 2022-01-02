type StatType = "followers" | "following" | "public_repos" | "public_gists";

const statTypes = {
  followers: "Followers",
  following: "Following",
  public_repos: "Public Repos",
  public_gists: "Public Gists",
} as const;

export const Stat = ({
  statType,
  userStat,
}: {
  statType: StatType;
  userStat: string | number;
}) => {
  return (
    <div className="stat">
      <div className="stat-title pr-5">{statTypes[statType]}</div>
      <div className="stat-value pr-5 text-3xl md:text-4xl">{userStat}</div>
    </div>
  );
};
