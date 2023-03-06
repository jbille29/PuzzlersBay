import React, { useState } from "react";
import { BsXLg } from 'react-icons/bs'


const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <BsXLg 
              onClick={closeModal}
              style={{
                float:'right',
                fontSize: 'x-large',
                cursor: 'pointer'
              }}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
