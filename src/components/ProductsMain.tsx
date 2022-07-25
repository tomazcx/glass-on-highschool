import { CardProduct } from "./CardProduct";

interface ProductsInterface {
    img: string[];
}

export const ProductsMain = (props: ProductsInterface) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 px-12 animate-show-glasses">
            {props.img.map(img => <CardProduct img={img} />)}
        </div>
    )

}