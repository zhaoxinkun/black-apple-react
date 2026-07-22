import Product from "@components/Product/Product";
import {product} from "@/assets/data"

export default function App() {
    return (
        <>
            <h1> Hello React !</h1>
            <Product product={{
                title: product.title,
                detail: product.detail,
                img: product.img,
                textColor: product.textColor,
            }}/>
        </>
    );
}
