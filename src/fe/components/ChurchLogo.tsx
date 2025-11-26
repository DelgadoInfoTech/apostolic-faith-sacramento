'use client'
import Link from "next/link";
import Image from 'next/image';


export default function Navbar() {
    return (
        <a href="/">
            <Image 
            src='/logo.png' 
            alt="Apostolic Faith Church Logo" 
            width="125"
            height="125"/>
        </a>
    )}