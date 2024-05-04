'use client'
/* eslint-disable react/no-unescaped-entities */
import styles from '@/app/component/profil.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

export default function ProfilPage() {

    return (
        <div className={styles.cece}>
            <div className={styles.kiri}>
                <Link target='_blank' href={'https://www.instagram.com/natanaelriowijaya/'} >
                    <FaInstagram size={30} className={styles.icon} />
                </Link>
                <Link target='_blank' href={'https://github.com/natanaelrio'} >
                    <FaGithub size={30} className={styles.icon2} />
                </Link>
            </div>
            <div className={styles.tengah}>
                <div className={styles.atas}>
                    <div className={styles.satu}>
                        <div className={styles.luarhello}>
                            <div className={styles.hallo}>Hello</div>
                            <div className={styles.hallo}>你好</div>
                            <div className={styles.hallo}>こんにちは</div>
                            <div className={styles.hallo}>Salve</div>
                            <div className={styles.hallo}>Hola</div>
                            <div className={styles.hallo}>Hallo</div>
                        </div>
                        <div className={styles.luarhello}>
                            <div className={styles.hallo}>Hello</div>
                            <div className={styles.hallo}>你好</div>
                            <div className={styles.hallo}>こんにちは</div>
                            <div className={styles.hallo}>Salve</div>
                            <div className={styles.hallo}>Hola</div>
                            <div className={styles.hallo}>Hallo</div>
                        </div>

                    </div>
                    i'am Rio <FaRegHandPeace className={styles.icontangan} />
                </div>
                <div className={styles.dua}>
                    <span></span> Front End Developer
                </div>
                <div className={styles.tiga}>i'am Front End Developer in Salatiga, i'am very passionate and dedicated to my work.</div>
                <div className={styles.empat}>
                    <button>Contact Info</button>
                    <button>Download CV &nbsp; <MdOutlineFileDownload className={styles.icondownload} /></button>
                </div>
            </div>
            <div className={styles.kanan}>
                <div className={styles.shape}>
                    <div className={styles.bgcover}>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/bg.png`} alt='wkwk' width={500} height={350} ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
