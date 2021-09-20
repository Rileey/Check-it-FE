/* eslint react/prop-types: 0 */
import { FavoriteOutlined, MoreVert } from "@material-ui/icons";
import styles from "../stylesheets/post.module.css";
// import {Users} from "../dummyData"
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { format } from "timeago.js"; 
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"
import baseUrl from "../utils/BaseUrl"

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [profile, setProfile] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchProfile = async () =>{
        // const res = await axios.get(`${baseUrl}/profile?profileId=${post._creator}`)
        const res = await axios.get(baseUrl + '/api/profile?profileId=' + post._creator)
        setProfile(res.data.profile)
        console.log(res.data.profile)
        }
        fetchProfile();
    }, [post._creator]);


    const likeHandler=()=>{
        try {
            axios.put(baseUrl + '/posts/'+ post._id + '/like', { userId: user._id})
        } catch (err) {
            
        }

        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className={styles.post}>
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <Link to={`profiles/${profile.name}`}>
                            <img className={styles.postProfileImg} 
                            src={profile.profilePicture ? PF + profile.profilePicture : `${PF}pill.jpg`} alt="" />
                        </Link>
                        <span className={styles.postUsername}>{profile.name}</span>
                        <span className={styles.postDate}>{format(post.createdAt)}</span>
                    </div>
                    <div className={styles.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>{post?.text}</span>
                    <img className={styles.postImg} src={PF+post.image} alt="" />
                </div>
                <div className={styles.postBottom}>
                    <div className={styles.postBottomLeft}>
                        <FavoriteOutlined className={styles.likeIcon} onClick={likeHandler} />
                        <span className={styles.postLikeCounter}>{like} people like it</span>
                    </div>
                    <div className={styles.postBottomRight}>
                        <span className={styles.postCommentText}>{post._comments.length} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
} 