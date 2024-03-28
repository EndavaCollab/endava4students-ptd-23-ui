import React from 'react';
import './index.css';
import placeholder from "../../assets/placeholderImage.svg";

const TravelDetails = () => {

    //TO DO - to be changed when we will grab the data from BE
    //mock data for demonstration purposes
    const mockTravelDetails = {
        id: "1",
        image: placeholder,
        city: 'Athens',
        startTravelDate: '18 Aug 2023',
        endTravelDate: '20 Aug 2023',
        notes: '3 notes',
        description: 'Stepping into Athens felt like stepping into history itself. The Acropolis, with its Parthenon standing tall, whispered tales of ancient glory. Plaka\'s alleys, adorned with bougainvillaeas, led me to delectable spanakopita. The National Archaeological Museum brought gods and heroes to life through sculptures and relics. Monastiraki Square buzzed with art and energy, a vibrant heart. Dinner at a taverna filled me with moussaka and music. Now, gazing at the illuminated Acropolis from my Airbnb, I\'m grateful for this plunge into Athens\' captivating blend of old and new.'
    };

    mockTravelDetails.travelDate = `${mockTravelDetails.startTravelDate} to ${mockTravelDetails.endTravelDate}`;

    return (
        <div className="travel-details">
            <div className="header">
                <div className="city">{mockTravelDetails.city}</div>
                <div className="details">
                    <div className="dates">{mockTravelDetails.travelDate}</div>
                    <div className="date-separator">•</div>
                    <div className="notes">{mockTravelDetails.notes}</div>
                </div>
            </div>

            <div>
                <img src={mockTravelDetails.image} alt="placeholder" />
            </div>

            <div className="description">
                <p>{mockTravelDetails.description}</p>
            </div>

            <div className="notes-container">
                <div className="button-wrapper">
                    <button className="new-note-button"> + New Note</button>
                </div>
                <div className="notes-table">
                    <div>No notes available yet.</div>
                </div>
            </div>

        </div>
    );
}

export default TravelDetails;
