'use client'
import styles from '@/app/component/footer.module.css'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
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
                    <FaInstagramSquare size={30} className={styles.icon} />
                </Link>
                <Link href={'https://www.instagram.com/natanaelriowijaya/'} >
                    <FaGithub size={30} className={styles.icon} />
                </Link>
                <Link href={'https://wa.me/+628971041460'} >
                    <FaSquareWhatsapp size={30} className={styles.icon} />
                </Link>
                <div className={styles.top} onClick={handleOnTop}>
                    <IoIosArrowDropup size={30} className={styles.icon} />
                </div>
            </div>
        </footer>
    )
}
