import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h2>
            Nobbele's Site
            </h2>
            <hr/>
            <Link href="/">Home</Link>
            <br/>
            <Link href="/software">Software</Link>
            <br/>
            <Link href="/projects">Projects</Link>
        </nav>
    )
}