import { Inter } from "next/font/google";
import { Videocard } from "@/components/Videocard";
import {Menu} from "@/components/Menu";
import {useState} from 'react'

const inter = Inter({ subsets: ["latin"] });




export default function Home() {

  const [open, setOpen] = useState("hidden")  
  const handleMenu = () =>{
    console.log(open)
    if(open === "hidden")
    setOpen("block")
    else
    setOpen("hidden")
  }

  return (
    <>
      <div className="flex justify-between p-3">
            
            <div className="flex">
              <div onClick={handleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
              </div>
            
            <img src="./youtube.png" alt="" width={"100"} height={"100"}/>
            </div>

            <div><input type="text" placeholder="Search" className="text-base text-black p-3"/></div>

            <div>
            <img src="./youtube.png" alt="" width={"100"} height={"100"} className="rounded-full"/>
            </div>
            
            
        </div>
     <div className="flex">

      <div className={`open`}>
        <Menu open={open}/>
      </div>


     <div className="grid grid-cols-1 p-10 gap-12 sm:grid-cols-2 lg:grid-cols-3 col-span-11">
      <div>
      <Videocard />
      </div>
      <div>
      <Videocard />
      </div>
      <div>
      <Videocard />
      </div>
      <div>
      <Videocard />
      </div>
    </div>
     </div>
    
    </>
  );
}
