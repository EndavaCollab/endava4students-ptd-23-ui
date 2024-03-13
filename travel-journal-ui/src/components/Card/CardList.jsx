import Card from "./Card";
import './index.css'

const CardList = ({ items, onEdit, onDelete }) => {
    return (
        <div className="d-flex flex-wrap flex-row p-2 gap-4">
            {items.map((item, index) => (
                <div key={index} className="col custom-col">
                    <Card item={item} onEdit={onEdit} onDelete={onDelete} />
                </div>
            ))}
        </div>
    );
};

export default CardList;
