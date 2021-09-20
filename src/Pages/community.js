import Feed from "../Components/Feed";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import baseUrl from "../utils/BaseUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import styles from "../stylesheets/profile.module.css"

export default function Community() {
    const [community, setCommunity] = useState({});
    const name = useParams().name;

    useEffect(() => {
        const fetchCommunity = async () =>{
        const res = await axios.get(`${baseUrl}/api/community?name=name`)
        setCommunity(res.data.community)
        }
        fetchCommunity();
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
                        src={community.coverPicture ? PF + community.coverPicture : PF+"portal.jpg"} 
                        alt="" />
                        <img 
                        className={styles.profileUserImg} 
                        src={community.profilePicture ? PF + community.profilePicture : PF+"pill.jpg"} 
                        alt="" />
                    </div>
                    <div className={styles.profileInfo}>
                        <h2 className={styles.profileInfoName}>{community.name}</h2>
                        <span className={styles.profileInfoDesription}>{community.description}</span>
                    </div>
                </div>
                <div className={styles.profileRightBottom}>
                    <Feed name={name}/>
                </div>
            </div>
        </div>
    </>    
    )
}