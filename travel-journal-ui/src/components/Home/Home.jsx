import React, {useState} from 'react';
import CardList from "../Card/CardList.jsx";
import NewTravel from "../NewTravel/NewTravel.jsx";
import {AddModal, DeleteModal, EditModal} from "../Modals/Modals.jsx";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };
    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };
    const addItemHandler  = (newItem) => {
        setItems([...items, newItem]);
        closeAddModal();
    };

    const openEditModal = (item) => {
        setSelectedItem(item);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const editItemHandler = (updatedItem) => {
        const updatedItems = items.map((item) => (item === selectedItem ? updatedItem : item));
        setItems(updatedItems);
        closeEditModal();
    };

    const openDeleteModal = (item) => {
        setSelectedItem(item);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const deleteItemHandler = () => {
        const updatedItems = items.filter((item) => item !== selectedItem);
        setItems(updatedItems);
        closeDeleteModal();
    };

    return (
        <div>
            <CardList items={items} onEdit={openEditModal} onDelete={openDeleteModal}/>
            <NewTravel onClick={openAddModal} />
            <AddModal isOpen={isAddModalOpen} onClose={closeAddModal} handleAddItem={addItemHandler }/>
            <EditModal isOpen={isEditModalOpen} onClose={closeEditModal} onEdit={editItemHandler} currentItem={selectedItem}  />
            <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} onDelete={deleteItemHandler} currentItem={selectedItem} />
        </div>
    );
};

export default Home;
