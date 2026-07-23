import Product from "@components/Product/Product.jsx";

export default function ProductList({data}) {
    const handleProductOnclick = (title) => {
        console.log("Product Onclick", title);
    }
    return (
        <>
            <div style={{
                display: "grid",
                justifyItems: "center",
                rowGap: "3rem"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <h1 style={{
                        fontWeight: "800",
                        backgroundImage: "url('src/assets/lines.png')",
                        backgroundPosition: "center"
                    }}> 上新品, 各个添心意</h1>
                </div>
                {/*单个组件使用*/}
                {/*<Product product={product} OnProductOnclick={handleProductOnclick}/>*/}
                {/*<Product product={product2}/>*/}

                {/*循环遍历*/}
                {
                    data.map((p) => {
                        return <Product product={p} OnProductOnclick={handleProductOnclick} key={p.title}/>
                    })
                }
            </div>
        </>
    )
}
