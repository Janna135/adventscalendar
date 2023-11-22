import clsx from "clsx";
import styles from "./Tile.module.css";
import GiftOpen from "@/assets/gift-box.png";
import GiftClosed from "@/assets/gift.png";
import Image from "next/image"
interface Props {
  title: string;
  backgroundColor: string;
  onClick: () => void;
  isAvailable: boolean;
}

export const Tile: React.FC<Props> = ({ title, backgroundColor, onClick, isAvailable}) => {
  return <div className={clsx(styles.tile, backgroundColor)} onClick={() => onClick()}>
    {isAvailable ? <Image src={GiftOpen.src} alt="" width={80} height={80}/>: <Image src={GiftClosed.src} alt="" width={80} height={80}/>}
    <p>{title}</p>
  </div>
}