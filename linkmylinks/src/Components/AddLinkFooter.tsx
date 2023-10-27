import React from 'react'

const AddLinkFooter = () => {
  return (
    <>
    <div className='h-32 w-full fixed bottom-0 bg-black flex items-center justify-center'>
        <div className='flex items-center justify-center'>
            <div className='flex'>
                <input type='text' placeholder='Add Link' className='rounded-xl px-3 py-2 md:w-96 w-[21rem]' />
                <button className='hidden md:block bg-white mx-4 px-4 py-2 font-semibold rounded-xl text-lg hover:bg-orange-50'>Add</button>
            </div>
        </div>
    </div>
    <div className='bg-black md:hidden text-white font-extrabold p-8 rounded-full w-6 h-6 flex items-center justify-center text-3xl select-none absolute right-3 bottom-36'>
      +
    </div>
    </>
  )
}

export default AddLinkFooter