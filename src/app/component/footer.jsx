import styles from '@/app/component/footer.module.css'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";

export default function FooterPage() {
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
            </div>
        </footer>
    )
}
