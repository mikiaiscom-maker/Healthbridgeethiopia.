// Comprehensive Medicines Database A-Z
const medicinesData = [
    // A
    {
        id: "aspirin",
        name: "Aspirin",
        genericName: "Acetylsalicylic Acid",
        uses: [
            "Pain relief (headaches, muscle aches, toothaches)",
            "Fever reduction",
            "Blood clot prevention (low dose)",
            "Heart attack and stroke prevention"
        ],
        howItWorks: "Aspirin works by blocking the production of prostaglandins, which are chemicals that cause pain, inflammation, and fever. In low doses, it also prevents blood platelets from clumping together, reducing the risk of blood clots.",
        sideEffects: [
            "Stomach upset or pain",
            "Nausea or vomiting",
            "Heartburn",
            "Increased risk of bleeding",
            "Allergic reactions (rare)"
        ],
        warnings: [
            "Do not give to children under 16 (risk of Reye's syndrome)",
            "Avoid if you have stomach ulcers or bleeding disorders",
            "May interact with blood thinners",
            "Take with food to reduce stomach irritation",
            "Inform doctor before surgery"
        ],
        whenToSeeDoctor: [
            "If you experience severe stomach pain",
            "If you notice signs of bleeding",
            "If you have ringing in ears or hearing loss",
            "If you have signs of allergic reaction"
        ]
    },
    {
        id: "amoxicillin",
        name: "Amoxicillin",
        genericName: "Amoxicillin",
        uses: [
            "Bacterial infections (ear infections, throat infections, urinary tract infections)",
            "Pneumonia",
            "Skin infections",
            "Dental infections"
        ],
        howItWorks: "Amoxicillin is an antibiotic that kills bacteria by preventing them from forming cell walls. This stops the bacteria from growing and multiplying, allowing your immune system to clear the infection.",
        sideEffects: [
            "Diarrhea",
            "Nausea or vomiting",
            "Rash",
            "Yeast infections (in women)",
            "Allergic reactions (rare but serious)"
        ],
        warnings: [
            "Complete the full course even if you feel better",
            "Do not share antibiotics with others",
            "Inform your doctor if you're allergic to penicillin",
            "May reduce effectiveness of birth control pills",
            "Avoid alcohol while taking antibiotics"
        ],
        whenToSeeDoctor: [
            "If you develop a severe rash or hives",
            "If you have difficulty breathing (sign of allergic reaction)",
            "If diarrhea is severe or contains blood",
            "If symptoms don't improve after a few days"
        ]
    },
    {
        id: "atorvastatin",
        name: "Atorvastatin",
        genericName: "Atorvastatin",
        uses: [
            "High cholesterol treatment",
            "Heart disease prevention",
            "Stroke prevention",
            "Reducing risk of heart attack"
        ],
        howItWorks: "Atorvastatin is a statin medication that works by blocking an enzyme in the liver that produces cholesterol. This lowers LDL (bad) cholesterol and triglycerides while raising HDL (good) cholesterol.",
        sideEffects: [
            "Muscle pain or weakness",
            "Headache",
            "Nausea",
            "Liver problems (rare)",
            "Memory problems (rare)"
        ],
        warnings: [
            "Avoid grapefruit juice (can increase side effects)",
            "Inform doctor if you have liver disease",
            "May interact with other medications",
            "Regular blood tests may be needed",
            "Not recommended during pregnancy"
        ],
        whenToSeeDoctor: [
            "If you experience severe muscle pain or weakness",
            "If you have signs of liver problems (yellowing skin, dark urine)",
            "If you have unexplained muscle tenderness",
            "For regular cholesterol monitoring"
        ]
    },
    {
        id: "azithromycin",
        name: "Azithromycin",
        genericName: "Azithromycin",
        uses: [
            "Bacterial infections (respiratory, skin, ear)",
            "Sexually transmitted infections",
            "Pneumonia",
            "Sinusitis"
        ],
        howItWorks: "Azithromycin is a macrolide antibiotic that stops bacteria from making proteins they need to survive and multiply, effectively killing the bacteria.",
        sideEffects: [
            "Diarrhea",
            "Nausea or vomiting",
            "Stomach pain",
            "Headache",
            "Dizziness"
        ],
        warnings: [
            "Complete the full course as prescribed",
            "May cause irregular heartbeat (rare)",
            "Inform doctor if you have heart problems",
            "May interact with other medications",
            "Take on empty stomach or with food as directed"
        ],
        whenToSeeDoctor: [
            "If you experience severe diarrhea",
            "If you have irregular heartbeat",
            "If you develop severe allergic reactions",
            "If symptoms don't improve"
        ]
    },
    {
        id: "amlodipine",
        name: "Amlodipine",
        genericName: "Amlodipine",
        uses: [
            "High blood pressure treatment",
            "Angina (chest pain) prevention",
            "Coronary artery disease"
        ],
        howItWorks: "Amlodipine is a calcium channel blocker that relaxes blood vessels by preventing calcium from entering muscle cells in the heart and blood vessels, making it easier for blood to flow.",
        sideEffects: [
            "Swelling in ankles or feet",
            "Dizziness",
            "Flushing",
            "Headache",
            "Fatigue"
        ],
        warnings: [
            "Do not stop taking suddenly",
            "May interact with other blood pressure medications",
            "Inform doctor if you have liver problems",
            "Avoid alcohol (can increase dizziness)",
            "Take at the same time each day"
        ],
        whenToSeeDoctor: [
            "If swelling is severe or painful",
            "If you experience chest pain",
            "If you have signs of allergic reaction",
            "For regular blood pressure monitoring"
        ]
    },
    {
        id: "acetaminophen",
        name: "Acetaminophen",
        genericName: "Paracetamol",
        uses: [
            "Pain relief (headaches, muscle aches, toothaches)",
            "Fever reduction",
            "Mild to moderate pain management"
        ],
        howItWorks: "Acetaminophen works by blocking the production of certain chemicals in the brain that cause pain and fever. It helps reduce discomfort and lower body temperature.",
        sideEffects: [
            "Nausea (rare)",
            "Stomach upset (rare)",
            "Allergic reactions (very rare)",
            "Liver damage (if overdose)"
        ],
        warnings: [
            "Do not exceed the recommended dose",
            "Avoid alcohol while taking acetaminophen",
            "Check with a doctor if you have liver problems",
            "Not suitable for children under 2 months without doctor's advice",
            "Many cold medicines contain acetaminophen - check labels"
        ],
        whenToSeeDoctor: [
            "If pain persists for more than 3 days",
            "If fever lasts more than 3 days",
            "If you experience severe side effects",
            "If you accidentally take too much (seek immediate help)"
        ]
    },
    // B
    {
        id: "bisoprolol",
        name: "Bisoprolol",
        genericName: "Bisoprolol",
        uses: [
            "High blood pressure treatment",
            "Heart failure management",
            "Irregular heartbeat treatment",
            "Angina prevention"
        ],
        howItWorks: "Bisoprolol is a beta-blocker that slows down the heart rate and reduces the force of heart contractions, which lowers blood pressure and reduces the heart's workload.",
        sideEffects: [
            "Dizziness or lightheadedness",
            "Fatigue",
            "Slow heart rate",
            "Cold hands and feet",
            "Shortness of breath"
        ],
        warnings: [
            "Do not stop taking suddenly (can cause heart problems)",
            "Inform doctor if you have asthma or breathing problems",
            "May mask symptoms of low blood sugar in diabetics",
            "Avoid alcohol (can increase side effects)",
            "Take at the same time each day"
        ],
        whenToSeeDoctor: [
            "If you experience very slow heart rate",
            "If you have difficulty breathing",
            "If you feel dizzy or faint",
            "For regular monitoring"
        ]
    },
    {
        id: "budesonide",
        name: "Budesonide",
        genericName: "Budesonide",
        uses: [
            "Asthma treatment and prevention",
            "Chronic obstructive pulmonary disease (COPD)",
            "Inflammatory bowel disease",
            "Allergic rhinitis"
        ],
        howItWorks: "Budesonide is a corticosteroid that reduces inflammation in the airways and other parts of the body by suppressing the immune system's inflammatory response.",
        sideEffects: [
            "Sore throat or hoarseness",
            "Cough",
            "Nausea",
            "Headache",
            "Nasal irritation (if nasal spray)"
        ],
        warnings: [
            "Rinse mouth after using inhaler to prevent thrush",
            "Do not stop using suddenly if used long-term",
            "Inform doctor if you have infections",
            "May increase risk of infections",
            "Use regularly as prescribed, not just during attacks"
        ],
        whenToSeeDoctor: [
            "If breathing problems worsen",
            "If you develop signs of infection",
            "If you experience severe side effects",
            "For regular asthma monitoring"
        ]
    },
    {
        id: "baclofen",
        name: "Baclofen",
        genericName: "Baclofen",
        uses: [
            "Muscle spasm treatment",
            "Multiple sclerosis symptoms",
            "Spinal cord injury muscle spasms",
            "Cerebral palsy muscle stiffness"
        ],
        howItWorks: "Baclofen works by blocking nerve signals in the brain and spinal cord that cause muscle spasms, helping to relax tight muscles.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Weakness",
            "Nausea",
            "Headache"
        ],
        warnings: [
            "Do not stop taking suddenly (can cause withdrawal)",
            "May cause drowsiness - avoid driving",
            "Avoid alcohol (increases drowsiness)",
            "Inform doctor if you have kidney problems",
            "May interact with other medications"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If muscle spasms worsen",
            "If you have signs of withdrawal when stopping",
            "If you develop breathing problems"
        ]
    },
    {
        id: "bumetanide",
        name: "Bumetanide",
        genericName: "Bumetanide",
        uses: [
            "Fluid retention (edema) treatment",
            "Heart failure",
            "Liver disease with fluid buildup",
            "Kidney disease with fluid retention"
        ],
        howItWorks: "Bumetanide is a diuretic (water pill) that helps the kidneys remove excess fluid and salt from the body through urine, reducing swelling and fluid buildup.",
        sideEffects: [
            "Increased urination",
            "Dizziness",
            "Low blood pressure",
            "Muscle cramps",
            "Dehydration"
        ],
        warnings: [
            "May cause dehydration - drink plenty of water",
            "May cause low potassium levels",
            "Avoid alcohol (can increase dizziness)",
            "Take in the morning to avoid nighttime urination",
            "Inform doctor if you have kidney or liver problems"
        ],
        whenToSeeDoctor: [
            "If you experience severe dizziness",
            "If you have signs of dehydration",
            "If you have muscle weakness or cramps",
            "For regular monitoring of electrolytes"
        ]
    },
    // C
    {
        id: "ciprofloxacin",
        name: "Ciprofloxacin",
        genericName: "Ciprofloxacin",
        uses: [
            "Bacterial infections (urinary tract, respiratory, skin)",
            "Bone and joint infections",
            "Gonorrhea",
            "Anthrax exposure"
        ],
        howItWorks: "Ciprofloxacin is a fluoroquinolone antibiotic that kills bacteria by preventing them from copying their DNA, which stops them from multiplying and spreading.",
        sideEffects: [
            "Nausea or vomiting",
            "Diarrhea",
            "Dizziness",
            "Headache",
            "Tendon problems (rare but serious)"
        ],
        warnings: [
            "May cause tendon rupture (especially in older adults)",
            "Avoid excessive sun exposure (increases sensitivity)",
            "Do not take with dairy products or antacids",
            "May cause nerve damage (rare)",
            "Complete full course as prescribed"
        ],
        whenToSeeDoctor: [
            "If you experience tendon pain or swelling",
            "If you have severe diarrhea",
            "If you develop signs of nerve problems",
            "If symptoms don't improve"
        ]
    },
    {
        id: "citalopram",
        name: "Citalopram",
        genericName: "Citalopram",
        uses: [
            "Depression treatment",
            "Anxiety disorders",
            "Panic disorder",
            "Obsessive-compulsive disorder"
        ],
        howItWorks: "Citalopram is a selective serotonin reuptake inhibitor (SSRI) that increases levels of serotonin in the brain, a chemical that helps regulate mood, emotions, and anxiety.",
        sideEffects: [
            "Nausea",
            "Dry mouth",
            "Drowsiness or insomnia",
            "Sweating",
            "Sexual problems"
        ],
        warnings: [
            "May take 2-4 weeks to see full effects",
            "Do not stop taking suddenly",
            "May increase risk of suicidal thoughts in young adults",
            "Avoid alcohol",
            "Inform doctor of all medications you're taking"
        ],
        whenToSeeDoctor: [
            "If you have thoughts of self-harm",
            "If depression or anxiety worsens",
            "If you experience severe side effects",
            "For regular mental health monitoring"
        ]
    },
    {
        id: "clopidogrel",
        name: "Clopidogrel",
        genericName: "Clopidogrel",
        uses: [
            "Preventing blood clots after heart attack or stroke",
            "Preventing clots in stents",
            "Peripheral artery disease",
            "Reducing risk of cardiovascular events"
        ],
        howItWorks: "Clopidogrel is an antiplatelet medication that prevents blood platelets from sticking together, reducing the risk of blood clots that can cause heart attacks and strokes.",
        sideEffects: [
            "Easy bruising or bleeding",
            "Nosebleeds",
            "Bleeding gums",
            "Diarrhea",
            "Rash"
        ],
        warnings: [
            "Increases risk of bleeding",
            "Inform doctor before surgery or dental procedures",
            "Avoid alcohol (increases bleeding risk)",
            "Do not stop taking without doctor's advice",
            "May interact with other blood thinners"
        ],
        whenToSeeDoctor: [
            "If you experience unusual bleeding",
            "If you have signs of internal bleeding (black stools, vomiting blood)",
            "If you develop severe bruising",
            "Before any surgery or dental work"
        ]
    },
    {
        id: "carvedilol",
        name: "Carvedilol",
        genericName: "Carvedilol",
        uses: [
            "High blood pressure treatment",
            "Heart failure management",
            "After heart attack",
            "Irregular heartbeat"
        ],
        howItWorks: "Carvedilol is a beta-blocker that slows the heart rate, reduces blood pressure, and decreases the heart's workload by blocking certain stress hormones.",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Slow heart rate",
            "Low blood pressure",
            "Shortness of breath"
        ],
        warnings: [
            "Do not stop taking suddenly",
            "May cause drowsiness - use caution when driving",
            "Inform doctor if you have asthma",
            "Avoid alcohol",
            "Take with food to reduce side effects"
        ],
        whenToSeeDoctor: [
            "If you experience very slow heart rate",
            "If you feel dizzy or faint",
            "If breathing problems worsen",
            "For regular heart monitoring"
        ]
    },
    {
        id: "ceftriaxone",
        name: "Ceftriaxone",
        genericName: "Ceftriaxone",
        uses: [
            "Severe bacterial infections",
            "Meningitis",
            "Pneumonia",
            "Gonorrhea",
            "Bloodstream infections"
        ],
        howItWorks: "Ceftriaxone is a cephalosporin antibiotic that kills bacteria by preventing them from building their cell walls, causing them to die.",
        sideEffects: [
            "Diarrhea",
            "Nausea or vomiting",
            "Pain at injection site",
            "Rash",
            "Allergic reactions"
        ],
        warnings: [
            "Usually given by injection in hospital",
            "Inform doctor if allergic to penicillin",
            "May cause severe diarrhea (C. diff infection)",
            "Complete full course as prescribed",
            "May interact with other medications"
        ],
        whenToSeeDoctor: [
            "If you develop severe diarrhea",
            "If you have signs of allergic reaction",
            "If symptoms don't improve",
            "If you experience severe side effects"
        ]
    },
    // D
    {
        id: "doxycycline",
        name: "Doxycycline",
        genericName: "Doxycycline",
        uses: [
            "Bacterial infections (respiratory, skin, urinary)",
            "Acne treatment",
            "Malaria prevention",
            "Lyme disease",
            "Chlamydia"
        ],
        howItWorks: "Doxycycline is a tetracycline antibiotic that stops bacteria from making proteins they need to survive, effectively killing the bacteria.",
        sideEffects: [
            "Nausea or vomiting",
            "Sensitivity to sunlight",
            "Diarrhea",
            "Stomach upset",
            "Yeast infections"
        ],
        warnings: [
            "Avoid excessive sun exposure (use sunscreen)",
            "Take with food or milk to reduce stomach upset",
            "Do not take with dairy products, antacids, or iron supplements",
            "May cause permanent tooth discoloration in children",
            "Not recommended during pregnancy"
        ],
        whenToSeeDoctor: [
            "If you develop severe sunburn",
            "If you have severe diarrhea",
            "If you experience difficulty swallowing",
            "If symptoms don't improve"
        ]
    },
    {
        id: "diazepam",
        name: "Diazepam",
        genericName: "Diazepam",
        uses: [
            "Anxiety treatment",
            "Muscle spasms",
            "Seizure control",
            "Alcohol withdrawal",
            "Insomnia (short-term)"
        ],
        howItWorks: "Diazepam is a benzodiazepine that enhances the effect of GABA, a calming neurotransmitter in the brain, producing sedative and muscle-relaxing effects.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Fatigue",
            "Confusion",
            "Memory problems"
        ],
        warnings: [
            "Highly addictive - use only as prescribed",
            "Do not use long-term",
            "Avoid alcohol (can be dangerous)",
            "May cause drowsiness - do not drive",
            "Do not stop suddenly (can cause withdrawal)"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If you have thoughts of self-harm",
            "If you want to stop taking (need medical supervision)",
            "If you develop signs of dependence"
        ]
    },
    {
        id: "digoxin",
        name: "Digoxin",
        genericName: "Digoxin",
        uses: [
            "Heart failure treatment",
            "Atrial fibrillation (irregular heartbeat)",
            "Improving heart function"
        ],
        howItWorks: "Digoxin strengthens the heart muscle contractions and slows the heart rate, helping the heart pump more effectively.",
        sideEffects: [
            "Nausea or vomiting",
            "Dizziness",
            "Vision changes (yellow or green tint)",
            "Irregular heartbeat",
            "Confusion"
        ],
        warnings: [
            "Narrow therapeutic window - requires careful monitoring",
            "May interact with many medications",
            "Inform doctor if you have kidney problems",
            "Regular blood tests needed",
            "Avoid sudden changes in diet"
        ],
        whenToSeeDoctor: [
            "If you experience vision changes",
            "If you have irregular heartbeat",
            "If you feel dizzy or confused",
            "For regular blood level monitoring"
        ]
    },
    {
        id: "duloxetine",
        name: "Duloxetine",
        genericName: "Duloxetine",
        uses: [
            "Depression treatment",
            "Anxiety disorders",
            "Diabetic nerve pain",
            "Fibromyalgia",
            "Chronic pain"
        ],
        howItWorks: "Duloxetine is an SNRI (serotonin-norepinephrine reuptake inhibitor) that increases levels of serotonin and norepinephrine in the brain, improving mood and reducing pain signals.",
        sideEffects: [
            "Nausea",
            "Dry mouth",
            "Drowsiness",
            "Constipation",
            "Decreased appetite"
        ],
        warnings: [
            "Do not stop taking suddenly",
            "May increase risk of suicidal thoughts",
            "Avoid alcohol",
            "May cause liver problems",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you have thoughts of self-harm",
            "If you experience signs of liver problems",
            "If depression worsens",
            "For regular monitoring"
        ]
    },
    // E
    {
        id: "enalapril",
        name: "Enalapril",
        genericName: "Enalapril",
        uses: [
            "High blood pressure treatment",
            "Heart failure",
            "Kidney protection in diabetes",
            "After heart attack"
        ],
        howItWorks: "Enalapril is an ACE inhibitor that relaxes blood vessels by blocking an enzyme that causes blood vessels to narrow, lowering blood pressure and reducing heart workload.",
        sideEffects: [
            "Dry cough",
            "Dizziness",
            "Headache",
            "Fatigue",
            "Low blood pressure"
        ],
        warnings: [
            "May cause persistent dry cough",
            "Do not use during pregnancy",
            "May increase potassium levels",
            "Inform doctor if you have kidney problems",
            "Avoid salt substitutes containing potassium"
        ],
        whenToSeeDoctor: [
            "If cough is severe or persistent",
            "If you experience swelling of face, lips, or tongue",
            "If you feel dizzy or faint",
            "For regular blood pressure monitoring"
        ]
    },
    {
        id: "esomeprazole",
        name: "Esomeprazole",
        genericName: "Esomeprazole",
        uses: [
            "Acid reflux (GERD)",
            "Stomach ulcers",
            "Heartburn relief",
            "Zollinger-Ellison syndrome"
        ],
        howItWorks: "Esomeprazole is a proton pump inhibitor that reduces stomach acid production by blocking the enzyme system that produces acid in the stomach lining.",
        sideEffects: [
            "Headache",
            "Diarrhea or constipation",
            "Nausea",
            "Stomach pain",
            "Vitamin B12 deficiency (with long-term use)"
        ],
        warnings: [
            "Take 30-60 minutes before meals",
            "Do not crush or chew capsules",
            "May interact with other medications",
            "Long-term use may increase risk of bone fractures",
            "Inform doctor of all medications you're taking"
        ],
        whenToSeeDoctor: [
            "If symptoms persist after 2 weeks",
            "If you experience severe stomach pain",
            "If you notice signs of bleeding",
            "If you have difficulty swallowing"
        ]
    },
    {
        id: "erythromycin",
        name: "Erythromycin",
        genericName: "Erythromycin",
        uses: [
            "Bacterial infections (respiratory, skin, eye)",
            "Whooping cough",
            "Diphtheria",
            "Acne treatment"
        ],
        howItWorks: "Erythromycin is a macrolide antibiotic that stops bacteria from making proteins, preventing them from growing and multiplying.",
        sideEffects: [
            "Nausea or vomiting",
            "Stomach cramps",
            "Diarrhea",
            "Loss of appetite",
            "Rash"
        ],
        warnings: [
            "Take with food to reduce stomach upset",
            "May cause irregular heartbeat",
            "Inform doctor if you have liver problems",
            "May interact with other medications",
            "Complete full course as prescribed"
        ],
        whenToSeeDoctor: [
            "If you experience severe stomach pain",
            "If you have irregular heartbeat",
            "If you develop severe diarrhea",
            "If symptoms don't improve"
        ]
    },
    // F
    {
        id: "furosemide",
        name: "Furosemide",
        genericName: "Furosemide",
        uses: [
            "Fluid retention (edema)",
            "Heart failure",
            "High blood pressure",
            "Kidney disease with fluid buildup"
        ],
        howItWorks: "Furosemide is a loop diuretic that helps the kidneys remove excess fluid and salt from the body, reducing swelling and lowering blood pressure.",
        sideEffects: [
            "Increased urination",
            "Dizziness",
            "Low blood pressure",
            "Muscle cramps",
            "Dehydration"
        ],
        warnings: [
            "May cause dehydration - stay hydrated",
            "May cause low potassium and magnesium levels",
            "Avoid alcohol (increases dizziness)",
            "Take in the morning to avoid nighttime urination",
            "Inform doctor if you have kidney problems"
        ],
        whenToSeeDoctor: [
            "If you experience severe dizziness",
            "If you have signs of dehydration",
            "If you have muscle weakness or cramps",
            "For regular electrolyte monitoring"
        ]
    },
    {
        id: "fluoxetine",
        name: "Fluoxetine",
        genericName: "Fluoxetine",
        uses: [
            "Depression treatment",
            "Obsessive-compulsive disorder",
            "Panic disorder",
            "Bulimia nervosa",
            "Premenstrual dysphoric disorder"
        ],
        howItWorks: "Fluoxetine is an SSRI that increases serotonin levels in the brain, helping to improve mood, reduce anxiety, and regulate emotions.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Insomnia or drowsiness",
            "Dry mouth",
            "Sexual problems"
        ],
        warnings: [
            "May take 2-4 weeks to see effects",
            "Do not stop taking suddenly",
            "May increase risk of suicidal thoughts in young adults",
            "Avoid alcohol",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you have thoughts of self-harm",
            "If depression worsens",
            "If you experience severe side effects",
            "For regular mental health monitoring"
        ]
    },
    {
        id: "fluticasone",
        name: "Fluticasone",
        genericName: "Fluticasone",
        uses: [
            "Asthma treatment and prevention",
            "Allergic rhinitis",
            "Chronic obstructive pulmonary disease (COPD)",
            "Nasal polyps"
        ],
        howItWorks: "Fluticasone is a corticosteroid that reduces inflammation in the airways and nasal passages by suppressing the immune system's inflammatory response.",
        sideEffects: [
            "Sore throat",
            "Hoarseness",
            "Headache",
            "Nosebleeds (if nasal spray)",
            "Cough"
        ],
        warnings: [
            "Rinse mouth after using inhaler",
            "Use regularly as prescribed",
            "Not for immediate relief of asthma attacks",
            "May increase risk of infections",
            "Inform doctor if you have infections"
        ],
        whenToSeeDoctor: [
            "If breathing problems worsen",
            "If you develop signs of infection",
            "If you experience severe side effects",
            "For regular asthma monitoring"
        ]
    },
    // G
    {
        id: "gabapentin",
        name: "Gabapentin",
        genericName: "Gabapentin",
        uses: [
            "Seizure control",
            "Nerve pain (neuropathy)",
            "Restless legs syndrome",
            "Fibromyalgia",
            "Anxiety (off-label)"
        ],
        howItWorks: "Gabapentin affects the way nerves send messages to the brain, reducing abnormal electrical activity and blocking pain signals from damaged nerves.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Fatigue",
            "Uncoordinated movement",
            "Blurred vision"
        ],
        warnings: [
            "May cause drowsiness - avoid driving",
            "Do not stop taking suddenly",
            "Avoid alcohol (increases drowsiness)",
            "May interact with other medications",
            "Inform doctor if you have kidney problems"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If seizures increase",
            "If you have thoughts of self-harm",
            "If you develop mood changes"
        ]
    },
    {
        id: "glipizide",
        name: "Glipizide",
        genericName: "Glipizide",
        uses: [
            "Type 2 diabetes treatment",
            "Blood sugar control"
        ],
        howItWorks: "Glipizide is a sulfonylurea that stimulates the pancreas to produce more insulin, helping to lower blood sugar levels.",
        sideEffects: [
            "Low blood sugar (hypoglycemia)",
            "Nausea",
            "Dizziness",
            "Headache",
            "Weight gain"
        ],
        warnings: [
            "Take with meals to prevent low blood sugar",
            "Monitor blood sugar regularly",
            "May cause low blood sugar - know the symptoms",
            "Avoid alcohol (can cause low blood sugar)",
            "Inform doctor if you have kidney or liver problems"
        ],
        whenToSeeDoctor: [
            "If you experience signs of low blood sugar",
            "If blood sugar is not controlled",
            "If you have severe side effects",
            "For regular diabetes monitoring"
        ]
    },
    {
        id: "glimepiride",
        name: "Glimepiride",
        genericName: "Glimepiride",
        uses: [
            "Type 2 diabetes treatment",
            "Blood sugar control"
        ],
        howItWorks: "Glimepiride stimulates the pancreas to release insulin, helping to lower blood sugar levels in people with type 2 diabetes.",
        sideEffects: [
            "Low blood sugar",
            "Nausea",
            "Dizziness",
            "Headache",
            "Weight gain"
        ],
        warnings: [
            "Take with breakfast or first main meal",
            "Monitor blood sugar regularly",
            "May cause low blood sugar",
            "Avoid alcohol",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you experience low blood sugar symptoms",
            "If blood sugar is not well controlled",
            "If you have severe side effects",
            "For regular monitoring"
        ]
    },
    // H
    {
        id: "hydrochlorothiazide",
        name: "Hydrochlorothiazide",
        genericName: "Hydrochlorothiazide",
        uses: [
            "High blood pressure treatment",
            "Fluid retention (edema)",
            "Heart failure",
            "Kidney stones prevention"
        ],
        howItWorks: "Hydrochlorothiazide is a thiazide diuretic that helps the kidneys remove excess water and salt from the body, reducing blood volume and lowering blood pressure.",
        sideEffects: [
            "Increased urination",
            "Dizziness",
            "Low blood pressure",
            "Muscle cramps",
            "Sensitivity to sunlight"
        ],
        warnings: [
            "May cause low potassium levels",
            "Avoid excessive sun exposure",
            "Take in the morning",
            "Stay hydrated",
            "Inform doctor if you have kidney problems"
        ],
        whenToSeeDoctor: [
            "If you experience severe dizziness",
            "If you have muscle cramps or weakness",
            "If you have signs of dehydration",
            "For regular blood pressure monitoring"
        ]
    },
    {
        id: "hydrocodone",
        name: "Hydrocodone",
        genericName: "Hydrocodone",
        uses: [
            "Severe pain relief",
            "Cough suppression (in combination products)",
            "Post-surgical pain"
        ],
        howItWorks: "Hydrocodone is an opioid pain medication that works by binding to opioid receptors in the brain and spinal cord, blocking pain signals and producing pain relief.",
        sideEffects: [
            "Drowsiness",
            "Nausea or vomiting",
            "Constipation",
            "Dizziness",
            "Itching"
        ],
        warnings: [
            "Highly addictive - use only as prescribed",
            "Do not use long-term",
            "Avoid alcohol (can be fatal)",
            "May cause drowsiness - do not drive",
            "Do not stop suddenly"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness or breathing problems",
            "If you develop signs of dependence",
            "If pain is not controlled",
            "If you want to stop taking (need medical supervision)"
        ]
    },
    // I
    {
        id: "ibuprofen",
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        uses: [
            "Pain relief (headaches, menstrual cramps, joint pain)",
            "Fever reduction",
            "Inflammation reduction",
            "Arthritis pain management"
        ],
        howItWorks: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that reduces pain, inflammation, and fever by blocking enzymes that produce prostaglandins, which are chemicals that cause pain and swelling.",
        sideEffects: [
            "Stomach upset or pain",
            "Nausea or vomiting",
            "Dizziness",
            "Headache",
            "Increased risk of stomach ulcers with long-term use"
        ],
        warnings: [
            "Take with food to reduce stomach irritation",
            "Do not use if you have stomach ulcers",
            "Avoid if you have kidney problems",
            "Not recommended during pregnancy (especially third trimester)",
            "May increase risk of heart attack or stroke"
        ],
        whenToSeeDoctor: [
            "If you experience severe stomach pain",
            "If you notice signs of bleeding (black stools, vomiting blood)",
            "If pain persists beyond recommended duration",
            "If you have existing heart or kidney conditions"
        ]
    },
    {
        id: "insulin",
        name: "Insulin",
        genericName: "Insulin",
        uses: [
            "Type 1 diabetes treatment",
            "Type 2 diabetes (when oral medications not enough)",
            "Gestational diabetes",
            "Diabetic ketoacidosis"
        ],
        howItWorks: "Insulin is a hormone that helps glucose (sugar) enter cells to be used for energy. Injectable insulin replaces or supplements the body's natural insulin.",
        sideEffects: [
            "Low blood sugar (hypoglycemia)",
            "Weight gain",
            "Injection site reactions",
            "Allergic reactions (rare)",
            "Lipodystrophy (skin changes at injection sites)"
        ],
        warnings: [
            "Must monitor blood sugar regularly",
            "Know signs of low blood sugar",
            "Rotate injection sites",
            "Store properly (refrigerate unopened)",
            "Never share insulin pens or needles"
        ],
        whenToSeeDoctor: [
            "If you experience frequent low blood sugar",
            "If blood sugar is not controlled",
            "If you have signs of allergic reaction",
            "For regular diabetes management"
        ]
    },
    {
        id: "irbesartan",
        name: "Irbesartan",
        genericName: "Irbesartan",
        uses: [
            "High blood pressure treatment",
            "Kidney protection in diabetes",
            "Heart failure"
        ],
        howItWorks: "Irbesartan is an angiotensin II receptor blocker that relaxes blood vessels by blocking the action of a hormone that causes blood vessels to narrow.",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Muscle pain",
            "Low blood pressure",
            "High potassium levels"
        ],
        warnings: [
            "Do not use during pregnancy",
            "May increase potassium levels",
            "Inform doctor if you have kidney problems",
            "Avoid salt substitutes with potassium",
            "Take at the same time each day"
        ],
        whenToSeeDoctor: [
            "If you experience severe dizziness",
            "If you have signs of high potassium",
            "If you feel faint",
            "For regular blood pressure monitoring"
        ]
    },
    // J
    {
        id: "januvia",
        name: "Januvia",
        genericName: "Sitagliptin",
        uses: [
            "Type 2 diabetes treatment",
            "Blood sugar control",
            "Used with other diabetes medications"
        ],
        howItWorks: "Sitagliptin is a DPP-4 inhibitor that increases insulin production and decreases glucose production by the liver, helping to lower blood sugar levels.",
        sideEffects: [
            "Upper respiratory infection",
            "Headache",
            "Stomach upset",
            "Joint pain",
            "Pancreatitis (rare but serious)"
        ],
        warnings: [
            "May cause pancreatitis",
            "Inform doctor if you have kidney problems",
            "Monitor blood sugar regularly",
            "May interact with other medications",
            "Not for type 1 diabetes"
        ],
        whenToSeeDoctor: [
            "If you experience severe stomach pain (sign of pancreatitis)",
            "If blood sugar is not controlled",
            "If you have signs of allergic reaction",
            "For regular diabetes monitoring"
        ]
    },
    {
        id: "jardiance",
        name: "Jardiance",
        genericName: "Empagliflozin",
        uses: [
            "Type 2 diabetes treatment",
            "Heart failure",
            "Kidney protection in diabetes",
            "Blood sugar control"
        ],
        howItWorks: "Empagliflozin is an SGLT2 inhibitor that works by helping the kidneys remove glucose from the blood through urine, lowering blood sugar levels.",
        sideEffects: [
            "Urinary tract infections",
            "Yeast infections",
            "Increased urination",
            "Dehydration",
            "Low blood pressure"
        ],
        warnings: [
            "May cause dehydration - stay hydrated",
            "May increase risk of urinary tract infections",
            "Monitor blood sugar regularly",
            "Inform doctor if you have kidney problems",
            "May cause low blood pressure"
        ],
        whenToSeeDoctor: [
            "If you experience signs of dehydration",
            "If you have frequent urinary tract infections",
            "If blood sugar is not controlled",
            "For regular monitoring"
        ]
    },
    {
        id: "jublia",
        name: "Jublia",
        genericName: "Efinaconazole",
        uses: [
            "Fungal nail infections (onychomycosis)",
            "Toenail fungus treatment"
        ],
        howItWorks: "Efinaconazole is an antifungal medication that kills fungi by disrupting their cell membranes, treating nail fungal infections.",
        sideEffects: [
            "Ingrown toenail",
            "Redness or irritation at application site",
            "Itching",
            "Blisters",
            "Burning sensation"
        ],
        warnings: [
            "For external use only",
            "Apply to clean, dry nails",
            "Avoid contact with eyes",
            "May take several months to see results",
            "Complete full treatment course"
        ],
        whenToSeeDoctor: [
            "If infection worsens",
            "If you experience severe skin irritation",
            "If symptoms don't improve after several months",
            "If you have signs of allergic reaction"
        ]
    },
    // K
    {
        id: "keppra",
        name: "Keppra",
        genericName: "Levetiracetam",
        uses: [
            "Seizure control (epilepsy)",
            "Partial onset seizures",
            "Myoclonic seizures",
            "Tonic-clonic seizures"
        ],
        howItWorks: "Levetiracetam works by stabilizing electrical activity in the brain and reducing abnormal nerve signals that cause seizures.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Weakness",
            "Irritability or mood changes",
            "Headache"
        ],
        warnings: [
            "Do not stop taking suddenly (can cause seizures)",
            "May cause drowsiness - use caution when driving",
            "May cause mood changes or depression",
            "Inform doctor of all medications",
            "Avoid alcohol"
        ],
        whenToSeeDoctor: [
            "If seizures increase or change",
            "If you experience severe mood changes",
            "If you have thoughts of self-harm",
            "If you want to stop taking (need medical supervision)"
        ]
    },
    {
        id: "klonopin",
        name: "Klonopin",
        genericName: "Clonazepam",
        uses: [
            "Seizure control",
            "Panic disorder",
            "Anxiety treatment",
            "Restless legs syndrome"
        ],
        howItWorks: "Clonazepam is a benzodiazepine that enhances GABA activity in the brain, reducing anxiety and preventing seizures.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Coordination problems",
            "Memory problems",
            "Fatigue"
        ],
        warnings: [
            "Highly addictive - use only as prescribed",
            "Do not use long-term",
            "Avoid alcohol (can be dangerous)",
            "May cause drowsiness - do not drive",
            "Do not stop suddenly"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If seizures increase",
            "If you develop signs of dependence",
            "If you want to stop taking (need medical supervision)"
        ]
    },
    {
        id: "keflex",
        name: "Keflex",
        genericName: "Cephalexin",
        uses: [
            "Bacterial infections (respiratory, skin, urinary tract, bone)",
            "Ear infections",
            "Skin infections",
            "Pneumonia"
        ],
        howItWorks: "Cephalexin is a cephalosporin antibiotic that kills bacteria by preventing them from building their cell walls.",
        sideEffects: [
            "Diarrhea",
            "Nausea or vomiting",
            "Stomach upset",
            "Rash",
            "Allergic reactions"
        ],
        warnings: [
            "Complete the full course even if you feel better",
            "Inform doctor if allergic to penicillin",
            "May cause severe diarrhea (C. diff infection)",
            "Take with food to reduce stomach upset",
            "Avoid alcohol"
        ],
        whenToSeeDoctor: [
            "If you develop severe diarrhea",
            "If you have signs of allergic reaction",
            "If symptoms don't improve",
            "If you experience severe side effects"
        ]
    },
    {
        id: "kaletra",
        name: "Kaletra",
        genericName: "Lopinavir/Ritonavir",
        uses: [
            "HIV/AIDS treatment",
            "Antiretroviral therapy",
            "Prevention of HIV transmission"
        ],
        howItWorks: "Kaletra is a combination of two antiretroviral drugs that work together to prevent HIV from multiplying by blocking enzymes the virus needs to replicate.",
        sideEffects: [
            "Nausea or vomiting",
            "Diarrhea",
            "Stomach pain",
            "Headache",
            "Fatigue",
            "High cholesterol and triglycerides"
        ],
        warnings: [
            "Must be taken exactly as prescribed",
            "Do not miss doses",
            "May interact with many medications",
            "Inform doctor of all medications",
            "Regular blood tests needed"
        ],
        whenToSeeDoctor: [
            "If you miss doses",
            "If you experience severe side effects",
            "If symptoms worsen",
            "For regular HIV monitoring"
        ]
    },
    // L
    {
        id: "levothyroxine",
        name: "Levothyroxine",
        genericName: "Levothyroxine",
        uses: [
            "Hypothyroidism (underactive thyroid)",
            "Thyroid hormone replacement",
            "Goiter treatment"
        ],
        howItWorks: "Levothyroxine is a synthetic form of thyroid hormone that replaces the natural hormone when the thyroid gland doesn't produce enough.",
        sideEffects: [
            "Headache",
            "Nervousness",
            "Irritability",
            "Insomnia",
            "Increased appetite"
        ],
        warnings: [
            "Take on empty stomach, 30-60 minutes before breakfast",
            "May interact with many medications and supplements",
            "Regular blood tests needed to monitor levels",
            "Do not stop taking without doctor's advice",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you experience heart palpitations",
            "If you have signs of overactive thyroid",
            "If symptoms don't improve",
            "For regular thyroid function monitoring"
        ]
    },
    {
        id: "lisinopril",
        name: "Lisinopril",
        genericName: "Lisinopril",
        uses: [
            "High blood pressure treatment",
            "Heart failure",
            "After heart attack",
            "Kidney protection in diabetes"
        ],
        howItWorks: "Lisinopril is an ACE inhibitor that relaxes blood vessels by blocking an enzyme that causes blood vessels to narrow, lowering blood pressure.",
        sideEffects: [
            "Dry cough",
            "Dizziness",
            "Headache",
            "Fatigue",
            "Low blood pressure"
        ],
        warnings: [
            "May cause persistent dry cough",
            "Do not use during pregnancy",
            "May increase potassium levels",
            "Inform doctor if you have kidney problems",
            "Avoid salt substitutes with potassium"
        ],
        whenToSeeDoctor: [
            "If cough is severe or persistent",
            "If you experience swelling of face or tongue",
            "If you feel dizzy or faint",
            "For regular monitoring"
        ]
    },
    {
        id: "lorazepam",
        name: "Lorazepam",
        genericName: "Lorazepam",
        uses: [
            "Anxiety treatment",
            "Insomnia (short-term)",
            "Seizure control",
            "Alcohol withdrawal"
        ],
        howItWorks: "Lorazepam is a benzodiazepine that enhances GABA activity in the brain, producing calming and sedative effects.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Weakness",
            "Confusion",
            "Memory problems"
        ],
        warnings: [
            "Highly addictive - use only as prescribed",
            "Do not use long-term",
            "Avoid alcohol (can be dangerous)",
            "May cause drowsiness - do not drive",
            "Do not stop suddenly"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If you develop signs of dependence",
            "If you want to stop taking",
            "If you have thoughts of self-harm"
        ]
    },
    // M
    {
        id: "metformin",
        name: "Metformin",
        genericName: "Metformin",
        uses: [
            "Type 2 diabetes management",
            "Blood sugar control",
            "Polycystic ovary syndrome (PCOS) treatment"
        ],
        howItWorks: "Metformin helps lower blood sugar by reducing the amount of glucose produced by the liver and improving how your body responds to insulin. It also helps your muscles use glucose more effectively.",
        sideEffects: [
            "Nausea or vomiting",
            "Diarrhea",
            "Stomach upset",
            "Metallic taste in mouth",
            "Lactic acidosis (rare but serious)"
        ],
        warnings: [
            "Take with meals to reduce stomach upset",
            "Avoid excessive alcohol",
            "Inform doctor before surgery",
            "Monitor blood sugar levels regularly",
            "Stay hydrated"
        ],
        whenToSeeDoctor: [
            "If you experience severe stomach pain",
            "If you have difficulty breathing",
            "If you feel very weak or tired",
            "If blood sugar levels are not controlled"
        ]
    },
    {
        id: "metoprolol",
        name: "Metoprolol",
        genericName: "Metoprolol",
        uses: [
            "High blood pressure treatment",
            "Heart failure",
            "After heart attack",
            "Irregular heartbeat",
            "Angina prevention"
        ],
        howItWorks: "Metoprolol is a beta-blocker that slows the heart rate, reduces blood pressure, and decreases the heart's workload.",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Slow heart rate",
            "Cold hands and feet",
            "Shortness of breath"
        ],
        warnings: [
            "Do not stop taking suddenly",
            "Inform doctor if you have asthma",
            "May mask low blood sugar symptoms",
            "Avoid alcohol",
            "Take at the same time each day"
        ],
        whenToSeeDoctor: [
            "If you experience very slow heart rate",
            "If you have difficulty breathing",
            "If you feel dizzy or faint",
            "For regular monitoring"
        ]
    },
    {
        id: "morphine",
        name: "Morphine",
        genericName: "Morphine",
        uses: [
            "Severe pain relief",
            "Post-surgical pain",
            "Cancer pain",
            "End-of-life care"
        ],
        howItWorks: "Morphine is an opioid that binds to opioid receptors in the brain and spinal cord, blocking pain signals and producing pain relief.",
        sideEffects: [
            "Drowsiness",
            "Nausea or vomiting",
            "Constipation",
            "Dizziness",
            "Itching",
            "Respiratory depression (serious)"
        ],
        warnings: [
            "Highly addictive",
            "Controlled substance - use only as prescribed",
            "Avoid alcohol (can be fatal)",
            "May cause severe drowsiness",
            "Do not stop suddenly"
        ],
        whenToSeeDoctor: [
            "If you experience breathing problems",
            "If you develop signs of dependence",
            "If pain is not controlled",
            "If you want to stop (need medical supervision)"
        ]
    },
    // N
    {
        id: "naproxen",
        name: "Naproxen",
        genericName: "Naproxen",
        uses: [
            "Pain relief (arthritis, menstrual cramps, headaches)",
            "Inflammation reduction",
            "Fever reduction",
            "Gout treatment"
        ],
        howItWorks: "Naproxen is an NSAID that reduces pain, inflammation, and fever by blocking enzymes that produce prostaglandins.",
        sideEffects: [
            "Stomach upset or pain",
            "Nausea",
            "Dizziness",
            "Headache",
            "Increased risk of bleeding"
        ],
        warnings: [
            "Take with food or milk",
            "Do not use if you have stomach ulcers",
            "Avoid if you have kidney problems",
            "May increase risk of heart attack or stroke",
            "Not recommended during pregnancy"
        ],
        whenToSeeDoctor: [
            "If you experience severe stomach pain",
            "If you notice signs of bleeding",
            "If pain persists",
            "If you have heart or kidney conditions"
        ]
    },
    {
        id: "nitroglycerin",
        name: "Nitroglycerin",
        genericName: "Nitroglycerin",
        uses: [
            "Angina (chest pain) treatment",
            "Heart attack prevention",
            "Heart failure"
        ],
        howItWorks: "Nitroglycerin relaxes and widens blood vessels, especially in the heart, improving blood flow and reducing chest pain.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Flushing",
            "Low blood pressure",
            "Fast heartbeat"
        ],
        warnings: [
            "Keep medication with you at all times",
            "Sit or lie down when taking (can cause dizziness)",
            "Do not use with erectile dysfunction medications",
            "May cause severe headache initially",
            "Store properly (light and moisture sensitive)"
        ],
        whenToSeeDoctor: [
            "If chest pain persists after taking",
            "If you experience severe dizziness",
            "If you have signs of heart attack",
            "For regular heart monitoring"
        ]
    },
    // O
    {
        id: "omeprazole",
        name: "Omeprazole",
        genericName: "Omeprazole",
        uses: [
            "Acid reflux (GERD)",
            "Stomach ulcers",
            "Heartburn relief",
            "Zollinger-Ellison syndrome"
        ],
        howItWorks: "Omeprazole is a proton pump inhibitor that reduces stomach acid production by blocking the enzyme system that produces acid in the stomach lining. This helps heal ulcers and reduce acid-related symptoms.",
        sideEffects: [
            "Headache",
            "Diarrhea or constipation",
            "Stomach pain",
            "Nausea",
            "Vitamin B12 deficiency (with long-term use)"
        ],
        warnings: [
            "Take 30-60 minutes before meals",
            "Do not crush or chew capsules",
            "May interact with other medications",
            "Long-term use may increase risk of bone fractures",
            "Inform your doctor of all medications you're taking"
        ],
        whenToSeeDoctor: [
            "If symptoms persist after 2 weeks",
            "If you experience severe stomach pain",
            "If you notice signs of bleeding",
            "If you have difficulty swallowing"
        ]
    },
    {
        id: "ondansetron",
        name: "Ondansetron",
        genericName: "Ondansetron",
        uses: [
            "Nausea and vomiting prevention",
            "Chemotherapy-induced nausea",
            "Post-surgical nausea",
            "Radiation-induced nausea"
        ],
        howItWorks: "Ondansetron blocks serotonin receptors in the brain and gut that trigger nausea and vomiting.",
        sideEffects: [
            "Headache",
            "Constipation",
            "Dizziness",
            "Fatigue",
            "Diarrhea"
        ],
        warnings: [
            "May cause constipation",
            "Inform doctor if you have heart problems",
            "May interact with other medications",
            "Take as directed before procedures",
            "Stay hydrated"
        ],
        whenToSeeDoctor: [
            "If you experience irregular heartbeat",
            "If constipation is severe",
            "If nausea persists",
            "If you have severe side effects"
        ]
    },
    // P
    {
        id: "paracetamol",
        name: "Paracetamol",
        genericName: "Acetaminophen",
        uses: [
            "Pain relief (headaches, muscle aches, toothaches)",
            "Fever reduction",
            "Mild to moderate pain management"
        ],
        howItWorks: "Paracetamol works by blocking the production of certain chemicals in the brain that cause pain and fever. It helps reduce discomfort and lower body temperature.",
        sideEffects: [
            "Nausea (rare)",
            "Stomach upset (rare)",
            "Allergic reactions (very rare)"
        ],
        warnings: [
            "Do not exceed the recommended dose",
            "Avoid alcohol while taking paracetamol",
            "Check with a doctor if you have liver problems",
            "Not suitable for children under 2 months without doctor's advice"
        ],
        whenToSeeDoctor: [
            "If pain persists for more than 3 days",
            "If fever lasts more than 3 days",
            "If you experience severe side effects",
            "If you accidentally take too much"
        ]
    },
    {
        id: "prednisone",
        name: "Prednisone",
        genericName: "Prednisone",
        uses: [
            "Inflammation reduction",
            "Allergic reactions",
            "Autoimmune diseases",
            "Asthma",
            "Arthritis"
        ],
        howItWorks: "Prednisone is a corticosteroid that suppresses the immune system and reduces inflammation throughout the body.",
        sideEffects: [
            "Increased appetite",
            "Weight gain",
            "Mood changes",
            "Insomnia",
            "High blood pressure",
            "Increased blood sugar"
        ],
        warnings: [
            "Do not stop taking suddenly",
            "May increase risk of infections",
            "May cause bone loss with long-term use",
            "Inform doctor if you have diabetes",
            "Take with food to reduce stomach upset"
        ],
        whenToSeeDoctor: [
            "If you develop signs of infection",
            "If you experience mood changes",
            "If you want to stop taking (need medical supervision)",
            "For regular monitoring"
        ]
    },
    {
        id: "pantoprazole",
        name: "Pantoprazole",
        genericName: "Pantoprazole",
        uses: [
            "Acid reflux (GERD)",
            "Stomach ulcers",
            "Heartburn relief",
            "Zollinger-Ellison syndrome"
        ],
        howItWorks: "Pantoprazole is a proton pump inhibitor that reduces stomach acid production by blocking acid-producing enzymes.",
        sideEffects: [
            "Headache",
            "Diarrhea",
            "Nausea",
            "Stomach pain",
            "Vitamin B12 deficiency (long-term)"
        ],
        warnings: [
            "Take before meals",
            "Do not crush tablets",
            "May interact with other medications",
            "Long-term use may increase fracture risk",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If symptoms persist",
            "If you experience severe side effects",
            "If you notice signs of bleeding",
            "For regular monitoring"
        ]
    },
    // Q
    {
        id: "quetiapine",
        name: "Quetiapine",
        genericName: "Quetiapine",
        uses: [
            "Schizophrenia treatment",
            "Bipolar disorder",
            "Major depressive disorder (as add-on)",
            "Anxiety disorders"
        ],
        howItWorks: "Quetiapine is an atypical antipsychotic that works by blocking dopamine and serotonin receptors in the brain, helping to balance brain chemicals and improve mood and thinking.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Dry mouth",
            "Weight gain",
            "Constipation",
            "Increased blood sugar"
        ],
        warnings: [
            "May cause drowsiness - use caution when driving",
            "May cause weight gain and metabolic changes",
            "May increase blood sugar and cholesterol",
            "Do not stop taking suddenly",
            "Avoid alcohol"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If you have thoughts of self-harm",
            "If you develop signs of high blood sugar",
            "For regular monitoring"
        ]
    },
    {
        id: "quinidine",
        name: "Quinidine",
        genericName: "Quinidine",
        uses: [
            "Irregular heartbeat (arrhythmia) treatment",
            "Atrial fibrillation",
            "Atrial flutter",
            "Ventricular arrhythmias"
        ],
        howItWorks: "Quinidine is an antiarrhythmic medication that stabilizes heart rhythm by blocking sodium channels in heart cells, helping to normalize irregular heartbeats.",
        sideEffects: [
            "Nausea or vomiting",
            "Diarrhea",
            "Dizziness",
            "Headache",
            "Ringing in ears",
            "Irregular heartbeat (paradoxical effect)"
        ],
        warnings: [
            "May cause irregular heartbeat - requires monitoring",
            "Inform doctor if you have heart problems",
            "May interact with many medications",
            "Regular EKG monitoring needed",
            "Avoid grapefruit juice"
        ],
        whenToSeeDoctor: [
            "If you experience irregular heartbeat",
            "If you have signs of allergic reaction",
            "If you experience ringing in ears or hearing loss",
            "For regular heart monitoring"
        ]
    },
    {
        id: "qvar",
        name: "Qvar",
        genericName: "Beclomethasone",
        uses: [
            "Asthma treatment and prevention",
            "Chronic obstructive pulmonary disease (COPD)",
            "Allergic rhinitis (nasal spray form)"
        ],
        howItWorks: "Beclomethasone is a corticosteroid that reduces inflammation in the airways by suppressing the immune system's inflammatory response.",
        sideEffects: [
            "Sore throat",
            "Hoarseness",
            "Cough",
            "Headache",
            "Nosebleeds (if nasal spray)"
        ],
        warnings: [
            "Rinse mouth after using inhaler to prevent thrush",
            "Use regularly as prescribed, not just during attacks",
            "Not for immediate relief of asthma attacks",
            "May increase risk of infections",
            "Inform doctor if you have infections"
        ],
        whenToSeeDoctor: [
            "If breathing problems worsen",
            "If you develop signs of infection",
            "If you experience severe side effects",
            "For regular asthma monitoring"
        ]
    },
    // R
    {
        id: "ramipril",
        name: "Ramipril",
        genericName: "Ramipril",
        uses: [
            "High blood pressure treatment",
            "Heart failure",
            "After heart attack",
            "Kidney protection in diabetes"
        ],
        howItWorks: "Ramipril is an ACE inhibitor that relaxes blood vessels by blocking an enzyme that causes narrowing.",
        sideEffects: [
            "Dry cough",
            "Dizziness",
            "Headache",
            "Fatigue",
            "Low blood pressure"
        ],
        warnings: [
            "May cause persistent dry cough",
            "Do not use during pregnancy",
            "May increase potassium levels",
            "Inform doctor if you have kidney problems",
            "Avoid salt substitutes with potassium"
        ],
        whenToSeeDoctor: [
            "If cough is severe",
            "If you experience swelling",
            "If you feel dizzy",
            "For regular monitoring"
        ]
    },
    {
        id: "ranitidine",
        name: "Ranitidine",
        genericName: "Ranitidine",
        uses: [
            "Acid reflux (GERD)",
            "Stomach ulcers",
            "Heartburn relief",
            "Zollinger-Ellison syndrome"
        ],
        howItWorks: "Ranitidine is an H2 blocker that reduces stomach acid production by blocking histamine receptors in the stomach.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Constipation or diarrhea",
            "Nausea"
        ],
        warnings: [
            "May interact with other medications",
            "Take as directed",
            "Inform doctor of all medications",
            "Avoid alcohol",
            "Note: Some formulations have been recalled - check with doctor"
        ],
        whenToSeeDoctor: [
            "If symptoms persist",
            "If you experience severe side effects",
            "If you notice signs of bleeding",
            "For regular monitoring"
        ]
    },
    // S
    {
        id: "sertraline",
        name: "Sertraline",
        genericName: "Sertraline",
        uses: [
            "Depression treatment",
            "Anxiety disorders",
            "Obsessive-compulsive disorder",
            "Panic disorder",
            "Post-traumatic stress disorder"
        ],
        howItWorks: "Sertraline is an SSRI that increases serotonin levels in the brain, improving mood and reducing anxiety.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Insomnia or drowsiness",
            "Dry mouth",
            "Sexual problems"
        ],
        warnings: [
            "May take 2-4 weeks to see effects",
            "Do not stop taking suddenly",
            "May increase risk of suicidal thoughts",
            "Avoid alcohol",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you have thoughts of self-harm",
            "If depression worsens",
            "If you experience severe side effects",
            "For regular mental health monitoring"
        ]
    },
    {
        id: "simvastatin",
        name: "Simvastatin",
        genericName: "Simvastatin",
        uses: [
            "High cholesterol treatment",
            "Heart disease prevention",
            "Stroke prevention"
        ],
        howItWorks: "Simvastatin is a statin that blocks an enzyme in the liver that produces cholesterol, lowering LDL and raising HDL.",
        sideEffects: [
            "Muscle pain or weakness",
            "Headache",
            "Nausea",
            "Liver problems (rare)",
            "Memory problems (rare)"
        ],
        warnings: [
            "Avoid grapefruit juice",
            "Inform doctor if you have liver disease",
            "May interact with other medications",
            "Regular blood tests may be needed",
            "Not recommended during pregnancy"
        ],
        whenToSeeDoctor: [
            "If you experience severe muscle pain",
            "If you have signs of liver problems",
            "If you have unexplained muscle tenderness",
            "For regular cholesterol monitoring"
        ]
    },
    // T
    {
        id: "tramadol",
        name: "Tramadol",
        genericName: "Tramadol",
        uses: [
            "Moderate to severe pain relief",
            "Chronic pain",
            "Post-surgical pain"
        ],
        howItWorks: "Tramadol is an opioid-like medication that blocks pain signals in the brain and increases levels of serotonin and norepinephrine.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Nausea or vomiting",
            "Constipation",
            "Headache"
        ],
        warnings: [
            "Can be addictive",
            "Avoid alcohol",
            "May cause drowsiness - do not drive",
            "Do not stop suddenly",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If you develop signs of dependence",
            "If pain is not controlled",
            "If you want to stop taking"
        ]
    },
    {
        id: "trazodone",
        name: "Trazodone",
        genericName: "Trazodone",
        uses: [
            "Depression treatment",
            "Insomnia",
            "Anxiety"
        ],
        howItWorks: "Trazodone is an antidepressant that increases serotonin levels in the brain, improving mood and promoting sleep.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Dry mouth",
            "Headache",
            "Nausea"
        ],
        warnings: [
            "May cause significant drowsiness",
            "Take at bedtime if used for sleep",
            "Avoid alcohol",
            "May take weeks to see antidepressant effects",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If you have thoughts of self-harm",
            "If depression worsens",
            "For regular monitoring"
        ]
    },
    // U
    {
        id: "uroxatral",
        name: "Uroxatral",
        genericName: "Alfuzosin",
        uses: [
            "Benign prostatic hyperplasia (BPH)",
            "Enlarged prostate treatment",
            "Urinary symptoms in men"
        ],
        howItWorks: "Alfuzosin is an alpha-blocker that relaxes muscles in the prostate and bladder neck, making it easier to urinate and reducing symptoms of enlarged prostate.",
        sideEffects: [
            "Dizziness",
            "Headache",
            "Fatigue",
            "Low blood pressure",
            "Fainting (rare)"
        ],
        warnings: [
            "May cause dizziness or fainting - take at bedtime",
            "Do not drive until you know how it affects you",
            "May cause low blood pressure",
            "Inform doctor if you have liver problems",
            "Avoid alcohol (increases dizziness)"
        ],
        whenToSeeDoctor: [
            "If you experience dizziness or fainting",
            "If urinary symptoms worsen",
            "If you have signs of allergic reaction",
            "For regular monitoring"
        ]
    },
    {
        id: "ursodiol",
        name: "Ursodiol",
        genericName: "Ursodeoxycholic Acid",
        uses: [
            "Gallstone dissolution",
            "Primary biliary cholangitis",
            "Liver disease treatment",
            "Prevention of gallstone formation"
        ],
        howItWorks: "Ursodiol works by reducing the amount of cholesterol produced by the liver and dissolving cholesterol-based gallstones, and by protecting liver cells from damage.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Stomach upset",
            "Constipation",
            "Hair loss (rare)"
        ],
        warnings: [
            "Take with food to reduce stomach upset",
            "May take months to dissolve gallstones",
            "Regular liver function tests needed",
            "Inform doctor if you have liver problems",
            "May interact with other medications"
        ],
        whenToSeeDoctor: [
            "If you experience severe diarrhea",
            "If you have signs of liver problems",
            "If symptoms don't improve",
            "For regular liver function monitoring"
        ]
    },
    {
        id: "ubrelvy",
        name: "Ubrelvy",
        genericName: "Ubrogepant",
        uses: [
            "Migraine treatment",
            "Acute migraine attacks"
        ],
        howItWorks: "Ubrogepant is a CGRP receptor antagonist that blocks calcitonin gene-related peptide receptors, which play a role in migraine pain, providing relief from migraine attacks.",
        sideEffects: [
            "Nausea",
            "Drowsiness",
            "Dry mouth",
            "Fatigue"
        ],
        warnings: [
            "Take at the first sign of migraine",
            "Do not use more than 8 tablets per month",
            "May interact with other medications",
            "Inform doctor if you have liver or kidney problems",
            "Not for migraine prevention"
        ],
        whenToSeeDoctor: [
            "If migraines become more frequent",
            "If medication doesn't work",
            "If you experience severe side effects",
            "For regular migraine management"
        ]
    },
    // V
    {
        id: "valsartan",
        name: "Valsartan",
        genericName: "Valsartan",
        uses: [
            "High blood pressure treatment",
            "Heart failure",
            "After heart attack",
            "Kidney protection in diabetes"
        ],
        howItWorks: "Valsartan is an angiotensin II receptor blocker that relaxes blood vessels by blocking hormones that cause narrowing.",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Low blood pressure",
            "High potassium levels",
            "Cough"
        ],
        warnings: [
            "Do not use during pregnancy",
            "May increase potassium levels",
            "Inform doctor if you have kidney problems",
            "Avoid salt substitutes with potassium",
            "Take at the same time each day"
        ],
        whenToSeeDoctor: [
            "If you experience severe dizziness",
            "If you have signs of high potassium",
            "If you feel faint",
            "For regular blood pressure monitoring"
        ]
    },
    {
        id: "venlafaxine",
        name: "Venlafaxine",
        genericName: "Venlafaxine",
        uses: [
            "Depression treatment",
            "Anxiety disorders",
            "Panic disorder",
            "Social anxiety disorder"
        ],
        howItWorks: "Venlafaxine is an SNRI that increases serotonin and norepinephrine levels in the brain, improving mood and reducing anxiety.",
        sideEffects: [
            "Nausea",
            "Drowsiness",
            "Dry mouth",
            "Insomnia",
            "Increased blood pressure"
        ],
        warnings: [
            "Do not stop taking suddenly",
            "May increase blood pressure",
            "May increase risk of suicidal thoughts",
            "Avoid alcohol",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you have thoughts of self-harm",
            "If you experience high blood pressure",
            "If depression worsens",
            "For regular monitoring"
        ]
    },
    // W
    {
        id: "warfarin",
        name: "Warfarin",
        genericName: "Warfarin",
        uses: [
            "Blood clot prevention",
            "Atrial fibrillation",
            "Deep vein thrombosis",
            "Pulmonary embolism prevention",
            "After heart valve replacement"
        ],
        howItWorks: "Warfarin is an anticoagulant that prevents blood clots by blocking the action of vitamin K, which is needed for blood clotting.",
        sideEffects: [
            "Easy bruising or bleeding",
            "Nosebleeds",
            "Bleeding gums",
            "Heavy menstrual periods",
            "Blood in urine or stools"
        ],
        warnings: [
            "Requires regular blood tests (INR monitoring)",
            "Many drug and food interactions",
            "Avoid alcohol",
            "Inform all doctors and dentists you're taking warfarin",
            "Maintain consistent vitamin K intake"
        ],
        whenToSeeDoctor: [
            "If you experience unusual bleeding",
            "If you have signs of internal bleeding",
            "If you develop severe bruising",
            "For regular INR monitoring"
        ]
    },
    // X
    {
        id: "xanax",
        name: "Xanax",
        genericName: "Alprazolam",
        uses: [
            "Anxiety disorders",
            "Panic disorder",
            "Anxiety with depression",
            "Insomnia (short-term)"
        ],
        howItWorks: "Alprazolam is a benzodiazepine that enhances GABA activity in the brain, producing calming and anti-anxiety effects.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Fatigue",
            "Memory problems",
            "Coordination problems"
        ],
        warnings: [
            "Highly addictive - use only as prescribed",
            "Do not use long-term",
            "Avoid alcohol (can be dangerous)",
            "May cause drowsiness - do not drive",
            "Do not stop suddenly (can cause withdrawal)"
        ],
        whenToSeeDoctor: [
            "If you experience severe drowsiness",
            "If you develop signs of dependence",
            "If you want to stop taking (need medical supervision)",
            "If you have thoughts of self-harm"
        ]
    },
    {
        id: "xarelto",
        name: "Xarelto",
        genericName: "Rivaroxaban",
        uses: [
            "Blood clot prevention",
            "Atrial fibrillation",
            "Deep vein thrombosis",
            "Pulmonary embolism",
            "After hip or knee replacement surgery"
        ],
        howItWorks: "Rivaroxaban is a direct factor Xa inhibitor that prevents blood clots by blocking a key enzyme in the blood clotting process.",
        sideEffects: [
            "Easy bruising or bleeding",
            "Nosebleeds",
            "Bleeding gums",
            "Back pain",
            "Itching"
        ],
        warnings: [
            "Increases risk of bleeding",
            "Do not stop taking without doctor's advice",
            "Inform all doctors and dentists you're taking Xarelto",
            "Avoid activities with high risk of bleeding",
            "May interact with other medications"
        ],
        whenToSeeDoctor: [
            "If you experience unusual bleeding",
            "If you have signs of internal bleeding",
            "If you develop severe bruising",
            "Before any surgery or dental procedures"
        ]
    },
    {
        id: "xeloda",
        name: "Xeloda",
        genericName: "Capecitabine",
        uses: [
            "Colon cancer treatment",
            "Breast cancer treatment",
            "Gastric cancer",
            "Pancreatic cancer"
        ],
        howItWorks: "Capecitabine is a chemotherapy drug that is converted in the body to 5-fluorouracil, which interferes with cancer cell DNA and RNA, preventing cancer cells from growing and dividing.",
        sideEffects: [
            "Nausea or vomiting",
            "Diarrhea",
            "Hand-foot syndrome (redness, pain, peeling)",
            "Fatigue",
            "Low blood cell counts",
            "Mouth sores"
        ],
        warnings: [
            "Requires close medical supervision",
            "May cause severe side effects",
            "Regular blood tests needed",
            "Avoid pregnancy during treatment",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you experience severe diarrhea or vomiting",
            "If you develop hand-foot syndrome",
            "If you have signs of infection",
            "For regular cancer treatment monitoring"
        ]
    },
    {
        id: "xopenex",
        name: "Xopenex",
        genericName: "Levalbuterol",
        uses: [
            "Asthma treatment",
            "Bronchospasm relief",
            "Chronic obstructive pulmonary disease (COPD)",
            "Exercise-induced asthma"
        ],
        howItWorks: "Levalbuterol is a bronchodilator that relaxes muscles in the airways, opening up the breathing passages and making it easier to breathe.",
        sideEffects: [
            "Nervousness",
            "Tremor",
            "Fast heartbeat",
            "Headache",
            "Dizziness"
        ],
        warnings: [
            "For quick relief of asthma symptoms",
            "May cause fast heartbeat",
            "Inform doctor if you have heart problems",
            "Do not exceed recommended dose",
            "Seek medical help if symptoms worsen"
        ],
        whenToSeeDoctor: [
            "If breathing problems worsen",
            "If you experience irregular heartbeat",
            "If medication doesn't provide relief",
            "For regular asthma monitoring"
        ]
    },
    // Y
    {
        id: "yasmin",
        name: "Yasmin",
        genericName: "Drospirenone/Ethinyl Estradiol",
        uses: [
            "Birth control",
            "Acne treatment",
            "Menstrual cycle regulation",
            "Polycystic ovary syndrome (PCOS)"
        ],
        howItWorks: "Yasmin is a combination oral contraceptive that prevents pregnancy by stopping ovulation, thickening cervical mucus to block sperm, and thinning the uterine lining.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Breast tenderness",
            "Mood changes",
            "Weight gain",
            "Increased risk of blood clots"
        ],
        warnings: [
            "Increases risk of blood clots",
            "Do not smoke (especially if over 35)",
            "Take at the same time each day",
            "May interact with other medications",
            "Inform doctor if you have history of blood clots"
        ],
        whenToSeeDoctor: [
            "If you miss pills",
            "If you experience signs of blood clot (chest pain, leg pain, shortness of breath)",
            "If you have severe headaches",
            "For regular check-ups"
        ]
    },
    {
        id: "yaz",
        name: "Yaz",
        genericName: "Drospirenone/Ethinyl Estradiol",
        uses: [
            "Birth control",
            "Premenstrual dysphoric disorder (PMDD)",
            "Acne treatment",
            "Menstrual cycle regulation"
        ],
        howItWorks: "Yaz is a combination oral contraceptive that prevents pregnancy by stopping ovulation and also helps with PMDD symptoms by stabilizing hormone levels.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Breast tenderness",
            "Mood changes",
            "Weight gain",
            "Increased risk of blood clots"
        ],
        warnings: [
            "Increases risk of blood clots",
            "Do not smoke (especially if over 35)",
            "Take at the same time each day",
            "May interact with other medications",
            "Inform doctor if you have history of blood clots"
        ],
        whenToSeeDoctor: [
            "If you miss pills",
            "If you experience signs of blood clot",
            "If you have severe headaches",
            "For regular check-ups"
        ]
    },
    {
        id: "yervoy",
        name: "Yervoy",
        genericName: "Ipilimumab",
        uses: [
            "Melanoma treatment",
            "Kidney cancer",
            "Colon cancer",
            "Advanced cancer treatment"
        ],
        howItWorks: "Ipilimumab is an immunotherapy drug that works by blocking a protein that prevents the immune system from attacking cancer cells, allowing the immune system to fight cancer.",
        sideEffects: [
            "Fatigue",
            "Diarrhea",
            "Skin rash",
            "Nausea",
            "Liver problems",
            "Autoimmune reactions"
        ],
        warnings: [
            "Requires close medical supervision",
            "May cause severe immune system reactions",
            "Regular monitoring needed",
            "May cause inflammation of organs",
            "Inform doctor of all medications"
        ],
        whenToSeeDoctor: [
            "If you experience severe diarrhea",
            "If you develop signs of liver problems",
            "If you have signs of infection",
            "For regular cancer treatment monitoring"
        ]
    },
    // Z
    {
        id: "zolpidem",
        name: "Zolpidem",
        genericName: "Zolpidem",
        uses: [
            "Insomnia treatment (short-term)",
            "Sleep disorders"
        ],
        howItWorks: "Zolpidem is a sedative-hypnotic that enhances GABA activity in the brain, promoting sleep.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Headache",
            "Memory problems",
            "Sleepwalking (rare)"
        ],
        warnings: [
            "Use only for short-term (2-4 weeks)",
            "Can be habit-forming",
            "Take right before bed",
            "May cause drowsiness next day",
            "Avoid alcohol"
        ],
        whenToSeeDoctor: [
            "If you experience sleepwalking",
            "If you develop memory problems",
            "If you want to stop taking",
            "If insomnia persists"
        ]
    },
    {
        id: "zopiclone",
        name: "Zopiclone",
        genericName: "Zopiclone",
        uses: [
            "Insomnia treatment",
            "Sleep disorders"
        ],
        howItWorks: "Zopiclone is a sedative-hypnotic that enhances GABA activity, promoting sleep.",
        sideEffects: [
            "Drowsiness",
            "Bitter taste in mouth",
            "Dry mouth",
            "Headache",
            "Dizziness"
        ],
        warnings: [
            "Use only short-term",
            "Can be habit-forming",
            "Take right before bed",
            "May cause next-day drowsiness",
            "Avoid alcohol"
        ],
        whenToSeeDoctor: [
            "If you develop dependence",
            "If you experience severe side effects",
            "If you want to stop taking",
            "If insomnia persists"
        ]
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.medicinesData = medicinesData;
}
