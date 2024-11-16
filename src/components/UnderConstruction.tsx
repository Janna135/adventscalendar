import Elf from "@/assets/elf.png";
import Image from "next/image";

export const UnderConstruction = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-4">
      <Image src={Elf.src} alt="" width="400" height="400" className="mb-6 " />
      <p className="font-medium text-2xl text-center">
        Dein Adventskalender wird noch von den Elfen bestückt. Bitte komm am
        1.12. wieder vorbei.
      </p>
    </div>
  );
};
