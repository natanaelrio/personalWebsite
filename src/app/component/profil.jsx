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
                <div className={styles.satu}>Hello i'am Rio <FaRegHandPeace size={40} /></div>
                <div className={styles.dua}>
                    <span></span> Front End Developer
                </div>
                <div className={styles.tiga}>i'am Front End Developer in Salatiga, i'am very passionate and dedicated to my work.</div>
                <div className={styles.empat}>
                    <button>Contact Info</button>
                    <button>Download CV &nbsp; <MdOutlineFileDownload /></button>
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
