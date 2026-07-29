import bonehealth from '../assets/service/bonehealth.png';
import jointcare from '../assets/service/jointcare.png';
import pregcare from '../assets/service/pregcare.jpg';
import stomachhealth from '../assets/service/stomachhealth.jpg';

const serviceGroupsData = [
    {
        id: 1,
        slug: 'orthopedics-non-surgical-pain-management',
        title: 'Orthopedics & Non-Surgical Pain Management',
        imageUrl: bonehealth,
        description: 'Non-surgical Ayurvedic care for heel pain, sciatica, joint pain, frozen shoulder, knee pain, and chronic inflammatory pain.',
        services: [
            {
                slug: 'heel-pain-sciatica-spinal-pain',
                title: 'Treatment for Heel Pain, Sciatica & Spinal Pain',
                shortDescription: 'Fast, non-surgical relief from chronic heel pain, sciatica, and lower back pain using Agnikarma.',
                description: 'Consult leading Kolkata doctor Dr. Purva Verma for fast, non-surgical relief from chronic heel pain (calcaneal spur), sciatica, and lower back pain. Using authentic Agnikarma (thermal cauterization), we target deep-seated nerve pain and inflammation to restore natural mobility.',
                highlights: ['Agnikarma therapy', 'Targeted nerve pain relief', 'Non-surgical mobility support']
            },
            {
                slug: 'joint-pain-slip-disc-frozen-shoulder',
                title: 'Treatment for Joint Pain, Slip Disc & Frozen Shoulder',
                shortDescription: 'Rapid relief from chronic joint pain, slipped discs, frozen shoulder, and osteoarthritis through Viddhakarma.',
                description: 'Get rapid relief from chronic joint pain, slipped discs, frozen shoulder, and osteoarthritis. Dr. Purva Verma specializes in Viddhakarma (therapeutic needling), a highly effective, non-surgical Marma therapy that targets pain receptors and relieves stiffness safely.',
                highlights: ['Viddhakarma therapy', 'Non-surgical pain relief', 'Marma-based treatment']
            },
            {
                slug: 'knee-pain-osteoarthritis',
                title: 'Treatment for Knee Pain & Osteoarthritis',
                shortDescription: 'Personalized knee pain treatment in Kolkata using Janu Basti to support natural movement.',
                description: 'Avoid knee replacement surgery with personalized knee pain treatment in Kolkata. Our targeted Janu Basti therapy deep-lubricates the knee joint, reduces friction and swelling, and restores painless walking and knee flexibility naturally by balancing Vata.',
                highlights: ['Janu Basti', 'Knee joint oil pooling', 'Natural flexibility support']
            },
            {
                slug: 'lower-back-pain-slipped-disc',
                title: 'Treatment for Lower Back Pain & Slipped Disc',
                shortDescription: 'Kati Basti helps strengthen the spine and improve mobility for chronic lower back pain.',
                description: 'Find lasting relief from chronic lower back pain, lumbar spondylosis, and slipped discs. Kati Basti involves pooling warm medicated oil on the lower spine to strengthen spinal muscles, improve mobility, and balance Vata naturally.',
                highlights: ['Kati Basti', 'Lower back oil pooling', 'Spinal muscle support']
            },
            {
                slug: 'neck-pain-cervical-spondylosis',
                title: 'Treatment for Neck Pain & Cervical Spondylosis',
                shortDescription: 'Specialized Greeva Basti treatment for neck stiffness and cervical spondylosis.',
                description: 'Relieve chronic neck stiffness, shoulder tension, and cervical spondylosis. Our specialized Greeva Basti treatment pools warm herbal oils over the cervical spine to nourish muscles, improve neck mobility, and soothe compressed nerves naturally.',
                highlights: ['Greeva Basti', 'Neck oil pooling', 'Nerve soothing therapy']
            },
            {
                slug: 'shoulder-pain-frozen-shoulder',
                title: 'Treatment for Shoulder Pain & Frozen Shoulder',
                shortDescription: 'Prashta Basti helps restore movement in shoulder joints and reduce stiffness.',
                description: 'Dramatically improve range of motion and relieve chronic shoulder pain. Our Prashta Basti therapy targets the rotator cuff and shoulder joints with warm medicated oils, deeply nourishing the joint tissues to treat frozen shoulder and stiffness safely.',
                highlights: ['Prashta Basti', 'Shoulder oil pooling', 'Frozen shoulder support']
            },
            {
                slug: 'non-surgical-chronic-pain-management-clinic',
                title: 'Non-Surgical Chronic Pain Management Clinic',
                shortDescription: 'A comprehensive multi-therapy package for severe arthritis, inflammation, and nerve pain.',
                description: 'A comprehensive, multi-therapy package for severe arthritis, chronic inflammation, and nerve pain. Combines Agnikarma, Viddhakarma, Abhyangam, Swedana, and customized pain-relief bastis for holistic recovery under Kolkata’s top experts.',
                highlights: ['Multi-therapy recovery', 'Holistic pain care', 'Customized rehabilitation']
            },
            {
                slug: 'muscle-swelling-localized-inflammation',
                title: 'Treatment for Muscle Swelling & Localized Inflammation',
                shortDescription: 'Rapidly reduce localized muscle swelling, joint inflammation, and pain.',
                description: 'Rapidly reduce localized muscle swelling, joint inflammation, and pain. We combine warm medicated decoction pouring (Sthanika Dhara) with cooling herbal paste applications (Sthanika Lepam) to deeply detoxify tissues and soothe localized pain.',
                highlights: ['Sthanika Dhara', 'Sthanika Lepam', 'Localized detox support']
            },
            {
                slug: 'ayurvedic-herbal-bandaging-sprains-swelling',
                title: 'Ayurvedic Herbal Bandaging for Sprains & Swelling',
                shortDescription: 'Accelerate healing for ligament sprains, tendon swelling, and joint stiffness.',
                description: 'Accelerate healing for ligament sprains, tendon swelling, and severe joint stiffness. Upanaha involves applying warm, medicated herbal poultices and bandages to improve local blood circulation, draw out toxins, and relieve pain.',
                highlights: ['Upanaha therapy', 'Herbal poultice application', 'Improved circulation']
            }
        ]
    },
    {
        id: 2,
        slug: 'skin-hair-advanced-blood-purification',
        title: 'Skin, Hair & Advanced Blood Purification',
        imageUrl: jointcare,
        description: 'Ayurvedic treatments for varicose veins, acne, psoriasis, hair loss, scalp care, and advanced blood purification.',
        services: [
            {
                slug: 'varicose-veins-acne-skin-pigmentation',
                title: 'Treatment for Varicose Veins, Acne & Skin Pigmentation',
                shortDescription: 'Sterile Jalauka therapy for blood purification and chronic skin conditions.',
                description: 'Looking for a permanent cure for varicose veins, stubborn acne, or eczema? Dr. Purva Verma offers sterile Jalauka (Leech Therapy/Jalaukavacharana) to purify blood, reduce localized venous congestion, and heal chronic skin diseases safely.',
                highlights: ['Jalauka therapy', 'Blood purification', 'Skin disease support']
            },
            {
                slug: 'hair-loss-psoriasis-scalp-care',
                title: 'Treatment for Hair Loss, Psoriasis & Scalp Care',
                shortDescription: 'Cooling Takradhara therapy to balance Pitta, calm the mind, and nourish the scalp.',
                description: 'Stop chronic hair fall, premature greying, dandruff, and scalp psoriasis. Takradhara is a cooling therapy where medicated buttermilk is poured over the scalp to balance Pitta, calm the mind, relieve high stress, and nourish hair follicles.',
                highlights: ['Takradhara', 'Scalp nourishment', 'Stress relief']
            },
            {
                slug: 'ayurvedic-blood-purification-detox-gout',
                title: 'Ayurvedic Blood Purification & Detox for Gout',
                shortDescription: 'Siraveda is used to purify localized blood toxins and balance Pitta dosha.',
                description: 'Highly effective treatment for chronic skin allergies, gout, hypertension, and high uric acid. Siraveda (therapeutic bloodletting) purifies localized blood toxins, balances Pitta dosha, and stimulates the body’s natural healing systems.',
                highlights: ['Siraveda', 'Therapeutic bloodletting', 'Pitta balancing']
            },
            {
                slug: 'migraine-dandruff-sleep-disorders',
                title: 'Treatment for Migraine, Dandruff & Sleep Disorders',
                shortDescription: 'Shirolepam applies a cooling medicated paste to nourish the scalp and calm the mind.',
                description: 'Soothe severe migraines, burning scalp, dandruff, and insomnia. Shirolepam applies a cooling, nutrient-dense medicated herbal paste over the scalp to deeply nourish the brain, balance Pitta, and provide deep mental relaxation.',
                highlights: ['Shirolepam', 'Scalp nourishment', 'Mental relaxation']
            },
            {
                slug: 'ayurvedic-facial-natural-skin-glow-anti-aging',
                title: 'Ayurvedic Facial for Natural Skin Glow & Anti-Aging',
                shortDescription: 'Specialized Ayurvedic facials using Navara rice and organic elixirs for radiant skin.',
                description: 'Restore your skin’s natural radiance and cure dullness, fine lines, or hyperpigmentation. Using pure Navara rice and organic elixirs, our specialized Ayurvedic facials detoxify the skin and restore a healthy, youthful glow safely.',
                highlights: ['Navara facial', 'Skin detox', 'Anti-ageing support']
            }
        ]
    },
    {
        id: 3,
        slug: 'stress-sleep-mental-wellness',
        title: 'Stress, Sleep & Mental Wellness',
        imageUrl: pregcare,
        description: 'Ayurvedic therapies for anxiety, high stress, insomnia, relaxation, and full-body rejuvenation.',
        services: [
            {
                slug: 'anxiety-high-stress-insomnia',
                title: 'Treatment for Anxiety, High Stress & Insomnia',
                shortDescription: 'Shirodhara offers a soothing flow of medicated oil to calm the mind and nervous system.',
                description: 'Rejuvenate your nervous system and restore deep sleep. Shirodhara involves a continuous, soothing flow of warm medicated herbal oil over the forehead (third eye). Highly recommended for relieving anxiety, mental exhaustion, and high stress.',
                highlights: ['Shirodhara', 'Third-eye therapy', 'Stress relief']
            },
            {
                slug: 'full-body-rejuvenation-relaxation',
                title: 'Ayurvedic Full Body Rejuvenation & Relaxation',
                shortDescription: 'A therapeutic, warm medicated pouring treatment that balances Pitta and restores energy.',
                description: 'Experience deep physical relaxation and full-body detoxification. This therapeutic, warm medicated liquid pouring balances Pitta dosha, removes severe body exhaustion, improves skin texture, and builds strong daily immunity.',
                highlights: ['Dhara therapy', 'Full body detox', 'Immunity support']
            },
            {
                slug: 'full-body-medicated-oil-massage',
                title: 'Full Body Medicated Oil Massage for Pain & Stress',
                shortDescription: 'Rejuvenating Abhyangam that improves circulation and relieves joint stiffness.',
                description: 'Rejuvenate your body with authentic Abhyangam. Using warm, customized medicated oils, this full-body massage improves blood circulation, relieves overall joint stiffness, promotes deep lymphatic drainage, and calms Vata dosha.',
                highlights: ['Abhyangam', 'Full body massage', 'Vata balancing']
            },
            {
                slug: 'ayurvedic-foot-therapy-insomnia-eye-strain',
                title: 'Ayurvedic Foot Therapy for Insomnia & Eye Strain',
                shortDescription: 'Padabhyangam uses a Kansa wand and medicated ghee to promote deep relaxation.',
                description: 'Experience profound relaxation and better sleep. Padabhyangam uses a traditional Kansa metal wand and medicated herbal ghee to massage vital reflex points on the feet, helping to improve eyesight, reduce anxiety, and cure insomnia.',
                highlights: ['Padabhyangam', 'Kansa wand', 'Relaxation support']
            }
        ]
    },
    {
        id: 4,
        slug: 'eye-ear-head-rejuvenation',
        title: 'Eye, Ear & Head Rejuvenation (ENT)',
        imageUrl: stomachhealth,
        description: 'Ayurvedic care for dry eyes, dark circles, sinusitis, tinnitus, ear issues, respiratory congestion, and head health.',
        services: [
            {
                slug: 'dry-eyes-digital-eye-strain',
                title: 'Treatment for Dry Eyes & Digital Eye Strain',
                shortDescription: 'Netra Tarpana and Netra Seka help strengthen optic nerves and restore vision clarity.',
                description: 'Perfect for professionals suffering from digital eye strain, blurred vision, dry eyes, or high myopia. Using sterile, warm medicated ghee (Netra Tarpana) and herbal eye washes, we strengthen the optic nerves and restore vision clarity.',
                highlights: ['Netra Tarpana', 'Netra Seka', 'Vision clarity support']
            },
            {
                slug: 'dark-circles-puffiness-eye-redness',
                title: 'Treatment for Dark Circles, Puffiness & Eye Redness',
                shortDescription: 'Bidalaka and Bandhan soothe tired eyes and refresh the under-eye area.',
                description: 'Soothe and refresh tired eyes. We combine organic herbal eye paste applications (Bidalaka) and eye bandaging (Bandhan) to cure stubborn under-eye dark circles, puffiness, fine lines, redness, and high intraocular pressure naturally.',
                highlights: ['Netra Bidalaka', 'Bandhan & Pindi', 'Under-eye refresh']
            },
            {
                slug: 'sinusitis-allergies-chronic-migraine',
                title: 'Treatment for Sinusitis, Allergies & Chronic Migraine',
                shortDescription: 'Nasya clears congestion and balances the upper body to reduce recurring migraine attacks.',
                description: 'Highly effective Ayurvedic treatment for chronic sinusitis, allergic rhinitis, frequent headaches, and migraines. Nasya involves administering medicated herbal drops through the nose to clear congestion and balance the upper body.',
                highlights: ['Nasya', 'Medicated nasal administration', 'Upper body balance']
            },
            {
                slug: 'ear-treatment-tinnitus-earache',
                title: 'Ayurvedic Ear Treatment for Tinnitus & Earache',
                shortDescription: 'Karnapurna and Karnaswedan nourish the ears and reduce ringing and earaches.',
                description: 'Nourish and clear your ear canals naturally. This treatment uses warm medicated herbal oils (Karnapurna) followed by gentle herbal steam (Karnaswedan) to treat tinnitus (ringing in ears), chronic earaches, jaw pain, and hearing loss.',
                highlights: ['Karnapurna', 'Karnaswedan', 'Ear canal nourishment']
            },
            {
                slug: 'ear-infection-itching-treatment',
                title: 'Ayurvedic Ear Infection & Itching Treatment',
                shortDescription: 'Karnadhoopan uses warm medicinal herbal smoke to naturally disinfect the ear canal.',
                description: 'Eliminate stubborn ear itching, discharge, and wax buildup. Karnadhoopan utilizes sterile, warm medicinal herbal smoke to naturally disinfect the ear canal, cure ear infections, and maintain optimal ear health safely.',
                highlights: ['Karnadhoopan', 'Ear fumigation', 'Ear infection relief']
            },
            {
                slug: 'therapeutic-head-massage-sleep-hair-health',
                title: 'Therapeutic Head Massage for Sleep & Hair Health',
                shortDescription: 'Warm Ayurvedic oils help relieve tension, migraines, dandruff, and hair loss.',
                description: 'Relieve mental tension and boost scalp health. This specialized head massage utilizes warm, customized Ayurvedic oils to treat insomnia, severe migraines, dandruff, and premature hair loss, while deeply relaxing the mind.',
                highlights: ['Shiroabhyangam', 'Head oil massage', 'Scalp care']
            },
            {
                slug: 'respiratory-congestion-cough',
                title: 'Ayurvedic Treatment for Respiratory Congestion & Cough',
                shortDescription: 'Dhoompan uses medicated smoke inhalation to clear airways and balance Kapha.',
                description: 'Clear your airways and soothe your throat naturally. Dhoompan involves inhaling therapeutic, herbal medicated smoke to balance Kapha, relieve chronic cough, asthma, throat irritation, and sinus congestion effectively.',
                highlights: ['Dhoompan', 'Medicated smoke inhalation', 'Respiratory relief']
            }
        ]
    },
    {
        id: 5,
        slug: 'digestive-detox-lifestyle-management',
        title: 'Digestive, Detox & Lifestyle Management',
        imageUrl: bonehealth,
        description: 'Ayurvedic detox, colon cleanse, weight loss, dietary planning, and seasonal immunity care.',
        services: [
            {
                slug: 'colon-cleanse-constipation-joint-pain',
                title: 'Ayurvedic Colon Cleanse for Constipation & Joint Pain',
                shortDescription: 'Basti Panchakarma deeply detoxifies the colon and balances Vata.',
                description: 'Basti (medicated herbal enema) is the gold standard of Panchakarma. It deeply detoxifies the colon, permanently cures chronic constipation, and balances Vata dosha—providing deep relief from arthritis, sciatica, and chronic pain.',
                highlights: ['Basti Panchakarma', 'Medicated enema', 'Deep colon detox']
            },
            {
                slug: 'weight-loss-therapy-cellulite-reduction',
                title: 'Ayurvedic Weight Loss Therapy & Cellulite Reduction',
                shortDescription: 'Udwartana is a dry, deep-tissue massage that supports natural weight loss and skin toning.',
                description: 'Lose weight and detoxify your body naturally. Udwartana is a dry, deep-tissue massage using specialized herbal powders. It stimulates lymphatic drainage, burns stubborn subcutaneous fat, reduces cellulite, and tones the skin.',
                highlights: ['Udwartana', 'Dry herbal massage', 'Cellulite reduction']
            },
            {
                slug: 'herbal-steam-bath-body-detox',
                title: 'Ayurvedic Herbal Steam Bath for Body Detox',
                shortDescription: 'Bashpa Swedan uses personalized herbal steam to improve circulation and soften the skin.',
                description: 'Flush out deep-seated body toxins, improve blood circulation, and relieve overall muscle stiffness. Bashpa Swedan uses personalized herbal steam to dilate body channels, boost metabolism, and soften the skin.',
                highlights: ['Bashpa Swedan', 'Steam bath', 'Body detox']
            },
            {
                slug: 'targeted-muscle-joint-pain-healing-treatment',
                title: 'Targeted Muscle & Joint Pain Healing Treatment',
                shortDescription: 'Pichu therapy places warm medicated oils over affected areas for focused relief.',
                description: 'Nourish sore muscles and painful joints. Pichu involves placing a sterile cotton pad soaked in warm medicated Ayurvedic oils over affected areas—providing highly targeted relief for knee pain, backaches, and joint stiffness.',
                highlights: ['Pichu therapy', 'Oil pooling', 'Targeted pain relief']
            },
            {
                slug: 'diet-plan-pcos-diabetes-digestive-health',
                title: 'Diet Plan for PCOS, Diabetes & Digestive Health',
                shortDescription: 'Personalized Ayurvedic therapeutic nutrition and lifestyle charts based on your unique body type.',
                description: 'Cure the root cause of metabolic disorders. Dr. Purva Verma provides personalized, Ayurvedic therapeutic nutrition and lifestyle charts based on your unique body type (Prakriti) to effectively manage diabetes, thyroid, and weight.',
                highlights: ['Prakriti & Ahara', 'Therapeutic diet', 'Metabolic support']
            },
            {
                slug: 'panchakarma-seasonal-detox-immunity-package',
                title: 'Panchakarma Seasonal Detox & Immunity Package',
                shortDescription: 'Customized seasonal Panchakarma to balance doshas and boost natural immunity.',
                description: 'Keep your body free from seasonal allergies and toxin buildup. Our customized seasonal Panchakarma packages balance your doshas, flush out deep tissue toxins, and dramatically boost your natural immunity and energy levels.',
                highlights: ['Ritu Shodhana', 'Seasonal Panchakarma', 'Immunity support']
            }
        ]
    },
    {
        id: 6,
        slug: 'maternal-pediatrics-custom-services',
        title: 'Maternal, Pediatrics & Custom Services',
        imageUrl: stomachhealth,
        description: 'Prenatal care, pediatric immunity programs, general consultations, medicine delivery, cupping, and yoga therapy.',
        services: [
            {
                slug: 'garbhasanskar-class-healthy-pregnancy-prenatal-care',
                title: 'Garbhasanskar Class - Healthy Pregnancy & Prenatal Care',
                shortDescription: 'Complete Garbhasanskar care for maternal and fetal wellness.',
                description: 'Ensure a healthy, natural pregnancy and baby development. Dr. Purva Verma offers complete Garbhasanskar care, including tailored diet plans, prenatal yoga, stress management, and Vedic mantra sessions for maternal and fetal wellness.',
                highlights: ['Garbhasanskar', 'Prenatal yoga', 'Vedic mantra support']
            },
            {
                slug: 'swarnaprashana-kids-immunity-brain-booster',
                title: 'Swarnaprashana - Kids Immunity & Brain Booster',
                shortDescription: 'A premier Ayurvedic immunization therapy using pure gold, honey, and brain-boosting herbs.',
                description: 'Safeguard your child’s health naturally. Swarnaprashana is a premier Ayurvedic immunization therapy using pure gold, honey, and brain-boosting herbs to enhance memory, intellect, digestion, and overall immunity in children.',
                highlights: ['Swarnaprashana', 'Kids immunity', 'Memory and focus support']
            },
            {
                slug: 'ayurvedic-doctor-consultation-dr-purva-verma',
                title: 'Ayurvedic Doctor Consultation - Dr. Purva Verma',
                shortDescription: 'Root-cause diagnosis and treatment for chronic disease from an experienced Ayurvedic doctor.',
                description: 'Consult Dr. Purva Verma (BAMS, MD Ayu), a Gold Medalist Ayurvedic doctor with over 8 years of experience. Certified in Nadi Pariksha and Panchakarma, she provides expert root-cause diagnosis and treatment for chronic diseases.',
                highlights: ['OPD consultation', 'Nadi Pariksha', 'Panchakarma expertise']
            },
            {
                slug: 'ayurvedic-medicine-home-delivery-kolkata',
                title: 'Ayurvedic Medicine Home Delivery in Kolkata',
                shortDescription: 'Order authentic Ayurvedic medicines from trusted brands with reliable home delivery.',
                description: 'Order authentic, high-quality Ayurvedic medicines from leading brands like Kottakkal, Vaidyaratnam, and Dhootapapeshwar. Fast, reliable home delivery across Kolkata, straight from our clinic pharmacy.',
                highlights: ['Home delivery', 'Trusted brands', 'Clinic pharmacy access']
            },
            {
                slug: 'cupping-therapy-back-pain-blood-circulation',
                title: 'Cupping Therapy for Back Pain & Blood Circulation',
                shortDescription: 'Professional Hijama therapy for deep pain relief and detoxification.',
                description: 'Professional cupping therapy (Hijama) for deep pain relief and detoxification. It improves localized blood flow, relieves chronic back pain, neck stiffness, and muscle tension, and promotes faster cellular repair naturally.',
                highlights: ['Hijama', 'Cupping therapy', 'Detox support']
            },
            {
                slug: 'therapeutic-yoga-pranayama-stress-pcos',
                title: 'Therapeutic Yoga & Pranayama for Stress & PCOS',
                shortDescription: 'Customized yoga and breathing exercises tailored to balance doshas and support PCOS management.',
                description: 'Manage modern lifestyle disorders safely. Our customized therapeutic yoga, asanas, and breathing exercises (pranayama) are tailored to balance your doshas, manage stress, improve flexibility, and control PCOS.',
                highlights: ['Yoga therapy', 'Pranayama', 'PCOS support']
            }
        ]
    }
];

export default serviceGroupsData;
