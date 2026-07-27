// App 项目的根组件

import MainLayout from "@/layouts/MainLayout.js";
import Home from "@/pages/home/Home.js";
import Footer from "@components/Main/Footer.js";
import Header from "@components/Main/Header.js";

export default function App() {
    return (
        <>
            <MainLayout header={<Header/>} content={<Home/>} footer={<Footer/>}/>
        </>
    )
}
