import Feed from "../Components/Feed"
import SideBar from "../Components/SideBar"
import TopBar from "../Components/TopBar"
import RightBar from "../Components/RightBar"

import styles from "../stylesheets/profile.module.css"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return(
        <>
        <TopBar />
        <div className={styles.profile}>
            <SideBar />
            <div className={styles.profileRight}>
                <div className={styles.profileRightTop}>
                    <div className={styles.profileCover}>
                        <img 
                        className={styles.profileCoverImg} 
                        src={`${PF}cover.PNG`} 
                        alt="" />
                        <img 
                        className={styles.profileUserImg} 
                        src={`${PF}profilepic8.jpg`} 
                        alt="" />
                    </div>
                    <div className={styles.profileInfo}>
                        <h2 className={styles.profileInfoName}>Hakeemat Ayinla</h2>
                        <span className={styles.profileInfoDesription}>Here for a good time not a long one</span>
                    </div>
                </div>
                <div className={styles.profileRightBottom}>
                    <Feed />
                    <RightBar profile />
                </div>
            </div>
        </div>
    </>    
    )
}