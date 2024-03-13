import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import { MdFileUpload } from "react-icons/md";

const AddModal = ({ isOpen, onClose, handleAddItem }) => {
    const [file, setFile] = useState(null);
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [budget, setBudget] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        const newItem = {
            file,
            destination,
            startDate,
            endDate,
            budget,
            description
        };
        handleAddItem(newItem);
        setFile(null);
        setDestination('');
        setStartDate('');
        setEndDate('');
        setBudget('');
        setDescription('');
        onClose();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header style={{ background: 'black', height: '88px' }}>
                <div>
                    <h4 className="modal-title" style={{ color: 'white' }}>New Travel</h4>
                    <p style={{ color: 'white', fontSize: '14px' }}>Add your travel details below.</p>
                </div>
            </Modal.Header>
            <Modal.Body style={{height: '320px' }}>
                <div className="form-group">
                    <p style={{ fontSize: '14px' }}>Cover Photo</p>
                    <div className="d-flex">
                        <MdFileUpload/>
                        <input type="file" onChange={handleFileChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '14px' }}>Destination Name</label>
                    <input type="text" style={{ width: '450px' }} placeholder="New Destination" name="destination" value={destination}
                           onChange={(e) => setDestination(e.target.value)}/>
                </div>
                <div className="form-group d-flex">
                    <div>
                        <label style={{ fontSize: '14px' }}>Start Date</label>
                        <input type="date" style={{ width: '200px' }} name="startDate" value={startDate}
                               onChange={(e) => setStartDate(e.target.value)}/>
                    </div>
                    <div>
                        <label style={{ fontSize: '14px' }}>End Date</label>
                        <input type="date" style={{ width: '200px' }} name="endDate" value={endDate}
                               onChange={(e) => setEndDate(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '14px' }}>Budget</label>
                    <input type="text" style={{ width: '450px' }} placeholder="New Budget" name="budget" value={budget}
                           onChange={(e) => setBudget(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '14px' }}>Description</label>
                    <input type="text" style={{ width: '450px' }} placeholder="New Description" name="description" value={description}
                           onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'flex-start', height: '58px'  }}>
                <Button variant="light" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={handleAdd} style={{ background: 'black' }}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

const EditModal = ({isOpen, onClose, onEdit, currentItem }) => {
    const [updatedItem, setUpdatedItem] = useState({});

    useEffect(() => {
        if (currentItem) {
            setUpdatedItem(currentItem);
        } else {
            setUpdatedItem({
                file: null,
                destination: '',
                startDate: '',
                endDate: '',
                budget: '',
                description: ''
            });
        }
    }, [currentItem]);

    const handleEdit = () => {
        onEdit(updatedItem);
        onClose();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setUpdatedItem({ ...updatedItem, file: selectedFile });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedItem({ ...updatedItem, [name]: value });
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header style={{ background: 'black', height: '88px' }}>
                <div>
                    <h4 className="modal-title" style={{ color: 'white' }}>Edit Travel</h4>
                    <p style={{ color: 'white', fontSize: '14px' }}>Update your travel details below.</p>
                </div>
            </Modal.Header>
            <Modal.Body style={{ height: '320px' }}>
                <div className="form-group">
                    <p style={{ fontSize: '14px' }}>Cover Photo</p>
                    <div className="d-flex">
                        <MdFileUpload />
                        <input type="file" onChange={handleFileChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '14px' }}>Destination Name</label>
                    <input
                        type="text"
                        style={{ width: '450px' }}
                        name="destination"
                        value={updatedItem.destination}
                        placeholder="New Destination"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group d-flex">
                    <div>
                        <label style={{ fontSize: '14px' }}>Start Date</label>
                        <input
                            type="date"
                            style={{ width: '200px' }}
                            name="startDate"
                            value={updatedItem.startDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label style={{ fontSize: '14px' }}>End Date</label>
                        <input
                            type="date"
                            style={{ width: '200px' }}
                            name="endDate"
                            value={updatedItem.endDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '14px' }}>Budget</label>
                    <input
                        type="text"
                        style={{ width: '450px' }}
                        name="budget"
                        value={updatedItem.budget}
                        placeholder="New Budget"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '14px' }}>Description</label>
                    <input
                        type="text"
                        style={{ width: '450px' }}
                        name="description"
                        value={updatedItem.description}
                        placeholder="New Description"
                        onChange={handleChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'flex-start', height: '58px' }}>
                <Button variant="light" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={handleEdit} style={{ background: 'black' }}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

const DeleteModal = ({isOpen, onClose, onDelete, currentItem}) => {
    const handleDelete = () => {
        onDelete(currentItem);
        onClose();
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header className="text-dark" style={{ background: 'black', height: '88px' }}>
                <h4 style={{ color: 'white' }}>Delete Travel</h4>
            </Modal.Header>
            <Modal.Body>
                <p style={{ fontSize: '16px' }}>Are you sure you want to delete the travel?</p>
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button variant="light" onClick={onClose}>Cancel</Button>
                <Button onClick={handleDelete} style={{ background: 'black' }}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export {AddModal, EditModal, DeleteModal};