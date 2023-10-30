import { useRef, useState } from "react";

const AddLinkModal = (props: any) => {

    const nameRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLInputElement>(null);
    const isPublicRef = useRef<HTMLInputElement>(null);

    const handleClick = ()=>{
        const name_ = nameRef.current?.value;
        const link = linkRef.current?.value;
        const list = listRef.current?.value;
        const isPublic = isPublicRef.current?.checked;
        console.log(name_, link, list, isPublic);
        return;
    }


  const handleClose = () => {
    props.setIsAddModalOpen(false);
  };

  return (
    <div
      className={`
        bg-gray-900 backdrop-blur-sm shadow-lg bg-opacity-30 z-50 min-h-screen min-w-full fixed top-0 flex items-center justify-center`}
    >
      <div role="status" className="flex justify-center">
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="z-50 mx-auto w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={handleClose}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  {props.adding?"Adding New Link":"Editing Link"}
                </h3>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Link Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      ref={nameRef}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Link Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Link Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="password"
                      placeholder="https://"
                      ref={linkRef}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="list"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      List Name
                    </label>
                    <input
                      type="text"
                      name="list"
                      id="list"
                      placeholder="Default"
                      ref={listRef}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          defaultValue=""
                          ref={isPublicRef}
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        is Public
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={handleClick}
                    type="submit"
                    className="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    {props.adding?"Add Link":"Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLinkModal;
