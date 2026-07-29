import type {ComponentType} from "react";
import type {SoldOutProps} from "./withSoldOut";

export default function withBanner<P extends object>(
    WrappedComponent: ComponentType<P & SoldOutProps>,
    text: string,
) {
    return ({soldOut, ...props}: P & SoldOutProps) => {
        if (!soldOut) {
            return <WrappedComponent {...props as P} soldOut={soldOut}/>;
        }

        return (
            <div style={{position: "relative", display: "inline-block"}}>
                <WrappedComponent {...props as P} soldOut={soldOut}/>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotate(-15deg)",
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        fontStyle: "italic",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "red",
                    }}
                >
                    {text}
                </div>
            </div>
        )
    }
}
