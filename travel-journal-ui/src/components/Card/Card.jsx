import travel from '../../assets/login-bg.jpg'
import './index.css'
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card = () => {
    return (
        <div className={"card shadow bg-white rounded-4 border-1 border-dark"}>
            <div className="card-body">
                <div className={"custom-container"}>
                    <img src={travel} className={"rounded-4 border-1 border-dark"} alt={"travel-image"}></img>
                </div>
                <div className={"d-flex flex-column mt-4 mb-2"}>
                    <p className={"fs-3"}>Athens</p>
                    <div className={"color-gray"}>
                        <p>18 Aug 2024</p>
                        <div className={"d-flex flex-row"}>
                            <p>100 lei</p>
                            <ul>
                                <li>
                                    <p>3 Notes</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <button className={"btn w-50 btn-secondary"}>
                        <MdModeEdit />
                    </button>
                    <button className={"btn w-50 btn-secondary"}>
                        <RiDeleteBin6Line />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Card;
