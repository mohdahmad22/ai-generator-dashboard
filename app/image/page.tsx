"use client"
import Button from '@/Components/UI/Button'
import Input from '@/Components/UI/Input'
import React, { useEffect, useState } from 'react'
import {FaStarAndCrescent,FaRegUser,FaHourglassStart} from "react-icons/fa";
import axios from 'axios';
import Image from 'next/image';
const ImageGeneration = () => {
    const [propmt,setPrompt]=useState<string>('');
    const [isLoading,setIsLoading]=useState(false);
    const [images,setImages]=useState<string[]>([]);
    
    
    const handleGenerate=async()=>{
        setIsLoading(true);
       

        const response = await axios.post("/api/image",{prompt:propmt,amount:10,resolution:"512x512"})
        if(response){
        const urls = response.data.map((image:{url:string})=>image.url);
        setImages(urls);
        setIsLoading(false);
        }
    }
  return (
    <div className="mt-14   flex flex-1 flex-col gap-5 items-center">
        <h1 className="font-extrabold text-clip text-[32px]">ImageGeneration</h1>
        <p>Our Most advanced ImageGeneration Model</p>
        <div className='flex  flex-col gap-5 xl:flex-row  w-[90%]'>
        <Input
        placeholder="Start ImageGeneration"
        type='text'
        handleChange={(e)=>setPrompt(e.target.value)}
        />
        <Button
            label='Generate'
            handleClick={handleGenerate}
        />
        </div>
        {isLoading ? <div>
            <FaHourglassStart size={25} color="blue" className="animate-spin" />
            <p>AI is Thinking</p>
            </div>:
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-8 mx-10 mb-10">
            {
                images.map((src)=>(
                    <Image alt="Image" src={src} height={512} width={512} />
                ))
            }
        </div>
}
    </div>
  )
}

export default ImageGeneration