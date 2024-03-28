import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import uploadIcon from "../../../assets/uploadIcon.svg";
import './index.css'

const AddModal = ({ isOpen, onClose }) => {
    return (
        <Modal show={isOpen} onHide={onClose} dialogClassName="custom-dialog">
            <Modal.Header className="modal-header">
                <div>
                    <h2>New Travel</h2>
                    <p>Add your travel details below.</p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body">
                    <div className="upload-photo-group">
                        <label>Cover Photo</label>
                        <div className="upload-group">
                            <img src={uploadIcon} alt="uploadIcon"></img>
                            <p className="upload-paragraph">Upload</p>
                        </div>
                    </div>
                    <div>
                        <label>Destination Name</label>
                        <input className="destination" type="text" placeholder="New Destination" name="destination"/>
                    </div>
                    <div className="date-group">
                        <div className="start-date-group">
                            <label>Start Date</label>
                            <input className="sd-input" type="date" name="startDate" />
                        </div>
                        <div className="end-date-group">
                            <label>End Date</label>
                            <input className="ed-input" type="date" name="endDate" />
                        </div>
                    </div>
                    <div>
                        <label>Budget</label>
                        <input className="budget" type="text" placeholder="New Budget" name="budget"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input className="description" type="text" placeholder="New Description" name="description"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button className="cancel-btn" onClick={onClose}>Cancel</Button>
                    <Button className="save-btn">Save</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AddModal;