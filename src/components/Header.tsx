import { Bars3Icon } from "@heroicons/react/16/solid"

type PropsHeader = {
    toggleDrawer: (newOpen: boolean) => void
    scrollToSection: (sectionId:string) => void
}

export default function Header({ toggleDrawer, scrollToSection }: PropsHeader) {

    return (
        <header className="text-white flex justify-between sm:justify-around items-center p-3 _header fixed w-full z-10 bg-black">
            <h1 className="text-3xl font-semibold">
                Gabriel <span className="text-green-700">Silva</span>
            </h1>
            <div className="hidden sm:flex items-center space-x-5">
                <button onClick={() => scrollToSection("inicio")}>Início</button>
                <button onClick={() => scrollToSection("habilidades")}>Habilidades</button>
                <button onClick={() => scrollToSection("projetos")}>Projetos</button>
            </div>
            <button className="sm:hidden" onClick={() => toggleDrawer(true)}>
                <Bars3Icon className="w-[30px]"/>
            </button>
        </header>
    )
}