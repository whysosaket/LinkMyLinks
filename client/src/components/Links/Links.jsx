import React, { useContext, useEffect, useRef, useState } from "react";
import LinkItem from "../LinkItem/LinkItem";
import "./Links.css";
import LinkContext from "../../context/links/linkContext";
import Button from "../Button/Button";


const Links = () => {
  // Code to get code

  const contextLink = useContext(LinkContext);
  const { links, getLinks, deleteLink, editLink } = contextLink;

  useEffect(() => {
    getLinks();
    // eslint-disable-next-line
  }, []);

  ////////////// The below is code to edit links

  // Importing of refs
  const openModal = useRef(null);
  const closeModal = useRef(null);

  const [link, updateLink] = useState({
    _id: "",
    title: "",
    linkaddress: "",
    list: "",
    isPublic: false
  });

  const handleForeignClick = (_id, title, linkaddress, list, isPublic) => {
    updateLink({ _id, title, linkaddress, list, isPublic });
    openModal.current.click();
  };

  const handleEditLink = () => {
    console.log(link);
    editLink(link._id, link.title, link.linkaddress, link.list, link.isPublic);
    closeModal.current.click();
    updateLink({ _id: "", title: "", linkaddress: "", list: "", isPublic: link.isPublic});
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    updateLink({ ...link, [name]: value });
  };
 
 
  
  return (
    <>
      
      <h2 className="in-links">Default List</h2>
      <div className="links">
        
        {links.map((link, index) => {
          return (
            <LinkItem
              link={link}
              key={index}
              deleteLink={deleteLink}
              handleForeignClick={handleForeignClick}
            />
          );
        })}
      </div>

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#editlinkmodal"
        ref={openModal}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="editlinkmodal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editlinkmodalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editlinkmodalLabel">
                Update Link
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
                  <input
                    type="text"
                    className="form-control"
                    id="linktitle"
                    placeholder="Title"
                    autoComplete="off"
                    value={link.title}
                    onChange={handleChange}
                    name="title"
                  />
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
                    value={link.linkaddress}
                    onChange={handleChange}
                    name="linkaddress"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="listname" className="form-label">
                    List
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="listname"
                    placeholder="(Default)"
                    autoComplete="off"
                    value={link.list}
                    onChange={handleChange}
                    name="list"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="listname" className="form-label">
                    Public
                  </label>
                  <input type="checkbox"
                  className="form-check-input"
                  id="public"
                  placeholder="Public"
                  autoComplete="off"
                  name="isPublic"
                  checked={link.isPublic}
                  onChange={()=>{updateLink({...link, isPublic: !link.isPublic})}}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <span onClick={handleEditLink}>
                <Button text="Update Link" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
