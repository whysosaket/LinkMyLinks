import React, { useRef } from "react";
import Button from "../Button/Button";
import ButtonRound from "../ButtonRound/ButtonRound";
import "./AddLink.css";

const AddLink = () => {
  const openModal = useRef(null);

  const handleClick = () => {
    console.log("Clicked");
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
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addlinkmodalLabel">
                Add Link
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
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
