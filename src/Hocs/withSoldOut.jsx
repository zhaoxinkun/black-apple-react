// 高阶组件,判断是否售罄
/**
 *  @param components
 *  @return function
 * */
import styles from "./withSoldOut.module.css";

export default function withSoldOut(WrappedComponent) {
    return ({soldOut, ...props}) => {
        console.log("🚀 ~  ~ soldOut: ", soldOut);
        return soldOut ? (<div className={styles["gray-overlay"]}>
            <WrappedComponent {...props}>{soldOut}</WrappedComponent>
        </div>) : <WrappedComponent {...props}/>;
    }
}
