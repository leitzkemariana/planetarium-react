interface PostProps {
  urlImagem: string;
  titulo: string;
  texto: string;
  dados: string;
}

function PostEsquerda({ urlImagem, titulo, texto, dados }: PostProps) {
    const linhas = dados.split('\n').map((linha, index) => (
        <span key={index}>
            {linha}
            <br />
        </span>
    ));
    
    return (
        <div className="flex items-center gap-4">
            <div className="">
                <h1 className="text-white font-bold text-2xl">{titulo}</h1>
                <hr/><br/>
                <p className="text-gray-100">{texto}</p>
                <br/>
                <p className="max-20-md bg-sky-950 p-5 rounded-lg shadow-md text-gray-200">{linhas}</p>
            </div>
            <img className="h-100 w-200 object-contain" src={urlImagem} alt={titulo}/>
        </div>
    );
}

export default PostEsquerda;