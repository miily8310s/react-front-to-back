import { Link } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div className="w-full lg:w-10/12 m-auto">
      <div className="mb-4">
        <Link to="/">検索ページに戻る</Link>
      </div>
    </div>
  );
};
