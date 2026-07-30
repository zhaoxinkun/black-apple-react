import Button, { type ButtonProps } from "@components/General/Button";
import React from "react";

// 图标button
export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode; //图标
  iconPosition?: "left" | "right"; //排列
}

export default function IconButton({
                                     icon,
                                     iconPosition = "left",
                                     title,
                                     ...rest
                                   }: IconButtonProps) {
  return (
    <Button
      title={
        <span className="flex items-center gap-2">
                     {iconPosition === "left" && icon}
          <span>{title}</span>
          {iconPosition === "right" && icon}
                </span>
      }
      {...rest}
    />
  );
}