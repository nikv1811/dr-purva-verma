import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

// Import images for treatments (already in your Services.js data)
import leechtherapy from '../assets/service/leechthreapy.png';
import nadiparikshana from '../assets/service/nadiparikshan.png';
import swarnaprashana from '../assets/service/swarnaprashan.jpg';
import udwarthanam from '../assets/service/udwarthanam.png';

// Define data specifically for Treatments
const treatmentsData = [
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
];


const Treatments = () => {
    return (
        <section id="treatments" className="py-16 px-4 bg-gray-100"> {/* Unique section ID */}
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Treatments</h2> {/* Section Heading */}

                {/* Grid to display Service Cards */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"> {/* Same grid layout */}
                    {treatmentsData.map(treatment => (
                        <ServiceCard
                            key={treatment.id}
                            title={treatment.title}
                            imageUrl={treatment.imageUrl}
                            description={treatment.description}
                            subheader={treatment.subheader}
                        />
                    ))}
                </div>
            </div>
            <div className="w-2/3 h-px bg-gray-300 mx-auto"></div> {/* Added separator */}
        </section>
    );
};

export default Treatments;