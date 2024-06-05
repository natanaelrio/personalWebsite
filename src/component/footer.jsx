'use client'
import styles from '@/component/footer.module.css'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import { useEffect, useState } from 'react';

export default function FooterPage() {
    const handleOnTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const [view, setView] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-viewclient?id=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                }
            })
            const data = await res.json()
            setView(data)
        }
        fetchData()
    }, [])


    return (
        <footer className={styles.footer}>
            <div className={styles.kiri}>© with ❤️ Natanael Rio Wijaya ({
                view?.data?.map((data, i) => {
                    console.log(data?.view_barang)
                    return (
                        <span key={i}>{data?.view_barang ? data?.view_barang : '...'}</span>
                    )
                })
            })</div>
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
