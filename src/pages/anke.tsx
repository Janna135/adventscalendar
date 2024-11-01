import { Inter } from "next/font/google";
import { Tile } from "@/components/Tile";
import { useState } from "react";
import { ImageOverlay } from "@/components/ImageOverlay";
import { contentAnke } from "@/const/contentAnke";
import { DayProps } from "@/domain/DayProps";
import { LebkuchenHouse } from "@/components/Lebkuchenhaus/House";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<DayProps | undefined>(
    undefined
  );

  const currentDay = new Date().getDate();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 ${inter.className}`}
    >
      <div className="w-full md:w-4/5">
        <h2 className="text-center text-xl text-primary mb-2">
          Liebe Anke, lieber Roland!
        </h2>
        <br></br>

        <p className="text-center text-2xl text-primary mb-8 px-4">
          Wir wünschen euch eine schöne und soweit es geht entspannte
          Vorweihnachtszeit! In diesem digitalen Adventskalender wollen wir ein
          paar Erinnerungen aus dem letzten Jahr mit euch teilen. Bis
          hoffentlich ganz bald!
          <br></br>
          <br></br>
          Elke, Michael, Lasse, Janna und Bene
        </p>
      </div>
      <hr className="h-1 bg-primary mb-8 w-4/5" />

      {/* TODO: add open functionality for images */}
      <LebkuchenHouse data={contentAnke} />

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
