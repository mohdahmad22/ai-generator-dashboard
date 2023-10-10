"use client"
import Button from '@/Components/UI/Button'
import Input from '@/Components/UI/Input'
import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
const TextGeneration = () => {
    const [propmt,setPrompt]=useState('How do i calculate the radious of circle ?');
    const [isLoading,setIsLoading]=useState(false);
    
    
    const handleGenerate=async()=>{
        setIsLoading(true);

        const response = await axios.post("/api/text",{prompt:propmt})
        if(response){
        console.log(response);
        setIsLoading(false);
        }
    }
  return (
    <div className="mt-14   flex flex-1 flex-col gap-5 items-center">
        <Link href="/" className='fixed md:hidden top-5 left-5'>
        <BiArrowBack  size={40} />
        </Link>
        <h1 className="font-extrabold text-clip text-[32px]">TextGeneration</h1>
        <p>Our Most advanced TextGeneration Model</p>
        <div className='flex  flex-col gap-5 xl:flex-row  w-[90%]'>
        <Input
        placeholder="Start TextGeneration"
        type='text'
        handleChange={(e)=>setPrompt(e.target.value)}
        />
        <Button
            label='Generate'
            handleClick={handleGenerate}
        />
 
    </div>
    </div>
)
}
export default TextGeneration

