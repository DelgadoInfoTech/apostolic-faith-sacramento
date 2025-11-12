'use client';

import Link from "next/link";
import Image from 'next/image';
import HomepageImage from '@/components/HomepageImage'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex gap-40 items-center justify-center py-5 border-b border-gray-700">

            <div className="pr-0">
                <HomepageImage />
            </div>

            <ul className="flex gap-15 static">
                <Link className="hover:underline" href="/about">
                    About 
                </Link>

                <Link className="hover:underline"href="/media">
                    Media
                </Link>

                <Link className="hover:underline" href="/events">
                    Events
                </Link>

                <Link className="hover:underline" href="/contact">
                    Contact
                </Link>

                <Link className="hover:underline" href="/give">
                    Give
                </Link>


            </ul>
        </nav>
    )
}