import styles from '@/app/component/header.module.css'
import Link from 'next/link'

export default function HeaderPage() {
    return (
        <header className={styles.header}>
            <div className={styles.kiri}>Natanael Rio Wijaya</div>
            <div className={styles.kanan}>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/#skill'}>Skill</Link>
                    </li>
                    <li>
                        <Link href={'/#project'}>Projects</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
