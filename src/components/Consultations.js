import React from 'react';
import OnlineConsultation from './OnlineConsultation'; // Import the OnlineConsultation component
import Locations from './Locations'; // Import the Locations component


const Consultation = () => {
    return (
        <section id="consultations" className="px-4 bg-gray-100 py-8 sm:py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Consultation with an Ayurvedic Doctor in Lake Town, Kolkata</h1>
            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2 lg:items-stretch">
                <div className="h-full lg:min-h-[560px]">
                    <OnlineConsultation />
                </div>
                <div className="h-full lg:min-h-[560px]">
                    <Locations />
                </div>
            </div>
        </section>
    );
};

export default Consultation;