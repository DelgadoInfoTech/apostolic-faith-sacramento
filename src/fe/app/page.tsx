import Church from "../public/stockChurch.jpg"

export default function Home() {
  return (
    <div className="bg-[url('../public/stockChurch.jpg')] h-screen bg-cover bg-center">
      <div className="backdrop-blur-none backdrop-brightness-70">
        <h1 className="flex h-screen justify-center items-center text-7xl text-white font-newsreader">
            Welcome to <br/>Apostolic Faith Church 
        </h1>
      </div>
    </div>
  )
}