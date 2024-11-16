import { LebkuchenHouse } from "@/components/Lebkuchenhaus/House";
import { contentAnke } from "@/const/contentAnke";

export default function Showcase() {
  return (
    <div className="flex flex-col bg-indigo-950 bg-or">
      <LebkuchenHouse data={contentAnke} />
    </div>
  );
}
