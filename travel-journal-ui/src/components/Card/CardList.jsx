import Card from "./Card";
import './index.css'
import type CardModel from "../../Models/CardModel.jsx";
const CardList = () => {
    // todo: call api to get entitiesMock
    let entitiesMock : Array<CardModel> = [
        {id: "1", city: "Craiova", travelDate: "miercuri, 13 martie 2024", noNotes: "6", price: "200", currency: "lei"},
        {id: "2", city: "Pitesti", travelDate: "miercuri, 13 martie 2024", noNotes: "12", price: "245", currency: "lei"},
        {id: "3", city: "Bucuresti", travelDate: "miercuri, 13 martie 2024", noNotes: "2", price: "12", currency: "lei"},
        {id: "4", city: "Orsova", travelDate: "miercuri, 13 martie 2024", noNotes: "5", price: "100", currency: "lei"},
        {id: "5", city: "Iasi", travelDate: "miercuri, 13 martie 2024", noNotes: "4", price: "200", currency: "lei"},
        {id: "6", city: "Timisoara", travelDate: "miercuri, 13 martie 2024", noNotes: "1", price: "400", currency: "lei"},
        {id: "7", city: "Sibiu", travelDate: "miercuri, 13 martie 2024", noNotes: "2", price: "564", currency: "lei"},
        {id: "8", city: "CLuj-Napoca", travelDate: "miercuri, 13 martie 2024", noNotes: "3", price: "1000", currency: "lei"}
    ];
    let renderCards = entitiesMock.map(function(item) {
        return <div className="col custom-col">
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
