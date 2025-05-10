import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

// Import placeholder images for services (replace with your actual images)
import bonehealth from '../assets/service/bonehealth.png';
import jointcare from '../assets/service/jointcare.png';
import leechtherapy from '../assets/service/leechthreapy.png';
import nadiparikshana from '../assets/service/nadiparikshan.png';
import pregcare from '../assets/service/pregcare.jpg';
import stomachhealth from '../assets/service/stomachhealth.jpg';
import swarnaprashana from '../assets/service/swarnaprashan.jpg';
import udwarthanam from '../assets/service/udwarthanam.png';
// Add more imports for other services

// Define your service data
const servicesData = [
    {
        id: 1,
        title: 'Bone Health',
        imageUrl: bonehealth, // Use your imported image
        description: 'Strengthen Bones, Prevent Fractures Ayurveda offers a natural and holistic approach to promoting bone health and preventing fractures. Dr. Purva Verma, a leading Ayurveda practitioner in Kolkata, emphasizes the importance of maintaining strong bones through Ayurvedic therapies and lifestyle modifications. Dietary Support: A balanced diet rich in calcium, magnesium, and vitamin D is essential for bone strength. Ayurvedic herbs like Ashwagandha, Shatavari, and Guggulu are recommended to enhance bone density and support overall skeletal health. These herbs not only nourish the bones but also reduce inflammation, helping prevent conditions like osteoporosis. Lifestyle Practices: Regular physical activity, such as yoga and stretching exercises, improves flexibility, balance, and bone strength, reducing the risk of fractures. Dr. Verma advises incorporating these activities into your daily routine to maintain joint and bone health. Ayurvedic Oils and Therapies: External applications of herbal oils such as Dhanwantharam Thailam and Mahanarayan Oil provide deep nourishment to the bones and joints. Ayurvedic therapies like Panchakarma help detoxify the body, allowing for better nutrient absorption and stronger bones.',
    },
    {
        id: 2,
        title: 'Joint Care',
        imageUrl: jointcare,
        description: 'Dr. Purva Verma, a top Ayurveda practitioner in Kolkata, offers specialized Ayurvedic joint care to help relieve discomfort and improve joint function. Ayurveda provides a holistic approach to joint health by addressing the underlying causes of pain and promoting overall well-being. Dr. Purva Verma’s Ayurvedic joint care includes personalized treatment plans that combine herbal remedies, dietary recommendations, and therapeutic practices. Key treatments involve the use of potent herbs known for their anti-inflammatory and analgesic properties, as well as tailored exercises and therapies to enhance joint flexibility and strength. By focusing on natural and effective solutions, Dr. Purva Verma helps reduce inflammation, alleviate pain, and restore mobility, ensuring a better quality of life. Her expertise in Ayurveda emphasizes not just symptom relief but also long-term joint health and prevention. For those seeking a natural and comprehensive approach to joint care in Kolkata, Dr. Purva Verma offers expert guidance and effective treatments. Discover the benefits of Ayurvedic joint care and regain your comfort and mobility with professional support from a leading Ayurveda practitioner.',
    },
    {
        id: 3,
        title: 'Leech Therapy',
        imageUrl: leechtherapy,
        subheader: 'Jalaukavacharana',
        description: `🩸 Leech Therapy in Kolkata – Natural Healing for Skin & Pain by Dr. Purva Verma Looking for a proven, Ayurvedic solution for skin concerns or pain relief? Dr. Purva Verma, an expert Ayurvedic doctor in Kolkata, offers Leech Therapy—a centuries-old technique known for its remarkable healing benefits! ✅ Benefits of Leech Therapy: ✨ Improves skin health—helps with acne, scars & pigmentation 💪 Eases pain—effective for arthritis, migraines & muscle stiffness 🩸 Detoxifies & boosts circulation—removes toxins for better wellness Each session is carefully designed for maximum effectiveness, ensuring noticeable relief & rejuvenation. 🌿 💰 Cost per therapy: ₹1400 🦠 Leech application charge: ₹200 per leech 📍 Kolkata | 📞 Call now to book your session & experience nature’s healing! #LeechTherapyKolkata #AyurvedicHealing #SkinCareNaturally #PainReliefAyurveda`,
    },
    {
        id: 4,
        title: 'Nadi Parikshana',
        imageUrl: nadiparikshana,
        subheader: 'Ayurvedic pulse diagnosis',
        description: `Experience the Power of Nadi Parikshan – Now at Just ₹500! Discover the root cause of your health concerns through Nadi Parikshan (Pulse Diagnosis) – an ancient Ayurvedic technique that provides deep insights into your body, mind, and energy balance. At just ₹500, Dr. Purva Verma (MD Ayu, Gold Medallist) offers expert Nadi Parikshan in Kolkata to help identify imbalances before they manifest into disease. This diagnostic method helps in: ✅ Detecting Dosha imbalances (Vata, Pitta, Kapha) ✅ Early identification of chronic or hidden health issues ✅ Personalized treatment plans based on your unique body constitution ✅ Natural, root-cause healing with Ayurvedic therapies If you're searching for a reliable “Ayurveda doctor near me” in Kolkata, book your Nadi Parikshan today with Dr. Purva Verma — and take the first step toward holistic well-being.`,
    },
    {
        id: 5,
        title: 'Pregnency Care',
        imageUrl: pregcare,
        description: 'Ayurvedic Pregnancy Care offers a holistic approach to support the health and well-being of both mother and baby throughout pregnancy. Dr. Purva Verma, a top Ayurveda practitioner in Kolkata, specializes in providing personalized Ayurvedic care to ensure a healthy, balanced pregnancy. Ayurveda emphasizes the importance of nurturing both physical and emotional health during pregnancy. Dr. Verma’s approach includes tailored dietary recommendations, herbal supplements, and lifestyle adjustments designed to promote optimal health for both mother and baby. These practices help manage common pregnancy symptoms, support healthy fetal development, and enhance overall maternal well-being. With a focus on balance and harmony, Dr. Verma integrates ancient Ayurvedic wisdom to address individual needs, ensuring a supportive and safe pregnancy journey. Her expertise helps in alleviating issues such as morning sickness, fatigue, and stress, while promoting a positive and healthy pregnancy experience. For expert Ayurvedic Pregnancy Care that prioritizes the health of both mother and baby, consult with Dr. Purva Verma. Visit our website or schedule a consultation to learn how personalized Ayurvedic practices can support a nurturing and healthy pregnancy.',
    },
    {
        id: 6,
        title: 'Stomach Health',
        imageUrl: stomachhealth,
        description: 'Persistent stomach pain can be disruptive and concerning, often indicating underlying issues that warrant attention. Dr. Purva Verma, a distinguished Ayurveda practitioner based in Kolkata, specializes in identifying and treating the root causes of stomach discomfort. Common causes of stomach pain can include digestive disorders such as indigestion, gastritis, or ulcers, which can result from imbalances in diet, stress, or infections. Understanding these factors is crucial in Ayurveda, as it emphasizes a holistic approach to healthcare. Ayurveda, an ancient Indian medicinal practice, views health as a balance between body, mind, and spirit. Dr. Purva Verma integrates this philosophy into her practice, offering personalized treatments that not only address symptoms but also restore overall well-being. Herbal remedies, dietary adjustments, and lifestyle modifications are core components of Ayurvedic treatments aimed at alleviating stomach pain and promoting digestive health. Patients visiting Dr. Verma can expect compassionate care and expert guidance in identifying their specific health needs. Through thorough consultations and diagnostic evaluations, she tailors treatment plans to suit individual requirements, ensuring comprehensive care that targets the root cause of discomfort. Choosing Ayurveda with Dr. Purva Verma means opting for natural solutions that prioritize long-term health benefits.',
    },
    {
        id: 7,
        title: 'Swarna Prashana',
        imageUrl: swarnaprashana,
        subheader: 'Ayurvedic Immunity Booster for Children',
        description: 'WHAT IS SWARNAPRASHANA? "Swarna" means gold, while "Prashna" means to consume. This Ayurvedic method combines tradition and health benefits for your child. It involves administering gold ash (Swarna Bhasma) mixed with honey and herbs. Its administered to children - from newborn babies till 16 years of age. BENEFITS OF SWARNAPRASHANA ✨ 1. Boosts Immunity - Reduces susceptibility to common infections during crucial developmental years. Reduces the risk of allergies and breathing issues 2. Enhances Brain Function – Improves memory, focus, and cognitive development which aids in better verbal skills and expression 3. Promotes healthy growth - Supports optimal physical and mental development. Helps in calming mind and reducing temper tantrums. 4. Encourages Better Sleep & Increases Energy Levels –Improves sleep quality for restful nights and keeps children active and reduces fatigue 5. Improves Digestion & Metabolism – Strengthens the gut and promotes better absorption of nutrients. 6. Aids in Detoxification - It removes toxins and purifies the body by filtering out impurities from the blood and other bodily fluids REGISTER FOR OUR NEXT SWARNA PRASHANA CAMP TODAY! Location - ATDC Purvanchal Laketown, Kolkata Time - 6 PM Onwards',
    },
    {
        id: 8,
        title: 'Udwarthanam',
        imageUrl: udwarthanam,
        subheader: 'Ayurvedic therapeutic massage',
        description: `Detox, Improve Skin Texture Beautifully Udwarthanam is a traditional Ayurvedic massage known for its detoxifying and skin-enhancing benefits. This unique therapy involves the use of herbal powders applied with firm strokes to exfoliate the skin, improve circulation, and reduce toxins in the body. It’s particularly effective for those seeking to improve skin texture, tone, and reduce cellulite. Dr. Purva Verma, the best Ayurveda Practitioner in Kolkata, offers expert Udwarthanam treatments tailored to each individual’s needs. This massage not only helps in detoxification but also supports weight management by reducing excess fat and promoting better lymphatic drainage. Over time, Udwarthanam can lead to firmer, more radiant skin, improved muscle tone, and enhanced overall health. With Dr. Verma’s personalized approach, clients can experience the full benefits of this ancient therapy, aimed at rejuvenating the body and mind. If you're looking for natural ways to detoxify and improve your skin, Udwarthanam is the perfect choice. Trust Dr. Purva Verma, the best Ayurveda Practitioner in Kolkata, to help you achieve glowing skin and a healthier body through this powerful Ayurvedic technique.`,
    }
    // Add more service objects here
];


const Services = () => {
    return (
        <section id="services" className="py-16 px-4 bg-gray-100"> {/* Added section tag, ID, padding, background */}
            <div className="container mx-auto"> {/* Centered content container */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2> {/* Section Heading */}

                {/* Grid to display Service Cards */}
                {/* Changed lg:grid-cols-3 to sm:grid-cols-2, which applies from sm up */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"> {/* Responsive grid */}
                    {servicesData.map(service => (
                        <ServiceCard
                            key={service.id} // Important for lists in React
                            title={service.title}
                            imageUrl={service.imageUrl}
                            description={service.description}
                            subheader={service.subheader}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;