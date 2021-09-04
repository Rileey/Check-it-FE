import Feed from "./Components/Feed"
import SideBar from "./Components/SideBar"
import TopBar from "./Components/TopBar"
import RightBar from "./Components/RightBar"
import styles from "./stylesheets/home.module.css";

export default function Home () {
    return (
        <>
            <TopBar />
            <div className={styles.homeContainer}>
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </>    
    )
}