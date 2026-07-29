// 高阶组件,判断是否售罄
/**
 *  @param components
 *  @return function
 * */
import type { ComponentType } from "react";
import styles from "./withSoldOut.module.css";

export interface SoldOutProps {
  soldOut?: boolean;
}

export default function withSoldOut<P extends object>(WrappedComponent: ComponentType<P>) {
  return ({ soldOut, ...props }: P & SoldOutProps) => {
    return soldOut ? (
      <div className={styles["gray-overlay"]}>
        <WrappedComponent {...props as P}/>
      </div>
    ) : <WrappedComponent {...props as P}/>;
  };
}
