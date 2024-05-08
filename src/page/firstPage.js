import Footer from "../component/footer";
import Sider from "../component/sider";
import Header from "../component/header";
import Main from "../component/main-component";
import styles from "../style/main.module.css";

const FirstPage = function () {
    return (
        <div className={styles.layout}>
            <div className={styles.footer}><Footer></Footer></div>
            <div className={styles.sider}><Sider></Sider></div>
            <div className={styles.main}><Main></Main></div>
            <div className={styles.header}><Header></Header></div>
        </div>
    )
}

export default FirstPage;