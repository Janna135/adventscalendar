import { DayProps } from "@/pages";
import Image from "next/image";
import styles from "./ImageOverlay.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";
interface Props {
  dayProps: DayProps;
  onClose: () => void;
  number: number;
}

export const ImageOverlay: React.FC<Props> = ({dayProps, onClose, number}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsClosing(false);
  }, [])
  
  return <div className={clsx(styles.imageOverlay, isClosing && styles.imageOverlayClose, !isClosing && styles.imageOverlayOpen)}>
    <div 
      onClick={() => {
      setIsClosing(true);
      setTimeout(() => onClose(), 300);
      }}
      >
      <p>Zurück</p>
    </div>
    <Image src={dayProps.imageUrl} width={300} height={500} alt=""/>
    <p className="mt-4">{number}:{dayProps.text}</p>
  </div>
}