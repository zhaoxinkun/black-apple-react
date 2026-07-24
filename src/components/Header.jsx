import {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import {IoSearchOutline} from "react-icons/io5";
import Logo_image from "../assets/apple.svg?react"

export default function Header() {

    // 控制导航栏的展开
    const [isOpen, setIsOpen] = useState(false);

    // 控制搜索框的出现
    const [isSearchEnable, setIsSearchEnable] = useState(false);

    return (
        <nav
            className="flex items-center justify-between px-4 h-16 sticky top-0 z-50 bg-white/70 shadow-md backdrop-blur-md dark:bg-black/90">
            {/*图标区域*/}
            <a href="#" className="text-xl font-bold">
                <Logo_image className={"w-6 h-6 hover:scale-105 transition-transform dark:fill-white"}/>
            </a>

            {/*导航栏区域*/}
            <div className="gap-6 hidden md:flex mx-auto dark:text-white">
                <a href="#">商店</a>
                <a href="#">电脑</a>
                <a href="#">手机</a>
                <a href="#">智能家居</a>
                <a href="#">娱乐</a>
                <a href="#">技术支持</a>
            </div>
            {/*显示搜索框*/}
            {
                isSearchEnable && (
                    <div className="relative">
                        <input
                            className="peer border border-gray-300 px-4 py-2 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition "/>
                        <label
                            className="absolute left-2 top-2
                            peer-focus:-top-2
                            peer-focus:text-xs
                            peer-focus:text-blue-500
                            transition
                            dark:text-white
                            "
                        >
                            搜索
                        </label>
                    </div>
                )
            }
            <div className="gap-2 space-x-2 dark:text-white">
                <button onClick={() => setIsSearchEnable(!isSearchEnable)}><IoSearchOutline size={24}/></button>
                <button className="md:hidden" onClick={() => setIsOpen(true)}><AiOutlineMenu size={24}/></button>
            </div>

            <div className={`md:hidden fixed top-0 right-0 h-full w-64 ${!isOpen && "hidden"}`}>
                <div
                    className="flex flex-col mt-17 space-y-6 bg-white text-center p-6 rounded-lg dark:text-white dark:bg-black/90">
                    <a href="#">商店</a>
                    <a href="#">电脑</a>
                    <a href="#">手机</a>
                    <a href="#">智能家居</a>
                    <a href="#">娱乐</a>
                    <a href="#">技术支持</a>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    )
}
