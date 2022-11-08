import React, { useRef } from "react";
import Button from "../Button/Button";
import ButtonRound from "../ButtonRound/ButtonRound";
import "./AddLink.css";
import "./Modal.css";

const AddLink = () => {
  const openModal = useRef(null);

  const handleClick = () => {
    openModal.current.click();
  };
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
        tabindex="-1"
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
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="linktitle" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="linktitle" placeholder="Title" autocomplete="off"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="linkaddress" className="form-label">
                    Link Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="linkaddress"
                    placeholder="Link Address"
                    autocomplete="off"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="listname" className="form-label">
                    List
                  </label>
                  <input type="text" className="form-control" id="listname" placeholder="(Default)" autocomplete="off"/>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <Button text="Add Link" />
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
