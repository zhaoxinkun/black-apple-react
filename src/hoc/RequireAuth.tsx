import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

interface RequireAuthProps {
  children: ReactNode;
}

// 接收一个node节点
const RequireAuth = ({ children }: RequireAuthProps) => {
  // 查看当前位置
  const location = useLocation();
  // 查看token
  const token = localStorage.getItem("token");
  if (!token) {
    // 如果没有 token，重定向到登录页面，并携带当前路径作为“来源页”
    return (
      <Navigate to="/auth/signin" state={{ from: location.pathname }} replace/>
    );
  }
  // 如果有 token，渲染子组件
  return children;
};

export default RequireAuth;
