'use client'
import styles from '@/app/component/footer.module.css'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function FooterPage() {
    const handleOnTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.kiri}>© with ❤️ Natanael Rio Wijaya</div>
            <div className={styles.kanan}>
                <Link href={'https://github.com/natanaelrio'} >
                    <FaInstagram size={30} className={styles.icon} />
                </Link>
                <Link href={'https://www.instagram.com/natanaelriowijaya/'} >
                    <FaGithub size={30} className={styles.icon2} />
                </Link>
                <div className={styles.top} onClick={handleOnTop}><FaArrowAltCircleUp size={30} /></div>
            </div>
        </footer>
    )
}
