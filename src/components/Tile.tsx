import clsx from "clsx";
import styles from "./Tile.module.css";

interface Props {
  title: string;
  backgroundColor: string;
  onClick: () => void;
}

export const Tile: React.FC<Props> = ({ title, backgroundColor, onClick}) => {
  return <div className={clsx(styles.tile, backgroundColor)} onClick={() => onClick()}>
    <p>{title}</p>
  </div>
}