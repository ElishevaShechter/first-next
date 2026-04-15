"use client";
import Link from 'next/link';
import { useState } from 'react';




export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar" >
        <nav className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold">
                        Logo
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        ☰
                    </button>

                    <ul className={`${isOpen ? 'block' : 'hidden'} md:flex gap-6`}>
                        <li>
                            <Link href="/" className="hover:text-gray-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-200">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}