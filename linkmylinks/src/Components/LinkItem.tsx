import { AiOutlineDelete, AiOutlineEdit, AiOutlineCopy, AiOutlineLock, AiOutlineUnlock } from "react-icons/ai"

const name = "Hackodex - Github API alsjdajsdlkjaskljdlkaalksdjl";
const link = "https://api.github.com/search/issues?q=is:pr+archived:false+is:closed+label:hackodex2023-accepted&page=1&per_page=101";


const LinkItem = () => {

  return (
    <div className='bg-gray-200 bg-opacity-30 py-2 px-6 m-4 rounded-md w-full md:w-72'>
        
        <h1 className="font-semibold flex justify-between items-center">{name.slice(0,28)}{true?<AiOutlineLock  className="relative left-4 text-red-600 -z-10"/>:<AiOutlineUnlock  className="relative left-4 text-green-600 -z-10"/>}</h1>
        
        <p className="text-gray-600 font-extralight text-sm my-2">{link.slice(0,35)}...</p>
        <div className="flex justify-between">
            <div className="my-2">
                <button className="bg-slate-100 hover:bg-slate-50 rounded-lg shadow-md px-4 py-2 font-semibold">
                    Open
                </button>
            </div>
            <div className="my-auto flex">
                <AiOutlineDelete className="mx-1 hover:text-red-400" size={'1.3rem'} />
                <AiOutlineEdit className="mx-1 hover:text-yellow-600" size={'1.3rem'} />
                <AiOutlineCopy className="mx-1 hover:text-green-500" size={'1.3rem'} />
            </div>
        </div>
        <div className="my-auto hidden">
            <hr className="h-2 my-1"/>
            <h1 className="font-semibold text-sm">Are you sure?</h1>
            <div className="flex justify-end text-white md:my-2">
                <button className="mx-2 md:mx-1 border-white hover:text-black hover:bg-white border px-3 py-2 md:px-2 md:py-1 rounded-lg">Cancel</button>
                <button className="mx-2 md:mx-1 bg-red-500 border border-red-500 hover:text-red-500 hover:bg-transparent px-3 py-2 md:px-2 md:py-1 rounded-lg">Delete</button>
            </div>
        </div>
    </div>
  )
}

export default LinkItem