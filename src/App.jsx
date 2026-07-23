import {NEW_ARRIVALS_LIST} from "@/assets/data/index.js";
import ProductList from "@components/Product/ProductList.jsx";

export default function App() {
    return (
        <>
            <ProductList data={NEW_ARRIVALS_LIST}/>
        </>
    )
}
