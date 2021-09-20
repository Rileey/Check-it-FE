import styles from"../stylesheets/rightbar.module.css";
import {Users} from "../dummyData"
import Online from "./Online";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import baseUrl from "../utils/BaseUrl";
import {AuthContext} from "../context/AuthContext"



export default function RightBar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    // const { user: currentUser } = useContext(AuthContext);
    const { user, dispatch } = useContext(AuthContext)
    const  [followed, setFollowed] = useState(user.following.includes(user?.id))
    const [community, setCommunity] = useState([])

    useEffect(() => {
        setFollowed(user.following.includes(user?.id))
    }, [user, user.id])

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get(baseUrl + "/api/profiles/friends/" + profile._id  );
                //   + profile._id                
                
                setFriends(friendList.data);
            } catch (err) {
                console.log(err)
            }
        }
        getFriends();
    }, []);


    useEffect(() => {
        const getCommunity = async () => {
            try {
                const commList = await axios.get(baseUrl + "/api/communities");       
                setCommunity(commList.data.data);
            } catch (err) {
                console.log(err)
            }
        }
        getCommunity();
    }, [ ]);


    const handleClick = async () => {
        try {
            if ( followed ) {
                await axios.put(baseUrl + "/api/profiles/"+ user._id +"/unfollow", {
                    profileId: user._id,
                })
                dispatch({type: "UNFOLLOW", payload: user._id})
            } else {
                await axios.put(baseUrl + "/api/profiles/"+ user._id +"/follow", {
                    profileId: user._id
                })
                dispatch({type: "FOLLOW", payload: user._id})
            }
        } catch (err) {
            console.log(err)
        }
        setFollowed(!followed) 
    }

    const  HomeRightBar = () => {
        return(
            <>
                <div className={styles.rightbarAdContainer}>
                    <img className={styles.rightbarAd} src="assets/ad.jpg" alt="" />
                </div>
                <h4 className={styles.rightbarTitle} style={{color: "white"}}>Communities</h4>
                <ul className={styles.rightbarCommunities}>
                   {community.map(comm=>(
                            <Online key={comm.id} user={comm}/>
                   ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
        <>
            
                <button className={styles.righbarFollowButton} onClick={handleClick}>
                    {followed ? "Unfollow" : "Follow"}
                </button>
                                   
            <h4 className={styles.rightBarTitle}>User Information</h4>
            <div className={styles.rightBarInfo}>
               <div className={styles.rightBarInfoItem}>
                   <span className={styles.rightBarInfoKey}>Location:</span>
                   <span className={styles.rightBarInfoValue}>{profile.city}</span>
               </div>
               <div className={styles.rightBarInfoItem}>
                   <span className={styles.rightBarInfoKey}>Relationship:</span>
                   <span className={styles.rightBarInfoValue}>{profile.relationship===1 
                   ? "Single" : profile.relationship===2 
                   ? "In a relationship" 
                   : "It's complicated"}</span>
               </div>      
            </div>
            <h4 className={styles.rightbarTitle} style={{color: "white"}}>Friends</h4>
            <div className={styles.rightBarFollowings}>
            {friends.map(friend => (
                <Link to={"/profiles/"+friend.name} style= {{textDecoration : "none"}}>
                <div className={styles.rightBarFollowing}>
                    <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "pill.jpg"} alt="" className={styles.rightBarFollowingImg} />
                    <span className={styles.rightBarFollowingName}>{friend.name}</span>
                </div>
                </Link>
            ))}
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