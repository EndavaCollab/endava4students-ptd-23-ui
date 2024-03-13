import './index.css'
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";


const Card = ({ item, onEdit, onDelete }) => {
    const { file, destination, startDate, endDate, budget, description } = item;
    const handleEdit = () => {
        onEdit(item);
    };
    const handleDelete = () => {
        onDelete(item);
    };

    return (
        <div className={"card shadow bg-white rounded-4 border-1 border-dark"}>
            <div className="card-body">
                <div className={"custom-container"}>
                    {/*It breaks the app if is not any image uploaded*/}
                    <img src={URL.createObjectURL(file)} className={"rounded-4 border-1 border-dark"} alt={"travel-image"}></img>
                </div>
                <div className={"d-flex flex-column mt-4 mb-2"}>
                    <p className={"fs-3"}>{destination}</p>
                    <div className={"color-gray"}>
                        <p>{startDate} - {endDate}</p>
                        <div className={"d-flex flex-row"}>
                            <p>{budget}</p>
                            <ul>
                                <li>
                                    <p>{description}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <button className={"btn w-50 btn-secondary color-button"} onClick={handleEdit}>
                        <MdModeEdit style={{color: "black"}}/>
                    </button>
                    <button className={"btn w-50 btn-secondary color-button"} onClick={handleDelete}>
                        <RiDeleteBin6Line style={{color: "black"}}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
