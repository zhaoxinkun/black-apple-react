import {NEW_ARRIVALS_LIST, OFFER_LIST, SUGGESTED_PROUDCT} from "@/assets/data/index.js";
import withBanner from "@/Hocs/withBanner.jsx";
import withSoldOut from "@/Hocs/withSoldOut.jsx";
import ImageHero from "@components/ImageHero.jsx";
import Offer from "@components/Offer/Offer.js";
import NewArrival, {type NewArrivalProps} from "@components/Product/NewArrival.js";
import ProductHero from "@components/Product/ProductHero.js";
import ProductList from "@components/Product/ProductList.tsx";

// 使用HOC扩展组件
const NewArrivalWithSoldOutCheck = withSoldOut((props: NewArrivalProps) => {
    const {title} = props
    return <NewArrival {...props} title={title}/>
})

const OfferWithSoldOutCheck = withSoldOut(Offer)


// HOC套娃
const NewArrivalWithBannerSoldOutCheck = withBanner(NewArrivalWithSoldOutCheck, "手慢无")

const NewOfferWithBannerSoldOutCheck = withBanner(OfferWithSoldOutCheck, "已售罄")

export default function Home() {
    return (
        <>
            {/*头部大图*/}
            <ImageHero/>

            {/*产品推荐*/}
            <ProductHero
                product={SUGGESTED_PROUDCT.product}
                imageUrl={SUGGESTED_PROUDCT.imageSrc}
            />

            {/*产品列表*/}
            <ProductList
                title={"上新品, 各个添新意"}
                dataLength={NEW_ARRIVALS_LIST.length}>
                {/*插槽内容*/}
                {
                    NEW_ARRIVALS_LIST.map((item) => (
                        <NewArrivalWithBannerSoldOutCheck soldOut={undefined} key={item.title} {...item} scale={1.05}/>
                    ))
                }
            </ProductList>

            <ProductList
                title={"限时折扣，买到就是赚到。"}
                dataLength={OFFER_LIST.length}>
                {
                    OFFER_LIST.map((item) => (
                        <NewOfferWithBannerSoldOutCheck key={item.title} {...item} scale={1.05}/>
                    ))
                }
            </ProductList>
        </>
    )
}
