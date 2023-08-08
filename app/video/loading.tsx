"use client"

const Loading = () => {
  return (
        <div className="mt-14   flex flex-1 flex-col gap-5 items-center animate-pulse">
        <h1 className="bg-gray-200 rounded-full max-w-[360px] h-10 w-full"></h1>
        <p className="bg-gray-200 rounded-full max-w-[360px] h-8 w-full"></p>
        <div className='flex  flex-col gap-5 xl:flex-row  w-[90%]'>
            <div className='bg-gray-200 rounded-full max-w-[360px] h-8 w-full'></div>
            <div className='bg-gray-200 rounded-full max-w-[360px] h-8 w-full'></div>
        </div>
    </div>
  )
}

export default Loading