import styles from"../stylesheets/feed.module.css";
import Post from "./Post";
import Share from "./Share";
// import {Posts} from "../dummyData"
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"

export default function Feed({name}) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchPosts = async () =>{
            const response = await name 
            ? await axios.get('/posts/' + name)
            : await axios.get('/posts/timeline/' + user._id)
            setPosts(response.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
        }))
        }
       
        fetchPosts();
    }, [name, user._id]);
    

    return (
        <div className={styles.feed}>
            <div className={styles.feedWrapper}>
                 <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p}/>
                    
                ))}

                

            </div>
        </div>
    )
} 


