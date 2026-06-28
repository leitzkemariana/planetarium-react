import Image from "next/image";
import Menu from "./components/menu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans bg-black">
      <Menu/> 
      <main className="p-10">
        <h1 className="text-5xl font-bold tracking-tight text-gray-700 leading-tight text-center">Planetarium</h1>
        <h2 className="text-center text-gray-200">Guia dos Planetas do Sistema Solar</h2>
        <div className="flex justify-center">
          <img src={"https://iconape.com/wp-content/png_logo_vector/galaxy.png"}></img>
        </div>
        
        <hr/>
        <h1 className="text-3xl font-bold tracking-tight text-gray-200 leading-tight text-left">Conheça: </h1>
        <br/>

        <div className="flex items-center gap-4">
          <Link className= "text-2xl text-gray-200 hover:text-gray-700 font-bold" href="/rochosos">Planetas Rochosos</Link>
          <p className="text-gray-200"> Os planetas rochosos são os astros do Sistema Solar mais próximos do Sol: Mercúrio, Vênus, Terra e Marte. Eles são formados predominantemente por rochas e metais pesados, possuem superfície sólida, alta densidade, tamanho menor e atmosferas mais finas em comparação aos gigantes gasosos.</p>
        </div>

        <br/>
        <div className="flex items-center gap-4"> 
          <Link className= "text-2xl text-gray-200 hover:text-gray-700 font-bold" href="/gasosos">Planetas Gasosos</Link>
          <p className="text-gray-200"> Os planetas gasosos são os astros localizados nas órbitas mais distantes do Sistema Solar: Júpiter, Saturno, Urano e Netuno. São os maiores corpos do Sistema Solar e apresentam superfície formada por gases. Eles realizam movimentos circulares muito rápidos em torno de um núcleo sólido e denso.</p>
        </div>

        <br/>
        <div className="flex items-center gap-4">
          <Link className= "text-2xl text-gray-200 hover:text-gray-700 font-bold" href="/cronologia">Linha do Tempo</Link>
          <p className="text-gray-200"> Nesta página, você encontrará uma cronologia dos principais marcos da exploração espacial do Sistema Solar, desde o lançamento dos primeiros satélites e sondas até as missões espaciais que abriram caminho para novas fronteiras.</p>
        </div>

      </main>
    </div>
  );
}
