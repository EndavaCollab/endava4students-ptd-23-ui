import React, { useState } from 'react';
import AddModal from '../AddModal/AddModal.jsx';
import EditModal from '../EditModal/EditModal.jsx';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import './index.css';
const Modal = ({ action, onClose }) => {
    let modalContent;

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    switch (action) {
        case 'add':
            modalContent = <AddModal isOpen={handleOpen} onClose={handleClose} />;
            break;
        case 'edit':
            modalContent = <EditModal isOpen={handleOpen} onClose={handleClose} />;
            break;
        case 'delete':
            modalContent = <DeleteModal isOpen={handleOpen} onClose={handleClose} />;
            break;
        default:
            modalContent = null;
    }

    return (
        <div className="modal">
            {modalContent}
        </div>
    );
};

export default Modal;