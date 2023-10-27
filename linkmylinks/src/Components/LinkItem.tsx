import { AiOutlineDelete, AiOutlineEdit, AiOutlineCopy } from "react-icons/ai"

const name = "Hackodex - Github API";
const link = "https://api.github.com/search/issues?q=is:pr+archived:false+is:closed+label:hackodex2023-accepted&page=1&per_page=101";


const LinkItem = () => {

  return (
    <div className='bg-gray-200 py-2 px-6 m-4 rounded-md w-full md:w-72'>
        <h1 className="font-semibold">{name}</h1>
        <p className="text-gray-600 font-extralight text-sm my-2">{link.slice(0,35)}...</p>
        <div className="flex justify-between">
            <div className="my-2">
                <button className="bg-slate-100 hover:bg-slate-50 rounded-lg shadow-md px-4 py-2 font-semibold">
                    Open
                </button>
            </div>
            <div className="my-auto flex">
                <AiOutlineDelete className="mx-1 hover:text-red-400" size={'1.3rem'} />
                <AiOutlineEdit className="mx-1 hover:text-yellow-400" size={'1.3rem'} />
                <AiOutlineCopy className="mx-1 hover:text-green-400" size={'1.3rem'} />
            </div>
        </div>
    </div>
  )
}

export default LinkItem