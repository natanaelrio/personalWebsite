import styles from '@/component/skill.module.css'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileCssThin } from "react-icons/pi";
import { SiFramer } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";

export default function Skill() {
    return (
        <div className={styles.skill} id='skill'>
            <div className='judul'>Skill</div>
            <div className={styles.isi}>
                <div className={styles.isislide}>
                    <FaHtml5 className={styles.icon} />
                    <IoLogoJavascript className={styles.icon} />
                    <PiFileCssThin className={styles.icon} />
                    <FaReact className={styles.icon} />
                    <SiFramer className={styles.icon} />
                    <SiMysql className={styles.icon} />
                    <SiExpress className={styles.icon} />
                    <SiPostgresql className={styles.icon} />
                    <SiPrisma className={styles.icon} />
                    <FaGitSquare className={styles.icon} />
                </div>
                <div className={styles.isislide}>
                    <FaHtml5 className={styles.icon} />
                    <IoLogoJavascript className={styles.icon} />
                    <PiFileCssThin className={styles.icon} />
                    <FaReact className={styles.icon} />
                    <SiFramer className={styles.icon} />
                    <SiMysql className={styles.icon} />
                    <SiExpress className={styles.icon} />
                    <SiPostgresql className={styles.icon} />
                    <SiPrisma className={styles.icon} />
                    <FaGitSquare className={styles.icon} />
                </div>
            </div>
        </div>
    )
}
