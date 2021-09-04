import styles from "../stylesheets/closefriend.module.css"


export default function CloseFriend({user}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    
    return(
            <li className={styles.sidebarFriend}>
                <img className={styles.friendImg} src={PF+user.profilePicture} alt="" />
                <span className={styles.friendName}>{user.username}</span>
            </li>
    )
}


