

const AddLinkFooter = () => {
  return (
    <>
    <div className='h-32 w-full fixed bottom-0 bg-gray-900 backdrop-blur-sm shadow-lg bg-opacity-80 flex items-center justify-center'>
        <div className='flex items-center justify-center'>
            <div className='flex'>
                <input type='text' placeholder='Add Link' className='backdrop-blur-sm shadow-lg opacity-80 outline-0 h-12 rounded-xl px-3 py-2 md:w-96 w-[21rem] bg-gray-800 text-white font-semibold' />
                <button className='hidden md:block bg-gray-800 backdrop-blur-sm shadow-lg opacity-80 text-white mx-4 px-4 py-2 font-semibold rounded-xl text-lg hover:bg-gray-700'>Add</button>
            </div>
        </div>
    </div>
    <div className='bg-black md:hidden backdrop-blur-sm shadow-lg bg-opacity-80 text-white font-extrabold p-8 rounded-full w-6 h-6 flex items-center justify-center text-3xl select-none fixed right-3 bottom-36'>
      +
    </div>
    </>
  )
}

export default AddLinkFooter