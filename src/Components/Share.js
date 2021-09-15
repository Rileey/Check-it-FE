import styles from "../stylesheets/share.module.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons"
import { AuthContext } from "../context/AuthContext"
import { useContext, useRef, useState } from "react"
import axios from "axios";

export default function Share() {

    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const text = useRef()
    const [file, setFile] = useState(null)
    const submitIt = async (e) => {
        e.preventDefault()
        const newPost = {
            profileId: user._id,
            text: text.current.value,
            image: ''
        }
        if ( file ){
            const data = new FormData();
            const fileName = file.name
            data.append('file', file)
            data.append('name', fileName)
            newPost.image = fileName;
            console.log(newPost)
            try {
                await axios.post('/upload', data)
            } catch (err) {
                console.log(err)
            }
        }
        try{
            await axios.post('/post', newPost)
            window.location.reload()
        }catch(err){
            console.log({message: err})
        }
    }


    return (
        <div className={styles.share}>
            <div className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <img src={ user.profilePicture ? PF + user.profilePicture : PF + "pill.jpg"} alt="" className={styles.shareProfileImg} />
                    <input placeholder={"Whats up " + user.name + "?"} className={styles.shareInput} ref={text} />
                </div>
                <hr className={styles.shareHr}/>
                <form className={styles.shareBottom} onSubmit={submitIt}>
                    <div className={styles.shareOptions}>
                        <label htmlFor="file" className={styles.shareOption}>
                            <PermMedia className={styles.shareIcon} />
                            <span className={styles.shareOptionText}>Photo</span>
                            <input style={{display: "none"}} type="file" id="file" accept=".png,.jpg,.jpeg" onChange={(e)=>setFile(e.target.files[0])} />
                        </label>
                        <div className={styles.shareOption}>
                            <Label className={styles.shareIcon} />
                            <span className={styles.shareOptionText}>Link</span>
                        </div>
                    </div>
                    <button className={styles.shareButton} type="submit">Check-It</button>
                </form>
            </div>
        </div>
    )
} 