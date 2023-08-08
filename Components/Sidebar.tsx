"use client"
import { SideBarConst } from '@/Constants'
import Link from 'next/link'
import React from 'react'
import {usePathname} from "next/navigation"

const Sidebar = () => {
  const pathName = usePathname();
    
  return (
    <aside className='flex flex-3 px-4 flex-col  bg-gray-900 min-h-screen'>
        <div className="sticky top-0 flex flex-col gap-5">
        <h1 className='px-4 text-white sticky  font-extrabold mt-4 text-lg'>AI Makcom</h1>
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