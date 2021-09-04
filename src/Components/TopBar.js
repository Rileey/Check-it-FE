import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom"

import styles from "../stylesheets/topbar.module.css";

export default function TopBar() {
    return(
        <div className={styles.topbarContainer}>
            <div className={styles.topbarLeft}>
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className={styles.logo}>Check-It</span>
                </Link>
            </div>
            <div className={styles.topbarCenter}>
                <div className={styles.searchBar}>
                    <Search className={styles.searchIcon} />
                    <input className={styles.searchInput} placeholder="Search for anything..."/>                </div>
            </div>
            <div className={styles.topbarRight}>
                <div className={styles.topbarLinks}>
                    <span className={styles.topbarLink}>Homepage</span>
                    <span className={styles.topbarLink}>Timeline</span>
                </div>
                <div className={styles.topbarIcons}>
                    <div className={styles.topbarIconItem}>
                        <Person />
                        <span className={styles.topbarIconBadge}>1</span>    
                    </div>
                    <div className={styles.topbarIconItem}>
                        <Chat />
                        <span className={styles.topbarIconBadge}>2</span>    
                    </div>
                    <div className={styles.topbarIconItem}>
                        <Notifications />
                        <span className={styles.topbarIconBadge}>1</span>    
                    </div>
                </div>
                <img src="/assets/girl.jpg" alt="" className={styles.topbarImg} />
            </div>
        </div>
    )
}