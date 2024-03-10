import Card from "./Card";
import './index.css'

const CardList = () => {
    return (
        //todo: for through all components and display them
        <div className="d-flex flex-wrap flex-row p-2 gap-4">
            <div className="col custom-col">
                <Card/>
            </div>
            <div className="col custom-col">
                <Card/>
            </div>
            <div className="col custom-col">
                <Card/>
            </div>
            <div className="col custom-col">
                <Card/>
            </div>
            <div className="col custom-col">
                <Card/>
            </div>
        </div>
    );
};

export default CardList;
