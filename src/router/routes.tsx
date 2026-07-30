import RequireAuth from "@/hoc/RequireAuth.tsx";
import UserLayout from "@/layouts/UserLayout.tsx";
import {
  About,
  Computer,
  IPad,
  Entertainment,
  Support,
  IPhone,
  SmartHome, SignIn, Register, NotFound, ErrorPage, SearchResults, UserCenter,
} from "@/pages";
import Home from "@/pages/home/Home.tsx";
import Footer from "@components/layoutCom/Footer.tsx";
import Header from "@components/layoutCom/Header.tsx";
import BlankLayout from "@/layouts/BlankLayout.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import ProductDetail from "@components/Product/ProductDetail.tsx";

const routes = [{
  // 根路由,使用主页面布局
  path: "/",
  element: <MainLayout header={<Header/>} footer={<Footer/>}/>,
  // outlet显示的东西
  children: [
    {
      index: true, // 默认子路由
      element: <Home/>,
    },
    { path: "about", element: <About/>, errorElement: <ErrorPage/> },
    { path: "computer", element: <Computer/>, errorElement: <ErrorPage/> },
    { path: "iPad", element: <IPad/>, errorElement: <ErrorPage/> },
    { path: "entertainment", element: <Entertainment/>, errorElement: <ErrorPage/> },
    { path: "support", element: <Support/>, errorElement: <ErrorPage/> },
    { path: "smartHome", element: <SmartHome/>, errorElement: <ErrorPage/> },
    { path: "phone", element: <IPhone/>, errorElement: <ErrorPage/> },
    // params参数
    {
      path: "product-detail/:id", // product-detail/123
      element: <ProductDetail/>,
      errorElement: <ErrorPage/>,
    },
    // searchParams参数
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
      { path: "login", element: <SignIn/> },
      { path: "register", element: <Register/> },
    ],
  },
  {
    path: "/user",
    element: (
      <RequireAuth>
        <UserLayout/>
      </RequireAuth>
    ),
    children: [{ path: "", element: <UserCenter/> }],
  },

];

export default routes;