import React from 'react';
import CardList from "../Card/CardList.jsx";
import NewTravel from "../NewTravel/NewTravel.jsx";

const Home = () => {
    /*NewTravel*/
    const handleNewTravelClick = () => {
        console.log('New travel button clicked!');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <CardList></CardList>
            <NewTravel onClick={handleNewTravelClick} />
        </div>
    );
};

export default Home;
