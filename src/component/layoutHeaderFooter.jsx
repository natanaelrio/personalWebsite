import styles from '@/component/layoutHeaderFooter.module.css'
import HeaderPage from "@/component/header";
import FooterPage from '@/component/footer';

export default function LayoutHeaderFooter({ children, view }) {
    return (
        <main className={styles.main}>
            <div className={styles.isi}>
                <HeaderPage />
                {children}
                <FooterPage view={view} />
            </div>
        </main>
    )
}
