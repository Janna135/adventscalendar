import styles from "./Lebkuchen.module.css";
import { SugarBorder } from "./SugarBorder";

export const Stockwerk: React.FC<{
  amountSugar: number;
  children: React.ReactNode;
}> = ({ amountSugar, children }) => {
  return (
    <section className={styles.section}>
      <SugarBorder length={amountSugar} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8">
        {children}
      </div>
    </section>
  );
};
