import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineCopy,
  AiOutlineLock,
  AiOutlineUnlock,
} from "react-icons/ai";
import { motion } from "framer-motion";

const LinkItem = (props: {delay: number, link: any}) => {

  const linkaddress = props.link.linkaddress;
  const list = props.link.list;
  const isPublic = props.link.public;
  const title = props.link.title;

  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = ()=>{
    // Copy the text inside the text field
     navigator.clipboard.writeText(linkaddress);
 }

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: (props.delay*1.0)/10.1 }}
      className="bg-gray-200 bg-opacity-30 py-2 px-6 m-4 rounded-md w-full md:w-72"
    >
      <h1 className="font-semibold flex justify-between items-center">
        {title.slice(0, 28)}
        {!isPublic ? (
          <AiOutlineLock className="relative left-4 text-red-600 -z-10" />
        ) : (
          <AiOutlineUnlock className="relative left-4 text-green-600 -z-10" />
        )}
      </h1>

      <p className="text-gray-600 font-extralight text-sm my-2">
        {linkaddress.slice(0, 35)}...
      </p>
      <div className="flex justify-between">
        <div className="my-2">
          <button onClick={()=>openInNewTab(linkaddress)} className="bg-slate-100 hover:bg-slate-50 rounded-lg shadow-md px-4 py-2 font-semibold select-none">
            Open
          </button>
        </div>
        <div className="my-auto flex">
          <AiOutlineDelete
            className="mx-1 hover:text-red-400"
            size={"1.3rem"}
          />
          <AiOutlineEdit
            className="mx-1 hover:text-yellow-600"
            size={"1.3rem"}
          />
          <button onClick={handleCopy}>
          <AiOutlineCopy
            className="mx-1 hover:text-green-500"
            size={"1.3rem"}
          />
          </button>
        </div>
      </div>
      <div className="my-auto hidden">
        <hr className="h-2 my-1" />
        <h1 className="font-semibold text-sm">Are you sure?</h1>
        <div className="flex justify-end text-white md:my-2">
          <button className="mx-2 md:mx-1 border-white hover:text-black hover:bg-white border px-3 py-2 md:px-2 md:py-1 rounded-lg">
            Cancel
          </button>
          <button className="mx-2 md:mx-1 bg-red-500 border border-red-500 hover:text-red-500 hover:bg-transparent px-3 py-2 md:px-2 md:py-1 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkItem;
