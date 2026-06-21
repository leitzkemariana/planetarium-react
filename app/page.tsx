import Image from "next/image";
import Menu from "./components/menu";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <Menu/> 
      <main className="flex justify-center w-full max-w-3xl flex-col justify-center p-10 bg-white dark:bg-black">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 leading-tight">Planetarium</h1>
        <h2>Guia dos planetas do sistema</h2>
      </main>
    </div>
  );
}