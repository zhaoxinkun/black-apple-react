// App 项目的根组件
import router from "@/router";
import { RouterProvider } from "react-router";


export default function App() {
  return <RouterProvider router={router}></RouterProvider>;

  // <Routes>
  //   <Route
  //     path="/"
  //     element={<MainLayout header={<Header/>} footer={<Footer/>}/>}
  //   >
  //     {/* 这里的 Outlet 用于渲染嵌套路由的内容 */}
  //     <Route index element={<Home/>}/>
  //     <Route path="/about" element={<About/>}/>
  //     <Route path="/computers" element={<Computers/>}/>
  //     <Route path="/ipad" element={<IPad/>}/>
  //     <Route path="/entertainment" element={<Entertainment/>}/>
  //     <Route path="/support" element={<Support/>}/>
  //     <Route path="/smarthome" element={<SmartHome/>}/>
  //     <Route path="/phones" element={<Phones/>}/>
  //   </Route>
  //   <Route element={<BlankLayout/>} path="/auth">
  //     <Route path="signin" element={<SignIn/>}/>
  //     <Route path="register" element={<Register/>}/>
  //   </Route>
  // </Routes>
}
