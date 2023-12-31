"use client"
import Button from '@/Components/UI/Button'
import Input from '@/Components/UI/Input'
import React, { useEffect, useState } from 'react'
import {FaStarAndCrescent,FaRegUser,FaHourglassStart} from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import {ChatCompletionRequestMessage} from "openai";
import axios from 'axios';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Link from 'next/link';
const Conversation = () => {
    const [propmt,setPrompt]=useState('How do i calculate the radious of circle ?');
    const [messages,setMessages]=useState<ChatCompletionRequestMessage[]>([]);
    const [isLoading,setIsLoading]=useState(false);
    
    
    const handleGenerate=async()=>{
        setIsLoading(true);
        const userMessage:ChatCompletionRequestMessage ={
            role:"user",
            content:propmt
        };
        const  newMessages = [...messages,userMessage];

        const response = await axios.post("/api/conversation",{
            messages:newMessages
        })
        if(response){
            console.log(response);
        setMessages((current)=>[...current,userMessage,response.data])
        setIsLoading(false);
        }
    }
  return (
    <div className="mt-14   flex flex-1 flex-col gap-5 items-center">
        <Link href="/" className='fixed md:hidden top-5 left-5'>
        <BiArrowBack  size={40} />
        </Link>
        <h1 className="font-extrabold text-clip text-[32px]">Conversation</h1>
        <p>Our Most advanced Conversation Model</p>
        <div className='flex  flex-col gap-5 xl:flex-row  w-[90%]'>
        <Input
        placeholder="Start Conversation"
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
        <div className="flex flex-col-reverse gap-5  mx-20 mb-10">
            { messages.map((message)=>(<div 
            key={message.content}
            className={`flex flex-row items-start gap-10 rounded-lg text-sm  text-black bg-slate-200 px-5 py-5 ${message.role === "user" ? "bg-white border border-black/10":"bg-muted" }`}
            >
                {message.role === "user"?<FaRegUser color="green" size={25} />:<FaStarAndCrescent size={25} color="blue" />}
                <ReactMarkdown
                className="flex flex-col prose break-words prose-p:leading-relaxed"
                >
                {message.content || ""}
                {}
                </ReactMarkdown>             
            </div>
            ))}
        </div>
}
    </div>
  )
}

export default Conversation