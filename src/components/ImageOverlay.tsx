import { DayProps } from "@/pages";
import Image from "next/image";
import styles from "./ImageOverlay.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";
interface Props {
  dayProps: DayProps;
  onClose: () => void;
}

export const ImageOverlay: React.FC<Props> = ({ dayProps, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsClosing(false);
  }, []);

  return (
    <div
      className={clsx(
        styles.imageOverlay,
        isClosing && styles.imageOverlayClose,
        !isClosing && styles.imageOverlayOpen
      )}
    >
      <div
        onClick={() => {
          setIsClosing(true);
          setTimeout(() => onClose(), 300);
        }}
        className={styles.back}
      >
        <p>Zurück</p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentImage}>
          <Image
            src={dayProps.imageUrl}
            alt=""
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="mt-4 md:text-lg text-center">{dayProps.text}</p>
      </div>

      <a href={dayProps.imageUrl} download className={styles.download}>
        download here
      </a>
    </div>
  );
};
