import styles from "./styles.module.css";

export const ReviewText = ({ text, user, className }) => {
  return (
    <div className={styles.root}>
      <span>{user}:</span>
      <span className={styles.review}>{text}</span>
    </div>
  );
};
