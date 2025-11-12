'use client';

import Link from "next/link";
import Image from 'next/image';
import HomepageImage from '@/components/HomepageImage'
import { FaRegCopyright } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


export default function Footer() {
    return (
      <footer className="fixed bottom-0 w-full flex gap-40 items-center justify-center pt-20 py-5 bg-zinc-700 text-white">
                
                <div>
                    <div className="flex gap-45 pb-10 border-b">
                        <div className="flex">
                            <a href="/">
                                <Image 
                                src='/logo.png' 
                                alt="Apostolic Faith Church Logo" 
                                width="175"
                                height="175"/>
                            </a>
                        </div>

                            <ul className="flex flex-col gap-4 static bold">
                                
                                <h1 className="font-bold text-[17px]">Contact us</h1>

                                
                                <div className="flex flex-row items-center gap-2">
                                    <IoLocationOutline size="15"/>
                                    <Link className="hover:underline" href="/">
                                        Apostolic Faith Church 
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <IoLocationOutline size="15"/>
                                    <Link className="hover:underline" href="/">
                                        123-456-7890
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <IoLocationOutline size="15"/>
                                    <Link className="hover:underline" href="/">
                                        exampleemail@info.com
                                    </Link>
                                </div>

                            </ul>
            
                            <ul className="flex flex-col gap-4 static bold">
                                
                                <h1 className="font-bold text-[17px]">Quick Links</h1>

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
                    </div>
                   

                    <div className="bottom-0 w-full flex gap-30 items-center justify-center pt-15">
                        <div className="flex flex-row items-center justify-center gap-3 mb-10">
                            <FaRegCopyright size="15"/>
                            <p>2025 Apostolic Faith Church</p>
                        </div>
                        <div className="flex flex-row gap-5 items-center justify-center mb-10">
                            <FaRegCopyright size="15"/>
                            <FaRegCopyright size="15"/>
                            <FaRegCopyright size="15"/>
                        </div>
                    </div>
                </div>
        </footer>
    )
}