import styles from"../stylesheets/rightbar.module.css";
import {Users} from "../dummyData"
import Online from "./Online";

export default function RightBar({profile}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const  HomeRightBar = () => {
        return(
            <>
                <div className={styles.rightbarAdContainer}>
                    <img className={styles.rightbarAd} src="assets/ad.jpg" alt="" />
                </div>
                <h4 className={styles.rightbarTitle}>Communities</h4>
                <ul className={styles.rightbarCommunities}>
                   {Users.map(u=>(
                       <Online key={u.id} user={u}/>
                   ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
        <>
            <h4 className={styles.rightBarTitle}>User Information</h4>
            <div className={styles.rightBarInfo}>
               <div className={styles.rightBarInfoItem}>
                   <span className={styles.rightBarInfoKey}>State:</span>
                   <span className={styles.rightBarInfoValue}>Lagos</span>
               </div>
               <div className={styles.rightBarInfoItem}>
                   <span className={styles.rightBarInfoKey}>From:</span>
                   <span className={styles.rightBarInfoValue}>Abeokuta</span>
               </div>      
            </div>
            <h4 className={styles.rightbarTitle}>Communities</h4>
            <div className={styles.rightBarFollowings}>
                <div className={styles.rightBarFollowing}>
                    <img src={`${PF}profilepic7.jpg`} alt="" className={styles.rightBarFollowingImg} />
                    <span className={styles.rightBarFollowingName}>Deola Owolabi</span>
                </div>
                <div className={styles.rightBarFollowing}>
                    <img src={`${PF}profilepic7.jpg`} alt="" className={styles.rightBarFollowingImg} />
                    <span className={styles.rightBarFollowingName}>Deola Owolabi</span>
                </div>
                <div className={styles.rightBarFollowing}>
                    <img src={`${PF}profilepic7.jpg`} alt="" className={styles.rightBarFollowingImg} />
                    <span className={styles.rightBarFollowingName}>Deola Owolabi</span>
                </div>
                <div className={styles.rightBarFollowing}>
                    <img src={`${PF}profilepic7.jpg`} alt="" className={styles.rightBarFollowingImg} />
                    <span className={styles.rightBarFollowingName}>Deola Owolabi</span>
                </div>
                <div className={styles.rightBarFollowing}>
                    <img src={`${PF}profilepic7.jpg`} alt="" className={styles.rightBarFollowingImg} />
                    <span className={styles.rightBarFollowingName}>Deola Owolabi</span>
                </div>
                <div className={styles.rightBarFollowing}>
                    <img src={`${PF}profilepic7.jpg`} alt="" className={styles.rightBarFollowingImg} />
                    <span className={styles.rightBarFollowingName}>Deola Owolabi</span>
                </div>
            </div>
        </>)
    }
    return (
        <div className={styles.rightbar}>
            <div className={styles.rightbarWrapper}>
                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
} 