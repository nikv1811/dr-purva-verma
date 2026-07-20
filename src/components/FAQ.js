import React from 'react';

const faqs = [
    {
        question: 'What are Dr. Purva Verma\'s medical qualifications and experience?',
        answer: 'Dr. Purva Verma is a premier Gold Medalist graduate from the prestigious Sri Sri College of Ayurvedic Science and Research Hospital. She holds a BAMS and MD in Ayurveda with over 8 years of specialized clinical experience in root-cause healing, pulse diagnosis, and advanced Panchakarma.'
    },
    {
        question: 'Where is Swasthyaveda Healthcare clinic located in Kolkata?',
        answer: 'Our clinic is conveniently located at Swasthyaveda Healthcare, 902 Block A, Laketown (Gr. Flr, Green View Apartment, Near Yes Bank), Kolkata, West Bengal 700089. We serve patients across Lake Town, Bangur, Salt Lake, Dum Dum, Newtown, and Greater Kolkata.'
    },
    {
        question: 'What are the clinic timings and consultation fees?',
        answer: 'The clinic is open for in-person consultations from 3:00 PM to 6:00 PM (Sunday to Tuesday, and Friday to Saturday). The standard consultation fee is ₹700. Prior booking is mandatory to avoid waiting periods.'
    },
    {
        question: 'Do you provide online video consultations for patients outside Kolkata?',
        answer: 'Yes, Dr. Purva Verma provides professional online video consultations from 10:00 AM to 8:00 PM on working days. Prescribed authentic Ayurvedic medicines can be home-delivered across West Bengal and India.'
    },
    {
        question: 'Is an appointment mandatory before visiting the clinic?',
        answer: 'Yes. To ensure Dr. Purva Verma can dedicate ample time to each patient’s detailed Nadi Pariksha (pulse diagnosis) and medical history mapping, prior appointments are strictly required. You can book by calling 9903611240.'
    },
    {
        question: 'Can Ayurveda cure severe heel pain without surgery or injections?',
        answer: 'Yes, absolutely. For chronic heel pain (calcaneal spur) and plantar fasciitis, we use an advanced Ayurvedic thermal micro-cauterization technique called Agnikarma. It instantly targets localized inflammation, stimulates deep tissue repair, and provides rapid, drug-free pain relief.'
    },
    {
        question: 'How does Ayurveda manage Sciatica and Slipped Disc pain?',
        answer: 'Sciatica and slipped discs are treated using a multi-pronged approach. We utilize Viddhakarma (therapeutic Marma needling) for rapid nerve decompression, combined with Kati Basti (pooling warm medicated oil on the lower spine) to deeply nourish dry vertebral discs and strengthen back muscles.'
    },
    {
        question: 'What is Janu Basti, and can it prevent knee replacement surgery?',
        answer: 'Janu Basti is a specialized knee joint rejuvenation therapy where warm, customized medicated oils are retained over the knees. It deep-lubricates the joint capsule, restores lost synovial fluid, reduces osteoarthritic friction, and has successfully helped many patients avoid or delay knee replacement surgery.'
    },
    {
        question: 'Do you have effective treatments for Cervical Spondylosis and Frozen Shoulder?',
        answer: 'Yes. We use Greeva Basti for cervical spondylosis and neck stiffness, and Prashta Basti for frozen shoulder. These therapies, paired with localized herbal steam (Swedana) and Marma activation, relieve severe muscle knots, reduce inflammation, and restore full joint range of motion.'
    },
    {
        question: 'Is Leech Therapy available at your Kolkata clinic? What does it treat?',
        answer: 'Yes, Dr. Purva Verma is an expert in authentic, sterile Jalaukavacharana (Leech Therapy). This specialized bio-therapy is highly effective for localized blood purification. It is primarily used to treat varicose veins, stubborn acne, localized swelling, hyperpigmentation, and scalp issues.'
    },
    {
        question: 'Can Ayurveda help manage chronic Psoriasis and Eczema?',
        answer: 'Yes. Ayurveda looks at chronic skin conditions as an imbalance of Pitta dosha and Rakta (blood tissue) mixed with accumulated toxins (Ama). We manage these conditions through targeted bloodletting (Siraveda), soothing scalp therapies (Takradhara), and internal deep detoxification.'
    },
    {
        question: 'What is the Ayurvedic approach to severe hair loss and dandruff?',
        answer: 'Hair fall, alopecia, and stubborn dandruff are addressed by correcting the body\'s internal heat and stress mechanisms. We utilize Shirodhara (head oil pouring) and cooling Shirolepam (medicated scalp paste applications) to calm the nervous system, balance the scalp’s microenvironment, and deeply nourish hair roots.'
    },
    {
        question: 'What is Netra Tarpana, and can it treat digital eye strain or dry eyes?',
        answer: 'Netra Tarpana is an Ayurvedic eye rejuvenation therapy where eyes are bathed in warm, sterile medicated ghee. It is the gold standard treatment for digital eye strain, chronic dry eyes, burning sensations, and blurred vision caused by excessive screen time.'
    },
    {
        question: 'Do you offer Ayurvedic treatments for Tinnitus (ringing ears) and earaches?',
        answer: 'Yes. We offer Karnapurna (pouring warm, herb-infused oils into the ear canal) followed by Karnaswedan (gentle herbal steam). This treatment calms localized Vata dosha, liquefies stubborn ear wax, relieves deep earaches, and reduces the symptoms of tinnitus naturally.'
    },
    {
        question: 'How does Nasya therapy help with chronic Sinusitis and Migraines?',
        answer: 'Nasya involves administering personalized medicated herbal drops directly through the nasal passage. It clears the respiratory channels, flushes out stagnant sinus toxins, reduces the frequency of debilitating migraine attacks, and balances the upper body\'s Kapha and Vata doshas.'
    },
    {
        question: 'Can Ayurveda permanently cure chronic bloating, acidity, and IBS?',
        answer: 'Ayurveda treats digestive disorders by correcting your metabolic fire (Agni). Dr. Purva Verma maps your unique body constitution (Prakriti) and prescribes targeted deep-acting herbal medicines, Basti (colon-cleansing enemas to flush out accumulated toxins), and custom dietary corrections for lasting relief.'
    },
    {
        question: 'Do you provide specialized weight loss treatments?',
        answer: 'Yes, we offer authentic Udwartana, a dry, deep-tissue massage utilizing specialized herbal powders. It stimulates the lymphatic system, accelerates the breakdown of subcutaneous fat, improves skin texture, and trims cellulite naturally without harmful side effects.'
    },
    {
        question: 'What happens during an Ayurvedic therapeutic diet consultation?',
        answer: 'Dr. Purva Verma doesn\'t believe in one-size-fits-all diets. She analyzes your current dosha imbalances and provides a Therapeutic Diet Chart (Ahara) tailored specifically to your body type to manage conditions like PCOS, thyroid imbalances, diabetes, and fatty liver.'
    },
    {
        question: 'What is Garbhasanskar, and when should a pregnant woman start it?',
        answer: 'Garbhasanskar is holistic prenatal care designed to ensure a healthy pregnancy and support the baby’s mental and physical development. It can be started right from planning or early pregnancy. It includes specialized Ayurvedic diet mapping, prenatal tracking, mental wellness strategies, and Vedic mantra alignment.'
    },
    {
        question: 'What is Swarnaprashana, and how does it benefit children?',
        answer: 'Swarnaprashana is an ancient Ayurvedic immunization given to children (ages 0–16). Formulated with pure liquid gold, honey, and intellect-boosting herbs, it is administered monthly to dramatically boost natural immunity, improve memory, enhance focus, and support healthy physical growth.'
    }
];

const FAQ = () => {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };

    return (
        <section id="faq" className="py-16 px-4 bg-gray-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Find answers about Dr. Purva Verma’s qualifications, clinic location, timings, online consultations, and popular Ayurvedic treatments.
                    </p>
                </div>

                <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-4">
                    {faqs.map((item, index) => (
                        <details key={index} className="group border border-gray-200 rounded-xl bg-white p-4 shadow-sm">
                            <summary className="cursor-pointer list-none font-semibold text-gray-800 text-lg flex items-center justify-between gap-4">
                                <span>{item.question}</span>
                                <span className="text-2xl text-gray-500 transition group-open:rotate-45">+</span>
                            </summary>
                            <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
