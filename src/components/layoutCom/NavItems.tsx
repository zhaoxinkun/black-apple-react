import { SHOPPING_PAGES } from "@/assets/data/path";
import React from "react";
import { NavLink } from "react-router";

interface NavItemProps {
  onItemClick?: () => void;
  direction?: "row" | "column";
}

// 导航栏组件
export default function NavItems({ onItemClick, direction = "row" }: NavItemProps) {
  return (
    <div
      className={
        direction === "row"
          ? "flex items-center gap-6"
          : "flex flex-col gap-6"
      }
    >
      {SHOPPING_PAGES.map(navItem => (
        <NavLink
          key={navItem.id}
          to={navItem.path}
          className={({ isActive }) =>
            `hover:text-apple-blue ${isActive ? "text-apple-blue font-extrabold" : "text-foreground"}`
          }
          onClick={onItemClick}
        >
          {navItem.title}
        </NavLink>
      ))}
    </div>
  );
}
