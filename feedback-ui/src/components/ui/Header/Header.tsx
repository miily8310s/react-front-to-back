import styles from "./Header.module.scss";

interface HeaderPropsType {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

export const Header = ({
  text = "Feedback UI",
  bgColor = "rgba(0,0,0,0.4)",
  textColor = "#ff6a95",
}: HeaderPropsType) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header className={styles.headerContainer} style={headerStyles}>
      <div>
        <h2>{text}</h2>
      </div>
    </header>
  );
};
