// 促销组件

// {
//     type: "限时折扣",
//     title: "春季大促销",
//     detail: "全场满100减20",
//     image: "spring-sale.png"
// }

import styles from './Offer.module.css'

export default function Offer({type, title, detail, image}) {
    return (
        <div className={styles.container}>
            <img src={image} alt="image" className={styles.image}/>
            <div className={styles.content}>
                <div className={styles.type}>{type}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.detail}>{detail}</div>
            </div>
        </div>
    )
}
