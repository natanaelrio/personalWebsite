import styles from '@/component/scrooldown.module.css'
import Link from 'next/link';
import { FaArrowTurnDown } from "react-icons/fa6";

export default function ScroolDown() {
    return (
        <div className={styles.scrool}>
            <Link href={'/#skill'}>
                ScroolDown &nbsp; <FaArrowTurnDown className={styles.icon} />
            </Link>
        </div>
    )
}
