// App 项目的根组件

import MainLayout from "@/layouts/MainLayout.jsx";
import Home from "@/pages/home/Home.jsx";
import Footer from "@components/Footer.jsx";
import Header from "@components/Header.jsx";

export default function App() {
    return (
        <>
            <MainLayout header={<Header/>} content={<Home/>} footer={<Footer/>}/>
        </>
    )
}
