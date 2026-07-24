const ReleaseNote = () => (
    <div>
        <h1>新产品发布日期：2199年1月1日</h1>
        <h2>请耐心等待</h2>
    </div>
)

const ProductNotFound = () => (
    <div>
        <h1>产品未发布</h1>
        <h2>请耐心等待</h2>
    </div>
);
const ListTitle = ({title}) => (
    <div style={{display: "flex", justifyContent: "center"}}>
        <h1
            style={{
                fontWeight: "800",
                backgroundImage: "url('src/assets/lines.png')",
                backgroundPosition: "center",
            }}
        >
            {title || "新品上市"}
        </h1>
    </div>
);

export default function ProductList({title, dataLength, children}) {

    const isReleased = new Date() <= new Date("2199-07-08")

    // 使用if做提早return方案
    if (!isReleased) {
        return <ReleaseNote/>
    }
    if (dataLength.length <= 0) {
        return <ProductNotFound/>
    }

    return (
        <>
            <div style={{
                display: "grid",
                justifyItems: "center",
                rowGap: "3rem"
            }}>
                <ListTitle title={title}/>
                {/*单个组件使用*/}
                {/*<NewArrival product={product} OnProductOnclick={handleProductOnclick}/>*/}
                {/*<NewArrival product={product2}/>*/}

                {/*循环遍历*/}
                {/*{*/}
                {/*    data.map((p) => {*/}
                {/*        return <NewArrival product={p} OnProductOnclick={handleProductOnclick} key={p.title}/>*/}
                {/*    })*/}
                {/*}*/}


                {/*插槽*/}


                {
                    children
                }
            </div>
        </>
    )
}
