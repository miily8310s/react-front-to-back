import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Oops!</h1>
          <p>404 - Page Not Found!</p>
          <Link to="/">ホームページに戻る</Link>
        </div>
      </div>
    </div>
  );
};
