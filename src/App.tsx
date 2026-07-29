// App 项目的根组件

import BlankLayout from "@/layouts/BlankLayout.tsx";
import MainLayout from "@/layouts/MainLayout.js";
import Home from "@/pages/Home.js";
import Footer from "@components/Main/Footer.js";
import Header from "@components/Main/Header.js";
import {Routes, Route} from "react-router";
import {
    About,
    Computers,
    IPad,
    Entertainment,
    Support,
    Phones,
    SmartHome, SignIn, Register,
} from "./pages";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainLayout header={<Header/>} footer={<Footer/>}/>}
            >
                {/* 这里的 Outlet 用于渲染嵌套路由的内容 */}
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/computers" element={<Computers/>}/>
                <Route path="/ipad" element={<IPad/>}/>
                <Route path="/entertainment" element={<Entertainment/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/smarthome" element={<SmartHome/>}/>
                <Route path="/phones" element={<Phones/>}/>
            </Route>
            <Route element={<BlankLayout/>} path="/auth">
                <Route path="signin" element={<SignIn/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>
        </Routes>
    )
}
