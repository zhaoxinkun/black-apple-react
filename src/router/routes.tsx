import {
  About,
  Computers,
  IPad,
  Entertainment,
  Support,
  Phones,
  SmartHome, SignIn, Register,
} from "../pages";
import Home from "@/pages/Home.js";
import Footer from "@components/Main/Footer.js";
import Header from "@components/Main/Header.js";
import BlankLayout from "@/layouts/BlankLayout.tsx";
import MainLayout from "@/layouts/MainLayout.js";

const routes = [{
  path: "/",
  element: <MainLayout header={<Header/>} footer={<Footer/>}/>,
  children: [
    {
      index: true, // 默认子路由
      element: <Home/>,
    },
    { path: "about", element: <About/> },
    { path: "computers", element: <Computers/> },
    { path: "ipad", element: <IPad/> },
    { path: "entertainment", element: <Entertainment/> },
    { path: "support", element: <Support/> },
    { path: "smarthome", element: <SmartHome/> },
    { path: "phones", element: <Phones/> },
  ],
},
  // 用户权限目录“/auth”
  {
    path: "/auth",
    element: <BlankLayout/>,
    children: [
      { path: "signin", element: <SignIn/> },
      { path: "register", element: <Register/> },
    ],
  }];

export default routes;