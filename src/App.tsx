// App 项目的根组件
import router from "@/router";
import { RouterProvider } from "react-router";

// 主入口,仅渲染路由
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
