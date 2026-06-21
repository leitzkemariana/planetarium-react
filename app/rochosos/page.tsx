import Menu from "../components/menu";
import PostEsquerda from "../components/PostLayoutEsquerda";
import PostDireita from "../components/PostLayoutDireita";

export default function Gasosos(){
    return (
        <div>
            <Menu/>
            <main className="p-10">
                <PostEsquerda urlImagem={"https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-mercury-planet-png-image_5683897.png"} 
                titulo={"MERCÚRIO"}
                texto={"Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."} 
                dados = {"gravidade: 3,7 m/s²\n massa: 3,285 × 10^23 kg\n período orbital: 88 dias\n raio: 2.439,7 km"}/>

                <br/>

                <PostDireita urlImagem={"https://png.pngtree.com/png-vector/20240718/ourmid/pngtree-beautiful-venus-planet-on-transparent-png-image_13144099.png"} 
                titulo={"VÊNUS"}
                texto={"Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."} 
                dados = {"gravidade: 8,87 m/s²\n massa: 4,867 × 10^24 kg\n duração do dia: 10h 34m\n período orbital: 225 dias\n raio: 6.051,8 km"}/>

                <br/>

                <PostEsquerda urlImagem={"https://upload.wikimedia.org/wikipedia/commons/f/f5/Terra.png"}
                titulo={"TERRA"}
                texto={"Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul."}
                dados={"gravidade: 9,807 m/s²\n massa: 5,972 × 10^24 kg\n duração do dia: 24h\n período orbital: 365 dias \n\n luas: Lua"}/>

                <br/>

                <PostDireita urlImagem={"https://static.vecteezy.com/system/resources/thumbnails/009/381/516/small/red-moon-for-halloween-design-elements-free-png.png"}
                titulo={"MARTE"}
                texto={"Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar, atrás apenas de Mercúrio. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o 'Planeta Vermelho', porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada."}
                dados={"gravidade: 3,73 m/s²\n duração do dia: 1d 0h 36m\n período orbital: 687 dias \n\n luas: Fobos e Deimos"}/>
            </main>
        </div>
  );
}