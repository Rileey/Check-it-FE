import styles from "../stylesheets/share.module.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons"

export default function Share() {
    return (
        <div className={styles.share}>
            <div className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <img src="/assets/girl.jpg" alt="" className={styles.shareProfileImg} />
                    <input placeholder="Whats up...?" className={styles.shareInput} />
                </div>
                <hr className={styles.shareHr}/>
                <div className={styles.shareBottom}>
                    <div className={styles.shareOptions}>
                        <div className={styles.shareOption}>
                            <PermMedia className={styles.shareIcon} />
                            <span className={styles.shareOptionText}>Photo/Video</span>
                        </div>
                        <div className={styles.shareOption}>
                            <Label className={styles.shareIcon} />
                            <span className={styles.shareOptionText}>Tag</span>
                        </div>
                        <div className={styles.shareOption}>
                            <Room className={styles.shareIcon} />
                            <span className={styles.shareOptionText}>Location</span>
                        </div>
                        <div className={styles.shareOption}>
                            <EmojiEmotions className={styles.shareIcon} />
                            <span className={styles.shareOptionText}>Feelings</span>
                        </div>
                    </div>
                    <button className={styles.shareButton}>Send It</button>
                </div>
            </div>
        </div>
    )
} 