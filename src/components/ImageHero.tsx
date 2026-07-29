import IconButton from "@components/General/IconButton.tsx";
import hero_image from '~img/hero.jpg'
import hero_small_image from "~img/hero_small.jpg"
import {AiOutlineShoppingCart} from "react-icons/ai";
import {MdOutlineNavigateNext} from "react-icons/md";

export default function ImageHero() {
    return (
        // 最外边的容器
        <div className={"relative bg-black text-white mb-2"}>
            {/*响应式图片*/}
            <img src={hero_small_image} alt="" className={"w-full h-120 object-cover block md:hidden"}/>
            <img src={hero_image} alt="" className={"w-full h-120 object-cover hidden md:block"}/>

            {/*文字,按钮区域*/}
            <div className={"absolute inset-4 flex flex-col items-center justify-end p-2 text-center md:justify-start"}>
                <div className={"text-4xl md:text-6xl font-bold"}>iPhone 18 Pro</div>
                <div className={"mt-4 flex space-x-4"}>
                    <IconButton
                        icon={<MdOutlineNavigateNext/>}
                        iconPosition="right"
                        title="进一步了解"
                        variant="primary"
                    />
                    <IconButton
                        icon={<AiOutlineShoppingCart/>}
                        title="购买"
                        variant="outline"
                    />
                    {/*<button*/}
                    {/*    className="px-6 py-2 border border-blue-600 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">*/}
                    {/*    */}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className="px-6 py-2 border border-blue-600 bg-transparent text-white rounded-md hover:bg-blue-700 transition">*/}
                    {/*    购买*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    )
}
