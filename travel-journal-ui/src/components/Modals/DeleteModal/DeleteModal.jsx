import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './index.css'

const DeleteModal = ({ isOpen, onClose }) => {
    return (
        <Modal className="delete-modal" show={isOpen} onHide={onClose}>
            <Modal.Header className="modal-header">
                <h4>Delete Travel</h4>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <p className="delete-paragraph">Are you sure you want to delete the travel?</p>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <Button className="cancel-btn" onClick={onClose}>Cancel</Button>
                <Button className="save-btn">Save</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default DeleteModal;