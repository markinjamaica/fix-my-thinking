import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/articles">
                <a>Articles</a>
            </Link>
        </nav>
    );
}
