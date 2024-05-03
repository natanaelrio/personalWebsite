import styles from '@/app/component/layoutHeaderFooter.module.css'
import HeaderPage from "@/app/component/header";
import FooterPage from '@/app/component/footer';

export default function LayoutHeaderFooter({ children }) {
    return (
        <main className={styles.main}>
            <div className={styles.isi}>
                <HeaderPage />
                {children}
                <FooterPage />
            </div>
        </main>
    )
}
