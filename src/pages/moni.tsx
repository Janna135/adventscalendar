import { contentMoni } from "@/const/contentMoni";
import { LebkuchenHouse } from "@/components/Lebkuchenhaus/House";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Home() {
  const currentMonth = new Date().getMonth();

  if (currentMonth !== 11) {
    return <UnderConstruction />;
  }

  return (
    <main className="flex flex-col bg-indigo-950 bg-or">
      <LebkuchenHouse data={contentMoni} />
    </main>
  );
}
