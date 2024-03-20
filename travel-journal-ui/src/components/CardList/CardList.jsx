import Card from "../Card/Card.jsx";
import '../CardList/index.css'

const CardList = ({entities}) => {
    const renderCards = entities.map((item) => {
        return <div key={item.id} className="col custom-col">
            <Card card={item}/>
        </div>;
    });
    return (
        <div className="d-flex flex-wrap flex-row p-2 gap-4">
            {renderCards}
        </div>
    );
};

export default CardList;
