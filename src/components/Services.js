import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component
import servicesData from '../resourceData/servicesData';

const Services = () => {
    return (
        <section id="services" className="py-16 px-4 bg-gray-100"> {/* Section ID */}
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2> {/* Section Heading */}

                {/* Grid to display Service Cards */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"> {/* Grid layout */}
                    {servicesData.map(service => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            imageUrl={service.imageUrl}
                            description={service.description}
                            subheader={service.subheader} // Pass subheader if it exists in data
                        />
                    ))}
                </div>
            </div>
            <div className="w-2/3 h-px bg-gray-300 mx-auto"></div> {/* Added separator */}
        </section>
    );
};

export default Services;