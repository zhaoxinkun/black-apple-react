import NavItems from "@components/layoutCom/NavItems.tsx";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Logo_image from "@/assets/apple.svg?react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import DarkToggle from "@components/DarkToggle";

export default function Header() {

  // 控制折叠导航
  const [isOpen, setIsOpen] = useState(false);

  // 控制搜索框
  const [isSearchEnable, setIsSearchEnable] = useState(false);

  // 搜索关键词
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (query.trim()) {
        navigate(`/search?query=${encodeURIComponent(query)}`);
        setQuery("");
      }
    }
  };

  return (
    <nav
      className="h-16 sticky top-0 z-50 flex items-center justify-between px-4 shadow-apple-md"
    >

      {/*图标区域*/}
      <Link to="/">
        <Logo_image className={"w-6 h-6 hover:scale-105 transition-transform dark:fill-white"}/>
      </Link>

      {/*PC端导航栏区域*/}
      <div className="gap-6 hidden md:flex mx-auto ">
        <NavItems/>
      </div>


      {/*搜索框*/}
      {
        isSearchEnable && (
          <div className="relative">
            <input type="text"
                   className="peer border border-apple-gray-200 px-4 py-2 w-64 rounded-lg"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   onKeyDown={handleKeyDown}
            />
            <label
              className="absolute left-0 mt-2 px-4 peer-focus:text-xs  peer-focus:-top-2 peer-focus:text-apple-bluetransition">
              搜索
            </label>
          </div>
        )
      }

      {/*手机导航区域*/}
      {isOpen && (
        <>
          {/*遮罩层*/}
          <button
            type="button"
            aria-label="关闭导航菜单"
            className="md:hidden fixed inset-0 top-16 bg-apple-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          {/*菜单*/}
          <div className="md:hidden  fixed top-16 right-0 w-64 p-4">
            <div
              className="flex flex-col text-center p-6 space-y-6 rounded-lg shadow-apple-md bg-background text-foreground"
            >
              <NavItems onItemClick={() => setIsOpen(false)} direction="column"/>
            </div>
          </div>
        </>
      )}


      {/*功能区域*/}
      <div className="gap-2 space-x-2">
        {/*搜索按钮*/}
        <button type="button" onClick={() => setIsSearchEnable(!isSearchEnable)}><IoSearchOutline
          size={24}/>
        </button>

        {/*暗黑按钮*/}
        <DarkToggle/>

        {/*折叠按钮*/}
        <button type="button" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu
            size={24}/>
        </button>
      </div>

    </nav>
  );
}
