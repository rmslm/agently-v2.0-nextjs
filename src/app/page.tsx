import Navbar from "@/components/global.tsx/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Navbar />
    </main> 
  );
}
