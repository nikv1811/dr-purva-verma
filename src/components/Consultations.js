import React from 'react';
import OnlineConsultation from './OnlineConsultation'; // Import the OnlineConsultation component
import Locations from './Locations'; // Import the Locations component


const Consultation = () => {
    return (
        <section id="consultations" className=" px-4 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-8">Consultation</h1>
            <OnlineConsultation />
            <Locations />
        </section>
    );
};

export default Consultation;