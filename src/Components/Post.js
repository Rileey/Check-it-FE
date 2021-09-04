/* eslint react/prop-types: 0 */
import { FavoriteOutlined, MoreVert } from "@material-ui/icons";
import styles from "../stylesheets/post.module.css";
import {Users} from "../dummyData"
import { useState } from "react";
// import env from "react-dotenv"
// env.config()

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className={styles.post}>
            <div className={styles.postWrapper}>
                <div className={styles.postTop}>
                    <div className={styles.postTopLeft}>
                        <img className={styles.postProfileImg} src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                        <span className={styles.postUsername}>{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className={styles.postDate}>{post.dates}</span>
                    </div>
                    <div className={styles.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={styles.postCenter}>
                    <span className={styles.postText}>{post?.text}</span>
                    <img className={styles.postImg} src={PF+post.photo} alt="" />
                </div>
                <div className={styles.postBottom}>
                    <div className={styles.postBottomLeft}>
                        <FavoriteOutlined className={styles.likeIcon} onClick={likeHandler} />
                        <span className={styles.postLikeCounter}>{like} people like it</span>
                    </div>
                    <div className={styles.postBottomRight}>
                        <span className={styles.postCommentText}>{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
} 