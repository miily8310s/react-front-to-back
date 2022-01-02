import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-8">Oops!</h1>
          <p className="text-4xl mb-8">404 - ページが見つかりません!</p>
          <Link to="/" className="btn btn-lg">
            ホームページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};
