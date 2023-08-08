"use client"
import React from 'react'

interface InputProps {
    placeholder:string,
    type:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    clstyle?:string
}

const Input = ({placeholder,type,handleChange,clstyle}:InputProps) => {
  return (
    <input
    type={type}
    placeholder={placeholder}
    onChange={(e)=>handleChange(e)}
    className={`ring-1 rounded-md ring-slate-300 px-2 py-2 w-full outline-none`}
    />
  )
}

export default Input