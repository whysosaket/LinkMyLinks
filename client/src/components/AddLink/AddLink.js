import React, { useContext, useRef, useState } from "react";
// import AlertContext from "../../context/alerts/alertContext";
import LinkContext from "../../context/links/linkContext";
import Button from "../Button/Button";
import ButtonRound from "../ButtonRound/ButtonRound";
import "./AddLink.css";
import "./Modal.css";

const AddLink = () => {
   // const host = process.env.REACT_APP_HOST;

  const openModal = useRef(null);
  const closeModal = useRef(null);
  // refs for modal input values
  const titleref = useRef(null);
  const listref = useRef(null)

  // useState for linkaddress
  const [linkaddress, updateLinkAddress] = useState('');

  // CONTEXT FOR ADD LINK
  const contextLink = useContext(LinkContext);
  const {addLink} = contextLink;


  const handleAddLink = async () =>{
    // Validating
    let linkadd = linkaddress;
    if(!linkaddress.startsWith('http')){
      linkadd = 'https://'+linkaddress;
    }

    let list = listref.current.value;
    if(list === ''){
      list="Default";
    }

    addLink(titleref.current.value, linkadd,list);

    // Resetting values
     updateLinkAddress('');
        closeModal.current.click();
       // resetting value of form
       titleref.current.value = '';
       listref.current.value = '';
  }

  const handleClick = () => {
    openModal.current.click();
  };

  const handleLinkChange = (event)=>{
    updateLinkAddress(event.target.value);
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#addlinkmodal"
        ref={openModal}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="addlinkmodal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addlinkmodalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addlinkmodalLabel">
                Add Link
              </h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="linktitle" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="linktitle" placeholder="Title" autoComplete="off" ref={titleref}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="linkaddress" className="form-label">
                    Link Address
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="linkaddress"
                    placeholder="Link Address"
                    autoComplete="off"
                    value={linkaddress}
                    onChange={handleLinkChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="listname" className="form-label">
                    List
                  </label>
                  <input type="text" className="form-control" id="listname" placeholder="(Default)" autoComplete="off" ref={listref}/>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <span onClick={handleAddLink}>
              <Button text="Add Link" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span onClick={handleClick}>
          <ButtonRound />
        </span>
        <div className="p-5 bg-dark fixed-bottom addtask">
          <div className="d-flex justify-content-center">
            <div>
              <div className="form-outline form-white">
                <input
                  type="text"
                  id="formWhite"
                  className="form-control"
                  placeholder="Add a Link"
                  value={linkaddress}
                  onChange={handleLinkChange}
                  autoComplete="off"
                />
                <span className="hide-mob" onClick={handleClick}>
                  <Button text="Add Link" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLink;
