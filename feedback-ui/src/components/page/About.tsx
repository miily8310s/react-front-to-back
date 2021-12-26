import { Card } from "@/components/ui/Card";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>このプロジェクトについて</h1>
        <p>これはReactで作成したフィードバックアプリです</p>
        <p>
          <Link to="/">ホームに戻る</Link>
        </p>
      </div>
    </Card>
  );
};
