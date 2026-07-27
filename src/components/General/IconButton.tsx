import Button, {type ButtonProps} from "@components/General/Button";
import React from "react";

export interface IconButtonProps extends ButtonProps {
    icon: React.ReactNode;
    iconPosition?: "left" | "right";
}

export default function IconButton({icon, iconPosition = "left", title, ...rest}: IconButtonProps) {
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
    )
}