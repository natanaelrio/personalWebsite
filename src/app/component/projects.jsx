import styles from '@/app/component/projects.module.css'

export default function Project() {
    return (
        <div className={styles.project} id='project'>
            <div className='judul'>Project</div>
            <div className={styles.kotak}>
                <div className={styles.kotak1}>
                    <div className={styles.gambar}></div>
                    <div className={styles.judul}>Personal Website</div>
                    <div className={styles.deskripsi}>Situs web ini berfungsi sebagai wadah untuk portofolio saya, menampilkan proyek-proyek terbaru yang saya kerjakan.</div>
                </div>
                <div className={styles.kotak1}>
                    <div className={styles.gambar}></div>
                    <div className={styles.judul}>Decolofit</div>
                    <div className={styles.deskripsi}>Situs web e-commerce pribadi saya didesain untuk menyajikan produk-produk yang saya tawarkan kepada pelanggan secara online.</div>
                </div>
                <div className={styles.kotak1}>
                    <div className={styles.gambar}></div>
                    <div className={styles.judul}>Personal Website</div>
                    <div className={styles.deskripsi}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, saepe.</div>
                </div>
                <div className={styles.kotak1}>
                    <div className={styles.gambar}></div>
                    <div className={styles.judul}>Personal Website</div>
                    <div className={styles.deskripsi}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, saepe.</div>
                </div>
                <div className={styles.kotak1}>
                    <div className={styles.gambar}></div>
                    <div className={styles.judul}>Personal Website</div>
                    <div className={styles.deskripsi}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, saepe.</div>
                </div>
                <div className={styles.kotak1}>
                    <div className={styles.gambar}></div>
                    <div className={styles.judul}>Personal Website</div>
                    <div className={styles.deskripsi}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, saepe.</div>
                </div>
            </div>
        </div>
    )
}
