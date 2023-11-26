import { Inter } from "next/font/google";
import { Tile } from "@/components/Tile";
import { useState } from "react";
import { ImageOverlay } from "@/components/ImageOverlay";
import TestImage from "@/assets/TestImage.jpg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export interface DayProps {
  imageUrl: string;
  backgroundColor: string;
  text?: string;
}

const dummydata: DayProps[] = [
  {
    imageUrl: TestImage.src,
    backgroundColor: "bg-primary",
    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src, backgroundColor: "bg-secondary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-tertiary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-quartiary" },
  {
    imageUrl: TestImage.src,
    backgroundColor: "bg-primary",
    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src, backgroundColor: "bg-secondary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-tertiary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-quartiary" },
  {
    imageUrl: TestImage.src,
    backgroundColor: "bg-primary",
    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src, backgroundColor: "bg-secondary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-tertiary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-quartiary" },
  {
    imageUrl: TestImage.src,
    backgroundColor: "bg-primary",
    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src, backgroundColor: "bg-secondary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-tertiary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-quartiary" },
  {
    imageUrl: TestImage.src,
    backgroundColor: "bg-primary",
    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src, backgroundColor: "bg-secondary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-tertiary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-quartiary" },
  {
    imageUrl: TestImage.src,
    backgroundColor: "bg-primary",
    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src, backgroundColor: "bg-secondary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-tertiary" },
  { imageUrl: TestImage.src, backgroundColor: "bg-quartiary" },
];

{
  /* <a href="https://www.flaticon.com/free-icons/gift" title="gift icons">Gift icons created by amonrat rungreangfangsai - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/gift" title="gift icons">Gift icons created by Stockio - Flaticon</a> */
}
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<DayProps | undefined>(
    undefined
  );

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();

  // TODO: change to 11
  if (currentMonth !== 10) {
    return <p>Please wait... the elves are building your advents-calendar.</p>;
  }

  console.log(currentMonth);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 ${inter.className}`}
    >
      <h1>Adventskalender 2023</h1>
      <p>Hier solltest du eigentlich nicht sein</p>
      <Link href="/anke">Zu Ankes Adventskalender</Link>
      <Link href="/moni">Zu Monis Adventskalender</Link>
    </main>
  );
}
