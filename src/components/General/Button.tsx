import React, { type ReactElement } from "react";

// 封装一个button
export interface ButtonProps {
  title?: React.ReactNode; //标题
  variant?: "primary" | "outline"; //边框
  disabled?: boolean; //显示
  onClick?: () => void; //事件
}

export default function Button({
                                 title,
                                 variant = "primary",
                                 disabled = false,
                                 onClick,
                               }: ButtonProps): ReactElement {
  let className = `px-5 py-2 rounded-md border
                   transition-colors duration-200
                   inline-flex items-center justify-center gap-2`;
  if (variant === "primary") {
    className +=
      " bg-apple-blue text-white border-apple-blue hover:bg-apple-blue/90";
  } else if (variant === "outline") {
    className +=
      " bg-transparent text-apple-blue border-apple-blue hover:bg-apple-blue hover:text-white";
  }

  if (disabled) {
    className += " opacity-50 cursor-not-allowed pointer-events-none";
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
}