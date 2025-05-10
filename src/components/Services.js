import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

// Import placeholder images for services (replace with your actual images)
// import serviceImage1 from '../assets/service1.jpg';
// import serviceImage2 from '../assets/service2.jpg';
// import serviceImage3 from '../assets/service3.jpg';
// import serviceImage4 from '../assets/service4.jpg';
import test from '../assets/convocation.jpg';
// Add more imports for other services

// Define your service data
const servicesData = [
    {
        id: 1,
        title: 'Consultation',
        imageUrl: test, // Use your imported image
        description: 'Personalized Ayurvedic consultations to assess your unique constitution and health concerns.',
    },
    {
        id: 2,
        title: 'Panchakarma',
        imageUrl: test,
        description: 'Traditional detoxification and rejuvenation therapies for deep cleansing and balance.',
    },
    {
        id: 3,
        title: 'Herbal Remedies',
        imageUrl: test,
        description: 'Customized herbal formulations tailored to your specific health needs.',
    },
    {
        id: 4,
        title: 'Diet & Lifestyle',
        imageUrl: test,
        description: 'Guidance on diet and lifestyle adjustments for optimal health and well-being.',
    },
    // Add more service objects here
];


const Services = () => {
    return (
        <section id="services" className="py-16 px-4 bg-gray-100"> {/* Added section tag, ID, padding, background */}
            <div className="container mx-auto"> {/* Centered content container */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2> {/* Section Heading */}

                {/* Grid to display Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
                    {servicesData.map(service => (
                        <ServiceCard
                            key={service.id} // Important for lists in React
                            title={service.title}
                            imageUrl={service.imageUrl}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;