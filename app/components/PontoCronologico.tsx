interface PontoProps {
    ano: number;
    titulo: string;
    texto: string;
}

function PontoCronologico({ano, titulo, texto}: PontoProps) {    
    return (
        <div className="flex items-center gap-4">
            <h1 className="text-white font-bold text-4xl">{ano}</h1>
            <div className="">
                <br/>
                <h1 className="text-gray-600 font-bold text-2xl">{titulo}</h1>
                <hr/>
                <p className="text-gray-100">{texto}</p>
                <br/>
            </div>
        </div>
    );
}

export default PontoCronologico;