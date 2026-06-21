import Link from "next/link";

function Menu() {
    return (
        <header className="flex space-x-10 p-4 bg-sky-950 text-gray-500 font-bold">
            <Link className= "hover:text-gray-200" href="/">Home</Link>
            <Link className= "hover:text-gray-200" href="/rochosos">Planetas Rochosos</Link>
            <Link className= "hover:text-gray-200" href="/gasosos">Planetas Gasosos</Link>
            <Link className= "hover:text-gray-200" href="/cronologia">Linha do Tempo</Link>
        </header>
    );
}

export default Menu;