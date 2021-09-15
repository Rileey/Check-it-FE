import Feed from "../Components/Feed"
import SideBar from "../Components/SideBar"
import TopBar from "../Components/TopBar"
import RightBar from "../Components/RightBar"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import styles from "../stylesheets/profile.module.css"

export default function Profile() {
    const [profile, setProfile] = useState({});
    const name = useParams().name;

    useEffect(() => {
        const fetchProfile = async () =>{
        const res = await axios.get(`/profile?name=${name}`)
        setProfile(res.data.profile)
        }
        fetchProfile();
    }, [name]);


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
                        src={profile.coverPicture ? PF + profile.coverPicture : PF+"portal.jpg"} 
                        alt="" />
                        <img 
                        className={styles.profileUserImg} 
                        src={profile.profilePicture ? PF + profile.profilePicture : PF+"pill.jpg"} 
                        alt="" />
                    </div>
                    <div className={styles.profileInfo}>
                        <h2 className={styles.profileInfoName}>{profile.name}</h2>
                        <span className={styles.profileInfoDesription}>{profile.description}</span>
                    </div>
                </div>
                <div className={styles.profileRightBottom}>
                    <Feed name= {name}/>
                    <RightBar profile={profile} />
                </div>
            </div>
        </div>
    </>    
    )
}