import React from 'react'

const AddLinkFooter = () => {
  return (
    <div className='h-32 w-full fixed bottom-0 bg-black flex items-center justify-center'>
        <div className='flex items-center justify-center'>
            <div className='flex'>
                <input type='text' placeholder='Add Link' className='rounded-sm px-3 py-2 w-96' />
                <button className='bg-white mx-2 px-4 py-2 font-semibold rounded-sm text-lg'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddLinkFooter