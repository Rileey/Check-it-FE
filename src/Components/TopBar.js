import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom"
import {useContext} from "react"
import styles from "../stylesheets/topbar.module.css";
import {AuthContext} from "../context/AuthContext"

export default function TopBar() {

    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

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
                <Link to={'/profiles/'+ user.name}>
                    <img src={ user.profilePicture ? PF + user.profilePicture : PF + "pill.jpg"} alt="" className={styles.topbarImg} />
                </Link>
            </div>
        </div>
    )
}