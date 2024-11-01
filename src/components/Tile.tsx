import clsx from "clsx";
import styles from "./Tile.module.css";

import Window from "@/assets/Window.png";
import Image from "next/image";
interface Props {
  title: string;
  backgroundColor: string;
  onClick: () => void;
  isAvailable: boolean;
}

export const Tile: React.FC<Props> = ({
  title,
  backgroundColor,
  onClick,
  isAvailable,
}) => {
  return (
    <div
      className={clsx(
        styles.tile,
        backgroundColor,
        isAvailable && styles.tileOpen
      )}
      onClick={isAvailable ? () => onClick() : undefined}
    >
      <Image src={Window.src} alt="" fill />

      <p>{title}</p>
    </div>
  );
};
