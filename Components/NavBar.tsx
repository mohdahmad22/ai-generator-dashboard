import { SideBarConst } from '@/Constants'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
const NavBar = () => {
  return (
    <nav className='items-center mt-10'>
        {SideBarConst.map((nav)=>{
            if(nav.name === "DashBoard"){
                return null;
            }
            else {
                return <Link href={nav.url}>
                <div className='mt-2 mx-5 md:mx-20 ring-slate-100 ring-1 py-3 hover:shadow-md rounded-md shadow-lg cursor-pointer'>  
                    <div className='px-5 flex flex-row items-center justify-between'>
                    <div className='flex items-center flex-row gap-5'>
                    {nav.icon}
                    <p className="font-bold">{nav.name}</p>
                    </div>
                    <AiOutlineArrowRight/>
                    </div>
                </div>
                </Link>
            }
        })}
    </nav>
  )
}

export default NavBar