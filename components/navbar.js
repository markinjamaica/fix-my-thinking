import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/articles">
                <a>Articles</a>
            </Link>
        </nav>
    );
}
