import styles from"../stylesheets/feed.module.css";
import Post from "./Post";
import Share from "./Share";
// import {Posts} from "../dummyData"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed({name}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
        const response = name 
        ? await axios.get('/posts/' + name)
        : await axios.get('/posts/timeline/613a199830c6872e78716b6f')
        setPosts(response.data)
        // console.log(response.data);
        }
       
        fetchPosts();
    }, [name]);
    

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


