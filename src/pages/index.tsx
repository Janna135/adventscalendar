import { Inter } from 'next/font/google'
import { Tile } from '@/components/Tile';
import { useState } from 'react';
import { ImageOverlay } from '@/components/ImageOverlay';
import TestImage from "@/assets/TestImage.jpg";

const inter = Inter({ subsets: ['latin'] })



export interface DayProps {imageUrl: string; backgroundColor: string;text?:string}

const dummydata: DayProps[] = [
  {imageUrl: TestImage.src, backgroundColor: "bg-primary", text:"Lorem ipsum trallalalala"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary", text:"Lorem ipsum trallalalala"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary", text:"Lorem ipsum trallalalala"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-secondary"},
  {imageUrl: TestImage.src, backgroundColor: "bg-primary"}
];

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<DayProps | undefined>(undefined);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 ${inter.className}`}
    >
      <h1 className="mb-4">Monis toller Adventskalender</h1>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-2'>
        {dummydata.map((tile, i) => <Tile onClick={() => setSelectedImage(tile)} backgroundColor={tile.backgroundColor} title={`${i + 1}`} key={'tile-'+i }/>)}
      </div>
      {selectedImage ? <ImageOverlay dayProps={selectedImage} onClose={() => setSelectedImage(undefined)} number={1}/>: null}
    </main>
  )
}
