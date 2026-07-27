// 新品发布组件

import "./index.css" //使用外部样式
import styled from "styled-components"; //使用css-in-js方案
import styles from "./product.module.css" //使用模块化样式


interface StyledProductContainerProps {
    $transition?: string;
    $scale?: number
}

// 整个盒子的组件
const StyledProductContainer = styled.div<StyledProductContainerProps>`
    max-width: 28rem;
    position: relative;
    transition: transform ${(props) => props.$transition || "0.1s"} ease-in-out;

    &:hover {
        transform: scale(${(props) => props.$scale || 1});
        cursor: pointer;
    }
`

interface StyledProductTextContainerProps {
    $textColor?: string
}

// 内部的文字的组件
const StyledProductTextContainer = styled.div<StyledProductTextContainerProps>`
    position: absolute;
    top: 1.5rem;
    padding-left: 1.5rem;
    padding-top: 2rem;
    color: ${(props) => props.$textColor || "#000"};
    font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
`

export type NewArrivalProps = {
    image: string;
    title: string;
    detail: string;
    textColor?: string;
    scale?: number;
    onProductClick: (title: string) => void;
};

export default function NewArrival({...props}: NewArrivalProps) {

    const {
        image,
        title,
        detail,
        textColor,
        scale = 1.05,
        onProductClick
    } = props;
    // product.title = "hah" 不可修改

    // 使用内部样式--图片样式
    const imgStyle = {
        height: "auto",
        width: "100%",
        borderRadius: "0.5rem",
    }
    return (
        <>
            {/*外部容器 使用模块化样式*/}
            {/*<div style={{maxWidth: "28rem", position: "relative"}}>*/}
            {/*    <img src={ipadPro} alt="iPad Pro" style={imgStyle}/>*/}
            {/*    <div className={styles.productTextContainer}>*/}
            {/*        <div className={styles["product-title"]}>iPad Pro</div>*/}
            {/*        <div className={"product-detail"}>磅礴的薄 RMB 9999 起</div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*使用style component方式*/}
            <StyledProductContainer $scale={scale} $transition={"0.5s"} onClick={() => onProductClick("haha")}>
                <img src={image} alt="iPad Pro" style={imgStyle} title={"hah"}/>
                <StyledProductTextContainer $textColor={textColor}>
                    <div className={styles["product-title"]}>{title}</div>
                    <div className={"product-detail"}>{detail}</div>
                </StyledProductTextContainer>
            </StyledProductContainer>
        </>
    );
}
