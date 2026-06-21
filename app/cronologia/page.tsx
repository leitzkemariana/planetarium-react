import Menu from "../components/menu"
import PontoCronologico from "../components/PontoCronologico";

export default function Cronologia(){
    return(
        <div>
            <Menu/>
            <main className="p-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 leading-tight">Linha do Tempo</h1>
                <h2 className="text-gray-200">Principais Marcos da Exploração Espacial</h2>
                <PontoCronologico ano={1957} titulo="Sputnik 1 - URSS " texto="O primeiro satélite artificial."/>
                <img className="h-60 w-120 object-contain" src={"https://upload.wikimedia.org/wikipedia/commons/b/be/Sputnik_asm.jpg"}/>
                <PontoCronologico ano={1957} titulo="Sputnik 2 - URSS " texto="Levava a bordo a cadela Laika, primeiro ser vivo a orbitar a Terra."/>
                <img className="ml-15 h-60 w-120 object-contain" src={"https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Laika_%28cadela%29.jpg/330px-Laika_%28cadela%29.jpg"}/>
                <PontoCronologico ano={1959} titulo="Luna 1 - URSS " texto="Primeira nave a passar pela Lua. Descobriu o vento solar e está agora em órbita solar."/>
                <PontoCronologico ano={1959} titulo="Luna 2 - URSS " texto="Primeira nave espacial a atingir a superfície lunar."/>
                <PontoCronologico ano={1961} titulo="Vostok 1 - URSS " texto="Levava a bordo Iuri Alexeievitch Gagarin, primeiro ser humano a viajar pelo espaço, em 12 de abril de 1961."/>
                <PontoCronologico ano={1962} titulo="Mariner 2 - EUA " texto="Em 14 de Dezembro de 1962, chegou a uma distância de 34,800 quilômetros de Vênus e percorreu a superfície com radiômetro de infravermelho e de microondas, obtendo dados que mostram que a superfície de Vênus tem uma temperatura de cerca de 425°C (800°F)."/>
                <PontoCronologico ano={1965} titulo="Mariner 4 - EUA " texto="Chegou a Marte em 14 de Julho de 1965 e passou a 9,920 quilômetros da superfície do planeta. Enviou 22 fotos de perto que mostram uma superfície de crateras. Confirmou-se que a fina atmosfera é composta de dióxido de carbono na ordem dos 5-10 bar. Foi detectado um pequeno campo magnético intrínseco."/>
                <img className="ml-25 h-60 w-120 object-contain" src={"https://astrobiology.nasa.gov/uploads/filer_public_thumbnails/filer_public/51/9d/519d62e6-7ef5-4e17-822a-7fec2315e906/mariner-4_image2.jpg__1240x510_q85_crop_subject_location-578%2C336_subsampling-2.jpg"}/>
                <PontoCronologico ano={1967} titulo="Venera 4 - URSS " texto="Chegou a Vênus em 18 de Outubro de 1967. Foi a primeira sonda a ser colocada diretamente na atmosfera e a enviar de volta informações sobre ela. Mostrou que a atmosfera tem 90 a 95% de dióxido de carbono. A temperatura à superfície era de 500°C e a pressão de 75 bar. Foi esmagada pela pressão atmosférica em Vênus antes de atingir a superfície."/>
                <PontoCronologico ano={1968} titulo="Apollo 8 - EUA " texto="A tripulação efetuou o primeiro voo tripulado de passagem pela Lua e regresso a Terra."/>
                <PontoCronologico ano={1969} titulo="Apollo 11 - EUA " texto="A Apollo 11 foi a primeira tripulada a pousar na Lua, o que ocorreu em 20 de Julho de 1969."/>
                <img className="h-60 w-120 object-contain" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Apollo_11_Crew.jpg/330px-Apollo_11_Crew.jpg"}/>
                <PontoCronologico ano={1970} titulo="Venera 7 - URSS " texto="Chegou a Vênus em 15 de Dezembro de 1970 e foi a primeira nave a pousar com sucesso em outro planeta."/>
                <PontoCronologico ano={1972} titulo="Pioneer 10 - EUA " texto="Passou a 132,250 quilômetros dos topos das nuvens de Júpiter. Enviou mais de 500 imagens de Júpiter e das suas luas. O maior feito da Pioneer 10 foi a obtenção de dados sobre o campo magnético de Júpiter, as partículas carregadas e a interacção com o vento solar."/>
                <PontoCronologico ano={1976} titulo="Viking 1 e 2 10 - EUA " texto="Ambos os módulos tinham prevista a pesquisa de micro-organismos marcianos. Os resultados destas pesquisas ainda estão em debate. Os módulos de pouso forneceram vistas panorâmicas coloridas detalhadas do terreno marciano. Também monitorizaram o tempo marciano."/>
                <img className="ml-20 h-60 w-120 object-contain" src={"https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/sagan_viking.jpg?mtime=1753481893"}/>
                <PontoCronologico ano={1977} titulo="Voyager 1 e 2 10 - EUA " texto="Voo de Passagem por Júpiter/Saturno/Úrano/Netuno."/>
                <PontoCronologico ano={1990} titulo="Telescópio Espacial Hubble - EUA e Europa" texto="Enviou imagens em alta resolução de Marte e dos outros planetas exteriores do Sistema Solar. Em Julho de 1994, fotografou a colisão do Cometa Shoemaker-Levy 9 com Júpiter."/>
                <img className="ml-5 h-60 w-120 object-contain" src={"https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg"}/>
                <PontoCronologico ano={1997} titulo="Cassini/Huygens - EUA e Europa" texto="O objetivo do orbital era a exploração de todo o sistema saturniano - o próprio planeta, a sua atmosfera, anéis e magnetosfera, e algumas das suas luas (Titan e os satélites gelados)."/>
                
            </main>
        </div>
    );
}