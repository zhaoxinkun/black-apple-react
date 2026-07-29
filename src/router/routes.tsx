import {
  About,
  Computers,
  IPad,
  Entertainment,
  Support,
  Phones,
  SmartHome, SignIn, Register, NotFound, ErrorPage, SearchResults,
} from "@/pages";
import Home from "@/pages/Home.js";
import Footer from "@components/Layout/Footer.js";
import Header from "@components/Layout/Header.js";
import BlankLayout from "@/layouts/BlankLayout.tsx";
import MainLayout from "@/layouts/MainLayout.js";
import ProductDetail from "@components/Product/ProductDetail.tsx";

const routes = [{
  path: "/",
  element: <MainLayout header={<Header/>} footer={<Footer/>}/>,
  children: [
    {
      index: true, // 默认子路由
      element: <Home/>,
    },
    { path: "about", element: <About/>, errorElement: <ErrorPage/> },
    { path: "computer", element: <Computers/>, errorElement: <ErrorPage/> },
    { path: "ipad", element: <IPad/>, errorElement: <ErrorPage/> },
    { path: "entertainment", element: <Entertainment/>, errorElement: <ErrorPage/> },
    { path: "support", element: <Support/>, errorElement: <ErrorPage/> },
    { path: "smarthome", element: <SmartHome/>, errorElement: <ErrorPage/> },
    { path: "phone", element: <Phones/>, errorElement: <ErrorPage/> },
    {
      path: "product-detail/:id", // product-detail/123
      element: <ProductDetail/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "search",
      element: <SearchResults/>,
      errorElement: <ErrorPage/>,
    },
    { path: "*", element: <NotFound/>, errorElement: <ErrorPage/> },
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