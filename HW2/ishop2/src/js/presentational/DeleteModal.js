import React from "react";
import "../../styles/DeleteModal.less";

const DeleteModal = ({idItemToDelete, deleteItem}) => (
  <div className="ModalWrapper" onClick={(evt)=>deleteItem(evt,idItemToDelete)}>
      <h2 className="ModalTitle">Are you sure ?</h2>
      <div className="BtnGroup">
          <button className="AgreeBtn">Yes</button>
          <button className="DisagreeBtn">No</button>
      </div>
  </div>
);

export default DeleteModal;