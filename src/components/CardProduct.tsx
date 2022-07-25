interface CardInterface{
    img: string
}

export const CardProduct = (props: CardInterface) =>{
    return(
        <div className="flex items-center flex-col w-[220px]">
            <img src={props.img} width={200} alt="Product image" className="w-full object-cover h-[210px]" />
            <div className="bg-gray-100 flex flex-col gap-4 w-full  p-4">
                <span>Clubmaster Optics</span>
                <span>R$ 200</span>
                <span className="hover:text-gray-600 cursor-pointer transition-colors">Comprar</span>
            </div>

        </div>
    )
}