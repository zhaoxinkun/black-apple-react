import {NEW_ARRIVALS_LIST, OFFER_LIST} from "@/assets/data/index.js";
import withBanner from "@/Hocs/withBanner.jsx";
import withSoldOut from "@/Hocs/withSoldOut.jsx";
import Offer from "@components/Offer/Offer.jsx";
import NewArrival from "@components/Product/NewArrival.jsx";
import ProductList from "@components/Product/ProductList.jsx";

// 使用HOC扩展组件
const NewArrivalWithSoldOutCheck = withSoldOut((props) => {
    const {title} = props
    return <NewArrival {...props} title={title}/>
})

const OfferWithSoldOutCheck = withSoldOut(Offer)


// HOC套娃
const NewArrivalWithBannerSoldOutCheck = withBanner(NewArrivalWithSoldOutCheck, "手慢无")

export default function Home() {
    return (
        <>
            <ProductList
                title={"上新品, 各个添新意"}
                dataLength={NEW_ARRIVALS_LIST.length}>
                {/*插槽内容*/}
                {
                    NEW_ARRIVALS_LIST.map((item) => (
                        <NewArrivalWithBannerSoldOutCheck key={item.title} {...item} scale={1.05}/>
                    ))
                }
            </ProductList>

            <ProductList
                title={"限时折扣，买到就是赚到。"}
                dataLength={OFFER_LIST.length}>
                {
                    OFFER_LIST.map((item) => (
                        <OfferWithSoldOutCheck key={item.title} {...item} scale={1.05}/>
                    ))
                }
            </ProductList>
        </>
    )
}
