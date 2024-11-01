import styles from "./Lebkuchen.module.css";

export const SugarBorder: React.FC<{ length: number }> = ({ length }) => {
  return (
    <div className={styles.sugarborder}>
      {Array.from(new Array(length), (_, i) => (
        <div className={styles.sugarblob} key={Math.random() + i}></div>
      ))}
    </div>
  );
};
