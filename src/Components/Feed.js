import styles from"../stylesheets/feed.module.css";
import Post from "./Post";
import Share from "./Share";
import {Posts} from "../dummyData"

export default function Feed() {
    return (
        <div className={styles.feed}>
            <div className={styles.feedWrapper}>
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p}/>
                ))}
                {/* <Post /> */}

            </div>
        </div>
    )
} 