import Menu from "../components/menu";
import PostEsquerda from "../components/PostLayoutEsquerda";
import PostDireita from "../components/PostLayoutDireita";

export default function Gasosos(){
    return (
        <div>
            <Menu/>
            <main className="p-10">
                <PostEsquerda urlImagem={"https://png.pngtree.com/png-vector/20240923/ourmid/pngtree-jupiter-planet-image-on-white-background-png-image_13888640.png"} 
                titulo={"JÚPITER"}
                texto={"Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto."} 
                dados = {"gravidade: 24,79 m/s²\n massa: 1,898 × 10^27 kg\n duração do dia: 9h 56m\n período orbital: 12 anos\n raio: 69.911 km\n\n luas: 95 luas, as maiores são Io, Europa, Ganímedes e Calisto"}/>

                <br/>

                <PostDireita urlImagem={"https://static.vecteezy.com/system/resources/thumbnails/043/576/202/small/saturn-planet-on-isolated-transparent-background-png.png"} 
                titulo={"SATURNO"}
                texto={"Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar. É um gigante gasoso famoso pelo seu complexo e brilhante sistema de anéis formados por gelo e poeira. O planeta possui um núcleo denso e uma atmosfera de hidrogênio e hélio."} 
                dados = {"gravidade: 10,44 m/s²\n massa: 5,683 × 10^26 kg\n duração do dia: 10h 34m\n período orbital: 29 anos\n raio: 58.232 km\n\n luas: 274 luas, as mais conhecidas são Titã, Encélado, Jápetu, Reia e Mimas"}/>

                <br/>

                <PostEsquerda urlImagem={"https://static.vecteezy.com/system/resources/thumbnails/049/514/932/small/a-detailed-view-of-the-planet-uranus-showcasing-its-distinctive-blue-color-and-atmospheric-bands-captured-from-space-transparent-png.png"}
                titulo={"URANO"}
                texto={"Urano ou Úrano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano."}
                dados={"gravidade: 8,69 m/s²\n massa: 8,681 × 10^25 kg\n duração do dia: 17h 14m\n período orbital: 84 anos\n\n luas: 27 luas conhecidas, as principais luas são Miranda, Ariel, Umbriel, Titânia e Oberon"}/>

                <br/>

                <PostDireita urlImagem={"https://static.vecteezy.com/system/resources/thumbnails/065/984/880/small/neptune-planet-space-isolated-on-transparent-background-png.png"}
                titulo={"NETUNO"}
                texto={"Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão em 2006."}
                dados={"gravidade: 11,15 m/s²\n duração do dia: 16h 6m\n período orbital: 165 anos\n\n luas: 27 luas, as principais são: Tritão, Proteu, Nereida e Hipocampo"}/>
            </main>
        </div>
  );
}