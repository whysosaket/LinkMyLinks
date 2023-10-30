import {
  AiOutlineLock,
  AiOutlineUnlock,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import LinkContext from "../../context/links/linkContext";
import EditLinkModal from "../Modals/EditLinkModal";

const UserLinkItem = (props: {delay: number, link: any}) => {

  const { editLink } = useContext(LinkContext);

  const linkaddress = props.link.linkaddress;
  const isPublic = props.link.public;
  const title = props.link.title;
  const list = props.link.list;
  const _id = props.link._id;

  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
    {isAddModalOpen&&<EditLinkModal editLink={editLink} setIsAddModalOpen={setIsAddModalOpen} _id={_id} title={title} linkaddress={linkaddress} list={list} isPublic={isPublic} />}
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
      
      </div>
    </motion.div>
    </>
  );
};

export default UserLinkItem;
