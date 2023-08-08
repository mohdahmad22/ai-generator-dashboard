"use client"
import { SideBarConst } from '@/Constants'
import Link from 'next/link'
import React, { useLayoutEffect, useState } from 'react'
import {usePathname} from "next/navigation"
import {AiOutlineMenu} from "react-icons/ai"

const Sidebar = () => {
  const pathName = usePathname();
  const [menuVisible,setMenuVisible]=useState(false);
    
  useLayoutEffect(()=>{
    function updateVisibility(){
      if(window.innerWidth<450){
        console.log(window.innerWidth)
        setMenuVisible(false);
      }
      else{
        setMenuVisible(false);
      }

    }
    window.addEventListener("resize",updateVisibility);
    updateVisibility();
    return ()=> window.removeEventListener("resize",updateVisibility);
  },[])


  return (
    <aside className={`flex fixed z-10 md:relative xl:relative flex-3 px-4 flex-col  bg-gray-900 min-h-screen ${menuVisible?"invisible":"visible"}`}>
        <div className="sticky  top-0 flex flex-col gap-5">
        <AiOutlineMenu onClick={()=>setMenuVisible(false)} size={25} className="mt-5 visible xl:hidden md:hidden" />
        <h1 className='px-4 text-white   font-extrabold mt-4 text-lg'>AI Makcom</h1>
        <div onClick={()=>setMenuVisible(true)} className='text-white visible xl:hidden md:hidden absolute top-0 right-0'>X</div>
        {SideBarConst.map((label)=>(
          <Link href={label.url}>
          <div className={`flex flex-row gap-5 items-center px-4 py-2 cursor-pointer  text-gray-400 hover:bg-gray-600 hover:text-white rounded-md
          ${pathName === label.url ? "bg-gray-600 text-white":""}
          `}>
            {label.icon}            
            <p>{label.name}</p>
          </div>
          </Link>
        ))}
      <p className='text-white'>Powered By : Open AI</p>
        </div>
    </aside>
  )
}

export default Sidebar