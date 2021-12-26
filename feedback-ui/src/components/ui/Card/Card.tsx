import styles from "./Card.module.scss";

interface CardPropsType {
  children: React.ReactNode;
  reverse?: boolean;
}

export const Card = ({ reverse = false, children }: CardPropsType) => {
  const cardStyles = {
    backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
    color: reverse ? "#fff" : "#000",
  };
  return (
    <div className={styles.card} style={cardStyles}>
      {children}
    </div>
  );
};
