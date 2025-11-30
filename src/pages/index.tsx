import { Inter } from "next/font/google";

import { useState } from "react";
import TestImage from "@/assets/TestImage.jpg";
import Link from "next/link";
import { DayProps } from "@/domain/DayProps";

const inter = Inter({ subsets: ["latin"] });

const dummydata: DayProps[] = [
  {
    imageUrl: TestImage.src,

    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  {
    imageUrl: TestImage.src,

    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  {
    imageUrl: TestImage.src,

    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  {
    imageUrl: TestImage.src,

    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  {
    imageUrl: TestImage.src,

    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  {
    imageUrl: TestImage.src,

    text: "Lorem ipsum trallalalala",
  },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
  { imageUrl: TestImage.src },
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

  // // TODO: change to 11
  // if (currentMonth !== 10) {
  //   return <p>Please wait... the elves are building your advents-calendar.</p>;
  // }

  console.log(currentMonth);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 ${inter.className}`}
    >
      <h1>Adventskalender 2023</h1>
      <p>Hier solltest du eigentlich nicht sein</p>
      <Link href="/calendar/anke">Zu Ankes Adventskalender</Link>
      <Link href="/calendar/moni">Zu Monis Adventskalender</Link>
    </main>
  );
}
