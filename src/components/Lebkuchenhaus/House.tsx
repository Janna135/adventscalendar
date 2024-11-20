import { createSections } from "@/util/createSections";
import { Stockwerk } from "./Stockwerk";
import { Tile } from "../Tile";
import { DayProps } from "@/domain/DayProps";
import styles from "./Lebkuchen.module.css";
import { SugarBorder } from "./SugarBorder";
import { useEffect, useState } from "react";
import { ImageOverlay } from "../ImageOverlay";

export const LebkuchenHouse: React.FC<{ data: DayProps[] }> = ({ data }) => {
  const sectionMap = createSections(data.map((e, i) => ({ ...e, day: i + 1 })));
  const currentDay = new Date().getDate();

  const [selectedImage, setSelectedImage] = useState<DayProps | undefined>(
    undefined
  );

  const [starsInitialized, setStarsInitialized] = useState(false);

  const initializeStars = () => {
    const starWrap = document.querySelector("#starWrap");
    if (!starWrap) {
      return;
    }
    const { innerWidth } = window;

    const randmoize = () => {
      return Math.floor(Math.random() * innerWidth);
    };

    const len = window.innerWidth / 2;
    for (let i = 0; i < len; i++) {
      const star = document.createElement("div");
      star.className = styles.star;
      starWrap.appendChild(star);
      const rand = randmoize();
      const rand2 = randmoize();
      star.style.top = Math.floor(Math.random() * innerWidth) + "px";
      star.style.left = rand2 + "px";
      star.style.animationDelay = rand - innerWidth + "s";
    }
  };

  useEffect(() => {
    // if (!starsInitialized) initializeStars();
  }, [starsInitialized]);

  return (
    <div id="starWrap">
      {selectedImage ? (
        <ImageOverlay
          dayProps={selectedImage}
          onClose={() => setSelectedImage(undefined)}
        />
      ) : null}
      <div className="w-[80%] mx-auto pt-10">
        <div className={styles.roof}>
          <SugarBorder length={8} />
        </div>
        {sectionMap.map((items, i) => (
          <Stockwerk amountSugar={11 + i} key={"stockwerk-" + i}>
            {items.map((item, index) => {
              const isAvailable = item.day! <= currentDay;
              return (
                <Tile
                  key={"tile-" + i + index}
                  title={`${item.day}`}
                  backgroundColor={
                    isAvailable ? "bg-orange-300" : "bg-indigo-950"
                  }
                  onClick={() => {
                    setSelectedImage(item);
                  }}
                  isAvailable={isAvailable}
                />
              );
            })}
          </Stockwerk>
        ))}
      </div>
      <div className="bg-white h-10"></div>
    </div>
  );
};
