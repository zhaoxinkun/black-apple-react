// App 项目的根组件
import {NEW_ARRIVALS_LIST, OFFER_LIST} from "@/assets/data/index.js";
import Offer from "@components/Offer/Offer.jsx";
import NewArrival from "@components/Product/NewArrival.jsx";
import ProductList from "@components/Product/ProductList.jsx";

export default function App() {
    return (
        <>
            <ProductList
                title={"上新品, 各个添新意"}
                dataLength={NEW_ARRIVALS_LIST.length}>
                {/*插槽内容*/}
                {
                    NEW_ARRIVALS_LIST.map((item) => (
                        <NewArrival key={item.title} product={item} scale={1.05}/>
                    ))
                }
            </ProductList>

            <ProductList
                title={"限时折扣，买到就是赚到。"}
                dataLength={OFFER_LIST.length}>
                {
                    OFFER_LIST.map((item) => (
                        <Offer key={item.title} {...item} scale={1.05}/>
                    ))
                }
            </ProductList>
        </>
    )
}
