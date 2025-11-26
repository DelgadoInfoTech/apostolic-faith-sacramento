import {
  Button
} from "@/components/ui/button"
import Navbar from "@/components/Navbar";
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="flex justify-center bg-[url('../public/frontChurchCopy1.JPG')] h-screen bg-cover bg-center bg-fixed">
      <div className="font-lora">
        <h1 className="text-6xl text-white tracking-wider text-center pt-60 pb-2">
          Welcome to
        </h1>
        <h1 className="text-6xl text-white tracking-wide pb-4">
           Apostolic Faith Church
        </h1> 
        <h1 className="text-4xl text-white text-center font-light">
           Sundays at 11:00 AM & 5:00 PM
        </h1> 
        <div className="flex gap-8 pt-5 justify-center items-center">
          <Button className="border-2 border-white bg-transparent" variant="default">About Us</Button>
          <Button className="border-2 border-white bg-transparent" variant="default">Latest Sermon</Button>
        </div>
      </div>
    </div>
  )
}


//Apostolic Faith Church - <i>Sacramento, CA</i>