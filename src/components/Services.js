import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

// Import images for services
import bonehealth from '../assets/service/bonehealth.png';
import jointcare from '../assets/service/jointcare.png';
import pregcare from '../assets/service/pregcare.jpg';
import stomachhealth from '../assets/service/stomachhealth.jpg';

// Define data specifically for Services
const servicesData = [
    {
        id: 1,
        title: 'Bone Health',
        imageUrl: bonehealth,
        description: 'Strengthen Bones, Prevent Fractures Ayurveda offers a natural and holistic approach to promoting bone health and preventing fractures. Dr. Purva Verma, a leading Ayurveda practitioner in Kolkata, emphasizes the importance of maintaining strong bones through Ayurvedic therapies and lifestyle modifications. Dietary Support: A balanced diet rich in calcium, magnesium, and vitamin D is essential for bone strength. Ayurvedic herbs like Ashwagandha, Shatavari, and Guggulu are recommended to enhance bone density and support overall skeletal health. These herbs not only nourish the bones but also reduce inflammation, helping prevent conditions like osteoporosis. Lifestyle Practices: Regular physical activity, such as yoga and stretching exercises, improves flexibility, balance, and bone strength, reducing the risk of fractures. Dr. Verma advises incorporating these activities into your daily routine to maintain joint and bone health. Ayurvedic Oils and Therapies: External applications of herbal oils such as Dhanwantharam Thailam and Mahanarayan Oil provide deep nourishment to the bones and joints. Ayurvedic therapies like Panchakarma help detoxify the body, allowing for better nutrient absorption and stronger bones.',
    },
    {
        id: 2,
        title: 'Joint Care',
        imageUrl: jointcare,
        description: 'Dr. Purva Verma, a top Ayurveda practitioner in Kolkata, offers specialized Ayurvedic joint care to help relieve discomfort and improve joint function. Ayurveda provides a holistic approach to joint health by addressing the underlying causes of pain and promoting overall well-being. Dr. Purva Verma’s Ayurvedic joint care includes personalized treatment plans that combine herbal remedies, dietary recommendations, and therapeutic practices. Key treatments involve the use of potent herbs known for their anti-inflammatory and analgesic properties, as well as tailored exercises and therapies to enhance joint flexibility and strength. By focusing on natural and effective solutions, Dr. Purva Verma helps reduce inflammation, alleviate pain, and restore mobility, ensuring a better quality of life. Her expertise in Ayurveda emphasizes not just symptom relief but also long-term joint health and prevention. For those seeking a natural and comprehensive approach to joint care in Kolkata, Dr. Purva Verma offers expert guidance and effective treatments. Discover the benefits of Ayurvedic joint care and regain your comfort and mobility with professional support from a leading Ayurveda practitioner.',
    },
    {
        id: 5,
        title: 'Pregnancy Care', // Corrected typo from Pregnency
        imageUrl: pregcare,
        description: 'Ayurvedic Pregnancy Care offers a holistic approach to support the health and well-being of both mother and baby throughout pregnancy. Dr. Purva Verma, a top Ayurveda practitioner in Kolkata, specializes in providing personalized Ayurvedic care to ensure a healthy, balanced pregnancy. Ayurveda emphasizes the importance of nurturing both physical and emotional health during pregnancy. Dr. Verma’s approach includes tailored dietary recommendations, herbal supplements, and lifestyle adjustments designed to promote optimal health for both mother and baby. These practices help manage common pregnancy symptoms, support healthy fetal development, and enhance overall maternal well-being. With a focus on balance and harmony, Dr. Verma integrates ancient Ayurvedic wisdom to address individual needs, ensuring a supportive and safe pregnancy journey. Her expertise helps in alleviating issues such as morning sickness, fatigue, and stress, while promoting a positive and healthy pregnancy experience. For expert Ayurvedic Pregnancy Care that prioritizes the health of both mother and baby, consult with Dr. Purva Verma. Visit our website or schedule a consultation to learn how personalized Ayurvedic practices can support a nurturing and healthy pregnancy.',
    },
    {
        id: 6,
        title: 'Stomach Health',
        imageUrl: stomachhealth,
        description: 'Persistent stomach pain can be disruptive and concerning, often indicating underlying issues that warrant attention. Dr. Purva Verma, a distinguished Ayurveda practitioner based in Kolkata, specializes in identifying and treating the root causes of stomach discomfort. Common causes of stomach pain can include digestive disorders such as indigestion, gastritis, or ulcers, which can result from imbalances in diet, stress, or infections. Understanding these factors is crucial in Ayurveda, as it emphasizes a holistic approach to healthcare. Ayurveda, an ancient Indian medicinal practice, views health as a balance between body, mind, and spirit. Dr. Purva Verma integrates this philosophy into her practice, offering personalized treatments that not only address symptoms but also restore overall well-being. Herbal remedies, dietary adjustments, and lifestyle modifications are core components of Ayurvedic treatments aimed at alleviating stomach pain and promoting digestive health. Patients visiting Dr. Verma can expect compassionate care and expert guidance in identifying their specific health needs. Through thorough consultations and diagnostic evaluations, she tailors treatment plans to suit individual requirements, ensuring comprehensive care that targets the root cause of discomfort. Choosing Ayurveda with Dr. Purva Verma means opting for natural solutions that prioritize long-term health benefits.',
    }
];

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