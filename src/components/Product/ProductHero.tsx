import type {CartItem, Product} from "#types/custom";
import SkuSelect from "@components/SkuSelect.js";
import {useState} from "react";
import {produce} from "immer"


const updateItem = (updates: Partial<CartItem>) => {
    return produce((draft) => {
        Object.assign(draft, updates)
    })

}

interface ProductHeroProps {
    product: Product;
    imageUrl: string;
}

export default function ProductHero({product, imageUrl}: ProductHeroProps) {

    const [cartItem, setCartItem] = useState<CartItem>({
        productId: product.id,
        name: product.name,
        imageSrc: product.image,
        modelId: null,
        modelPrice: null,
        model: null,
        color: null,
        memorySize: null,
        memorySizeId: null,
        memorySizePrice: null,
        qty: 1,
    });

    return (
        <div
            className="flex flex-col lg:flex-row-reverse
            pt-8 mt-4
            md:pt-28 lg:pt-52
            space-y-4
            text-apple-text-light
            dark:text-apple-text-dark "
        >
            <div className="flex-1 flex justify-center items-center">
                <img src={imageUrl} className="w-[350px] lg:-mt-32 lg:ml-19"/>
            </div>
            <div className="flex-1 space-y-6 ml-6 md:ml-24">
                <div className="text-4xl font-black md:text-6xl">
                    购买 {product.name}
                </div>
                <div className="font-medium md:text-xl">
                    RMB {Number(product.startingPrice).toLocaleString("en-US")}
                </div>
                <div className="flex space-x-3">
                    <SkuSelect
                        placeholder={"型号"}
                        options={product.models.map((model) => model.name)}
                        value={cartItem.model}
                        onChange={(value: string) => {
                            const selectedModel = product.models.find(
                                (model) => model.name === value
                            );
                            if (selectedModel)
                                setCartItem(
                                    updateItem({
                                        model: selectedModel.name,
                                        modelId: selectedModel.id,
                                        modelPrice: selectedModel.price,
                                    })
                                );
                            console.log(cartItem);
                        }}
                    />
                    <SkuSelect
                        placeholder={"颜色"}
                        options={product.colors}
                        value={cartItem.color}
                        onChange={(value: string) => {
                            const selectedMemorySize = product.memorySizes.find(
                                (size) => size.name === value
                            );
                            if (selectedMemorySize)
                                setCartItem(
                                    updateItem({
                                        memorySize: selectedMemorySize.name,
                                        memorySizeId: selectedMemorySize.id,
                                        memorySizePrice: selectedMemorySize.price,
                                    })
                                );
                        }}
                    />
                    <SkuSelect
                        placeholder={"储存容量"}
                        options={product.memorySizes.map((size) => size.name)}
                        value={cartItem.memorySize}
                        onChange={(value: string) => {
                            const selectedMemorySize = product.memorySizes.find(
                                (size) => size.name === value
                            );
                            if (selectedMemorySize)
                                setCartItem(
                                    updateItem({
                                        memorySize: selectedMemorySize.name,
                                        memorySizeId: selectedMemorySize.id,
                                        memorySizePrice: selectedMemorySize.price,
                                    })
                                );
                        }}
                    />
                    <button
                        className="
                        border border-apple-blue
                        px-5 py-2 bg-transparent
                        rounded-md
                        hover:bg-apple-blue
                        hover:text-apple-gray-100"
                        onClick={() => {
                            alert("加入购物车: " + JSON.stringify(cartItem));
                        }}
                    >
                        加入购物车
                    </button>
                </div>
            </div>
        </div>
    );
}
