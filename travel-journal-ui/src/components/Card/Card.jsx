import travel from '../../assets/login-bg.jpg'
import './index.css'
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card = ({card}) => {
    return (
        <div className={"card shadow bg-white rounded-4 border-1 border-dark"}>
            <div className="card-body">
                <div className={"custom-container"}>
                    {/*todo: replace 'travel' with card.Image after the backend part is done*/}
                    <img src={travel} className={"rounded-4 border-1 border-dark"} alt={"travel-image"}></img>
                </div>
                <div className={"d-flex flex-column mt-4 mb-2"}>
                    <p className={"fs-3"}>{card.city}</p>
                    <div className={"color-gray"}>
                        <p>{card.travelDate}</p>
                        <div className={"d-flex flex-row"}>
                            <p>{card.price} {card.currency}</p>
                            <ul>
                                <li>
                                    <p>{card.noNotes} Notes</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <button className={"btn w-50 btn-secondary color-button"}>
                        <MdModeEdit style={{color: "black"}}/>
                    </button>
                    <button className={"btn w-50 btn-secondary color-button"}>
                        <RiDeleteBin6Line style={{color: "black"}}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;