import { Link } from "react-router-dom";
import styles from "./AboutPageLink.module.scss";

export const AboutPageLink = () => {
  return (
    <div className={styles.aboutPageLink}>
      <Link to="/about">このページについて</Link>
    </div>
  );
};
