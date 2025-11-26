'use client';

import Link from "next/link";
import Image from 'next/image';
import HomepageImage from '@/components/ChurchLogo'
import Dropdown from '@/components/Dropdown';
import { useState } from 'react';

export default function Navbar() {
    return (
        <nav className="fixed z-50 top-0 w-full flex gap-40 items-center justify-center py-5 bg-stone-200">

            <div className="pr-0">
                <HomepageImage />
            </div>

            <ul className="flex gap-15 static">
                
                <Dropdown />
        
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
                    Connect
                </Link>

                <Link className="hover:underline" href="/give">
                    Give
                </Link>


            </ul>
        </nav>
    )
}