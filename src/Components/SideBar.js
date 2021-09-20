import React from "react";
import styles from"../stylesheets/sidebar.module.css";
import { Bookmark, Event, Group, PlayCircleFilledOutlined, School, WorkOutline } from "@material-ui/icons"
import {Users} from "../dummyData"
import CloseFriend from "./CloseFriend";

export default function SideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <PlayCircleFilledOutlined className={styles.sidebarIcon} />
                        <span className={styles.text}>Videos</span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Group className={styles.sidebarIcon} />
                        <span className={styles.text}>Groups</span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Bookmark className={styles.sidebarIcon} />
                        <span className={styles.text}>Bookmarks</span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <WorkOutline className={styles.sidebarIcon} />
                        <span className={styles.text}>Jobs</span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Event className={styles.sidebarIcon} />
                        <span className={styles.text}>Events</span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <School className={styles.sidebarIcon} />
                        <span className={styles.text}>Courses</span>
                    </li>
                </ul>
                <hr className={styles.sidebarHr}/>
                <ul className={styles.sidebarFriendList}>
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
} 