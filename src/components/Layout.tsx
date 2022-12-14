import Titulo from "./Titulo"

interface LayoutProps{

    //titulo?: string se eu colocar a interrogação não me obriga a passar o titulo 
    // para o componente
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return(
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-3">
                {props.children}
            </div>
        </div>
    )
}