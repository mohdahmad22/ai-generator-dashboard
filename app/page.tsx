import NavBar from '@/Components/NavBar'
import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
    <div className='flex flex-1 flex-col items-center'>
        <h1 className='mt-14 text-[32px] font-extrabold'>
        Explore the Power of AI</h1>
        <p className='text-gray-500 '>Chat with the smartest AI - Experience the power of AI</p>
        
    <NavBar />
    </div>
    <footer className='fixed bottom-10 left-[50%]'>
      Credits : <a target='_blank' href='https://www.codewithantonio.com'>Code with Antonio</a>
    </footer>
    </Fragment>
  )
}

export default Home