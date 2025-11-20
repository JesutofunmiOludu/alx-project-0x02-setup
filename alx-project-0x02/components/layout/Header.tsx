import Link from 'next/link';

export default function Header() {  
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <Link href="/home" className="text-lg font-bold">  Home </Link>
                <Link href="/about" className="text-lg font-bold"> About </Link>
                <Link href="/posts" className="text-lg font-bold"> Post </Link>
            </nav>
        </header>
    );
}