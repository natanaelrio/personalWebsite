import styles from '@/component/projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Project() {
    return (
        <div className={styles.project} id='project'>
            <div className='judul'>Project</div>
            <div className={styles.kotak}>
                <Link href='/' target='_blank'>
                    <div className={styles.kotak1}>
                        <div className={styles.gambar}>
                            <Image src={`${process.env.NEXT_PUBLIC_URL}/personalWebsite.png`} alt='personalwebsite' width={500} height={350} ></Image>
                        </div>
                        <div className={styles.judul}>Personal Website</div>
                        <div className={styles.deskripsi}>Situs web ini berfungsi sebagai wadah untuk portofolio saya, menampilkan proyek-proyek terbaru yang saya kerjakan.</div>
                    </div>
                </Link>
                <Link href='https://kul.vercel.app' target='_blank'>
                    <div className={styles.kotak1}>
                        <div className={styles.gambar}>
                            <Image src={`${process.env.NEXT_PUBLIC_URL}/decolofit.png`} alt='decolofit' width={500} height={350} ></Image>
                        </div>
                        <div className={styles.judul}>Decolofit</div>
                        <div className={styles.deskripsi}>Situs web e-commerce pribadi saya didesain untuk menyajikan produk-produk yang saya tawarkan kepada pelanggan secara online.</div>
                    </div>
                </Link>
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
