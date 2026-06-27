import Image from "next/image";
import Menu from "./components/menu";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans bg-black">
      <Menu/> 
      <main className="p-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 leading-tight text-center">Planetarium</h1>
        <h2 className="text-center text-gray-200">Guia dos planetas do sistema</h2>
      </main>
    </div>
  );
}
