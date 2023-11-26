import { Inter } from "next/font/google";
import { Tile } from "@/components/Tile";
import { useState } from "react";
import { ImageOverlay } from "@/components/ImageOverlay";
import { contentMoni } from "@/const/contentMoni";
const inter = Inter({ subsets: ["latin"] });

export interface DayProps {
  imageUrl: string;
  backgroundColor: string;
  text?: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<DayProps | undefined>(
    undefined
  );

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();

  if (currentMonth !== 11) {
    return <p>Please wait... the elves are building your advents-calendar.</p>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 ${inter.className}`}
    >
      <div className="w-full md:w-4/5">
        <h2 className="text-center text-xl text-primary mb-2">
          Dear Moni and Glenn,
        </h2>
        <br></br>

        <p className="text-center text-2xl text-primary mb-8 px-4">
          we wish you a wonderful time until christmas! Every day, starting with
          the 1st of december, a new tile will be unlocked and we can share a
          memory from the last 12 months with you.
          <br></br>
          <br></br>
          Your family from Germany
        </p>
      </div>
      <hr className="h-1 bg-primary mb-8 w-4/5" />

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-auto gap-2">
        {contentMoni.map((tile, i) => (
          <Tile
            onClick={() => setSelectedImage(tile)}
            backgroundColor={tile.backgroundColor}
            title={`${i + 1}`}
            key={"tile-" + i}
            isAvailable={i + 1 <= currentDay}
          />
        ))}
      </div>
      {selectedImage ? (
        <ImageOverlay
          dayProps={selectedImage}
          onClose={() => setSelectedImage(undefined)}
        />
      ) : null}

      <p>Icons from</p>
      <a href="https://www.flaticon.com/free-icons/gift" title="gift icons">
        Gift icons created by amonrat rungreangfangsai - Flaticon
      </a>

      <a href="https://www.flaticon.com/free-icons/gift" title="gift icons">
        Gift icons created by Stockio - Flaticon
      </a>
    </main>
  );
}
