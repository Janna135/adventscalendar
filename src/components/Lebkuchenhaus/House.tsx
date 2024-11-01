import { createSections } from "@/util/createSections";
import { Stockwerk } from "./Stockwerk";
import { Tile } from "../Tile";
import { DayProps } from "@/domain/DayProps";
import styles from "./Lebkuchen.module.css";
import { SugarBorder } from "./SugarBorder";

export const LebkuchenHouse: React.FC<{ data: DayProps[] }> = ({ data }) => {
  const sectionMap = createSections(data.map((e, i) => ({ ...e, day: i + 1 })));
  const currentDay = new Date().getDate();

  return (
    <>
      <div className="w-[80%] mx-auto pt-10">
        <div className={styles.roof}>
          <SugarBorder length={8} />
        </div>
        {sectionMap.map((items, i) => (
          <Stockwerk amountSugar={11 + i}>
            {items.map((item, i) => {
              const isAvailable = item.day! <= currentDay;
              return (
                <Tile
                  title={`${item.day}`}
                  backgroundColor={
                    isAvailable ? "bg-orange-300" : "bg-indigo-950"
                  }
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  isAvailable={isAvailable}
                />
              );
            })}
          </Stockwerk>
        ))}
      </div>
      <div className="bg-white h-10"></div>
    </>
  );
};
