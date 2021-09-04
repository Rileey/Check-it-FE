import styles from"../stylesheets/online.module.css";

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className={styles.rightbarCommunity}>
        <div className={styles.rightbarProfileImgContainer}>
            <img className={styles.rightbarProfileImg} 
            src={PF+user.profilePicture} 
            alt="" />
           <span className={styles.rightbarOnline}></span> 
        </div>
        <span className={styles.rightbarUsername}>{user.username}</span>
    </li>
    )
}