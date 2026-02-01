// Comprehensive Diseases Database A-Z for HealthBridge Ethiopia
const diseasesData = [
    // A
    {id: "asthma", name: "Asthma", description: "Chronic lung condition causing airway inflammation and breathing difficulty.", symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty breathing"], causes: ["Genetic factors", "Allergens", "Respiratory infections", "Air pollution"], prevention: ["Avoid triggers", "Use medications", "Get vaccinated", "Avoid smoking"], whenToSeekCare: ["If frequent attacks", "If symptoms interfere", "If severe breathing difficulty"]},
    {id: "anemia", name: "Anemia", description: "Condition with insufficient red blood cells to carry oxygen.", symptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Dizziness", "Cold hands"], causes: ["Iron deficiency", "B12 deficiency", "Blood loss", "Chronic diseases"], prevention: ["Eat iron-rich foods", "Get B12", "Manage conditions"], whenToSeekCare: ["If persistent fatigue", "If signs of anemia"]},
    {id: "arthritis", name: "Arthritis", description: "Inflammation of joints causing pain and stiffness.", symptoms: ["Joint pain", "Swelling", "Stiffness", "Reduced motion"], causes: ["Age", "Injury", "Autoimmune", "Obesity"], prevention: ["Maintain weight", "Exercise", "Protect joints"], whenToSeekCare: ["If pain persists", "If interferes with activities"]},
    {id: "appendicitis", name: "Appendicitis", description: "Inflammation of appendix - medical emergency.", symptoms: ["Abdominal pain", "Nausea", "Fever", "Loss of appetite"], causes: ["Blockage", "Infection"], prevention: ["High-fiber diet"], whenToSeekCare: ["EMERGENCY - immediate care needed"]},
    {id: "alzheimers", name: "Alzheimer's Disease", description: "Progressive brain disorder causing memory loss.", symptoms: ["Memory loss", "Confusion", "Difficulty planning"], causes: ["Age", "Genetics", "Head trauma"], prevention: ["Stay active", "Exercise", "Healthy diet"], whenToSeekCare: ["If memory problems", "If symptoms worsen"]},
    // B  
    {id: "bronchitis", name: "Bronchitis", description: "Inflammation of bronchial tubes.", symptoms: ["Persistent cough", "Chest discomfort", "Shortness of breath"], causes: ["Viral infections", "Smoking", "Pollution"], prevention: ["Avoid smoking", "Get vaccinated"], whenToSeekCare: ["If cough persists", "If difficulty breathing"]},
    {id: "bells-palsy", name: "Bell's Palsy", description: "Sudden weakness or paralysis of facial muscles.", symptoms: ["Facial drooping", "Difficulty closing eye", "Loss of taste"], causes: ["Viral infection", "Inflammation"], prevention: ["Manage stress", "Good hygiene"], whenToSeekCare: ["If facial paralysis", "For treatment"]},
    {id: "bipolar", name: "Bipolar Disorder", description: "Mental health condition with extreme mood swings.", symptoms: ["Manic episodes", "Depression", "Mood swings"], causes: ["Genetics", "Brain chemistry", "Environmental"], prevention: ["Manage stress", "Regular sleep"], whenToSeekCare: ["If mood swings severe", "For mental health support"]},
    // C
    {id: "cancer", name: "Cancer", description: "Disease where cells grow uncontrollably.", symptoms: ["Lumps", "Unexplained weight loss", "Fatigue", "Persistent pain"], causes: ["Genetics", "Tobacco", "Radiation", "Viruses"], prevention: ["Don't smoke", "Healthy diet", "Exercise", "Screenings"], whenToSeekCare: ["If suspicious symptoms", "For screenings"]},
    {id: "cholera", name: "Cholera", description: "Bacterial infection causing severe diarrhea.", symptoms: ["Severe diarrhea", "Vomiting", "Dehydration"], causes: ["Contaminated water", "Poor sanitation"], prevention: ["Safe water", "Good hygiene", "Vaccination"], whenToSeekCare: ["If severe diarrhea", "If dehydration"]},
    {id: "chickenpox", name: "Chickenpox", description: "Viral infection causing itchy blisters.", symptoms: ["Rash", "Fever", "Itching", "Fatigue"], causes: ["Varicella-zoster virus"], prevention: ["Vaccination"], whenToSeekCare: ["If severe symptoms", "If complications"]},
    {id: "copd", name: "COPD", description: "Chronic obstructive pulmonary disease.", symptoms: ["Shortness of breath", "Chronic cough", "Wheezing"], causes: ["Smoking", "Air pollution"], prevention: ["Don't smoke", "Avoid pollutants"], whenToSeekCare: ["If breathing problems", "For management"]},
    // D
    {id: "diabetes", name: "Diabetes", description: "Condition affecting blood sugar regulation.", symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision"], causes: ["Insulin resistance", "Genetics", "Obesity"], prevention: ["Healthy weight", "Exercise", "Healthy diet"], whenToSeekCare: ["If symptoms present", "For screening"]},
    {id: "dengue", name: "Dengue Fever", description: "Mosquito-borne viral infection.", symptoms: ["High fever", "Severe headache", "Joint pain", "Rash"], causes: ["Mosquito bites"], prevention: ["Mosquito control", "Bed nets", "Repellent"], whenToSeekCare: ["If fever with rash", "If severe symptoms"]},
    {id: "depression", name: "Depression", description: "Mental health disorder with persistent sadness.", symptoms: ["Sadness", "Loss of interest", "Fatigue", "Sleep problems"], causes: ["Brain chemistry", "Genetics", "Life events"], prevention: ["Exercise", "Social support", "Stress management"], whenToSeekCare: ["If persistent sadness", "If thoughts of self-harm"]},
    {id: "diarrhea", name: "Diarrhea", description: "Frequent loose or watery stools.", symptoms: ["Loose stools", "Abdominal cramps", "Dehydration"], causes: ["Infections", "Food poisoning", "Medications"], prevention: ["Hand hygiene", "Safe food", "Clean water"], whenToSeekCare: ["If severe", "If dehydration", "If persists"]},
    // E
    {id: "epilepsy", name: "Epilepsy", description: "Neurological disorder causing seizures.", symptoms: ["Seizures", "Loss of consciousness", "Staring spells"], causes: ["Brain injury", "Genetics", "Infections"], prevention: ["Prevent head injuries", "Manage triggers"], whenToSeekCare: ["If seizures occur", "For management"]},
    {id: "eczema", name: "Eczema", description: "Skin condition causing inflammation and itching.", symptoms: ["Itchy skin", "Red patches", "Dry skin"], causes: ["Genetics", "Allergens", "Irritants"], prevention: ["Moisturize", "Avoid triggers"], whenToSeekCare: ["If severe", "If infected"]},
    // F
    {id: "flu", name: "Influenza (Flu)", description: "Viral respiratory infection.", symptoms: ["Fever", "Cough", "Body aches", "Fatigue"], causes: ["Influenza virus"], prevention: ["Vaccination", "Hand hygiene"], whenToSeekCare: ["If severe", "If complications"]},
    {id: "fibromyalgia", name: "Fibromyalgia", description: "Chronic pain condition.", symptoms: ["Widespread pain", "Fatigue", "Sleep problems"], causes: ["Unknown", "Genetics", "Trauma"], prevention: ["Exercise", "Stress management"], whenToSeekCare: ["If persistent pain", "For diagnosis"]},
    // G
    {id: "gout", name: "Gout", description: "Form of arthritis from uric acid buildup.", symptoms: ["Joint pain", "Swelling", "Redness"], causes: ["High uric acid", "Diet", "Genetics"], prevention: ["Limit alcohol", "Healthy diet", "Stay hydrated"], whenToSeekCare: ["If severe pain", "If frequent attacks"]},
    {id: "gonorrhea", name: "Gonorrhea", description: "Sexually transmitted bacterial infection.", symptoms: ["Discharge", "Painful urination", "Often no symptoms"], causes: ["Bacterial infection"], prevention: ["Safe sex", "Condoms"], whenToSeekCare: ["If symptoms", "For testing"]},
    // H
    {id: "hypertension", name: "Hypertension", description: "High blood pressure.", symptoms: ["Often no symptoms", "Headache", "Dizziness"], causes: ["Age", "Obesity", "Genetics"], prevention: ["Healthy diet", "Exercise", "Limit salt"], whenToSeekCare: ["For screening", "If symptoms"]},
    {id: "hiv", name: "HIV/AIDS", description: "Viral infection affecting immune system.", symptoms: ["Early: flu-like", "Later: infections", "Weight loss"], causes: ["HIV virus"], prevention: ["Safe sex", "No sharing needles"], whenToSeekCare: ["If exposed", "For testing"]},
    {id: "hepatitis", name: "Hepatitis", description: "Inflammation of the liver.", symptoms: ["Fatigue", "Jaundice", "Abdominal pain"], causes: ["Viruses", "Alcohol", "Toxins"], prevention: ["Vaccination", "Safe practices"], whenToSeekCare: ["If symptoms", "If exposed"]},
    // I
    {id: "influenza", name: "Influenza", description: "Viral respiratory illness.", symptoms: ["Fever", "Cough", "Body aches"], causes: ["Influenza virus"], prevention: ["Vaccination"], whenToSeekCare: ["If severe", "If complications"]},
    // J
    {id: "jaundice", name: "Jaundice", description: "Yellowing of skin and eyes.", symptoms: ["Yellow skin", "Yellow eyes", "Dark urine"], causes: ["Liver disease", "Gallstones", "Infections"], prevention: ["Limit alcohol", "Vaccinations"], whenToSeekCare: ["If jaundice appears", "If severe"]},
    // K
    {id: "kidney-disease", name: "Kidney Disease", description: "Impaired kidney function.", symptoms: ["Fatigue", "Swelling", "Changes in urination"], causes: ["Diabetes", "Hypertension", "Infections"], prevention: ["Control blood pressure", "Manage diabetes"], whenToSeekCare: ["If symptoms", "For screening"]},
    // L
    {id: "lupus", name: "Lupus", description: "Autoimmune disease.", symptoms: ["Joint pain", "Rash", "Fatigue"], causes: ["Autoimmune", "Genetics"], prevention: ["Sun protection"], whenToSeekCare: ["If symptoms", "For diagnosis"]},
    {id: "leukemia", name: "Leukemia", description: "Blood cancer.", symptoms: ["Fatigue", "Frequent infections", "Bruising"], causes: ["Unknown", "Radiation", "Genetics"], prevention: ["Avoid radiation"], whenToSeekCare: ["If symptoms", "For evaluation"]},
    // M
    {id: "malaria", name: "Malaria", description: "Parasitic disease from mosquitoes.", symptoms: ["High fever", "Chills", "Headache", "Nausea"], causes: ["Mosquito bites"], prevention: ["Bed nets", "Repellent", "Medication"], whenToSeekCare: ["If fever in endemic area", "If symptoms"]},
    {id: "measles", name: "Measles", description: "Viral infection with rash.", symptoms: ["Fever", "Rash", "Cough"], causes: ["Measles virus"], prevention: ["Vaccination"], whenToSeekCare: ["If symptoms", "If exposed"]},
    {id: "meningitis", name: "Meningitis", description: "Inflammation of brain/spinal cord membranes.", symptoms: ["Fever", "Headache", "Stiff neck"], causes: ["Bacteria", "Viruses"], prevention: ["Vaccination"], whenToSeekCare: ["EMERGENCY - immediate care"]},
    // N
    {id: "nephritis", name: "Nephritis", description: "Kidney inflammation.", symptoms: ["Blood in urine", "Swelling", "Hypertension"], causes: ["Infections", "Autoimmune"], prevention: ["Treat infections"], whenToSeekCare: ["If symptoms", "For diagnosis"]},
    // O
    {id: "osteoporosis", name: "Osteoporosis", description: "Weak, brittle bones.", symptoms: ["Bone fractures", "Loss of height"], causes: ["Age", "Hormones", "Nutrition"], prevention: ["Calcium", "Vitamin D", "Exercise"], whenToSeekCare: ["For screening", "If fractures"]},
    {id: "obesity", name: "Obesity", description: "Excessive body fat.", symptoms: ["Excess weight", "Difficulty moving"], causes: ["Diet", "Lack of exercise", "Genetics"], prevention: ["Healthy diet", "Exercise"], whenToSeekCare: ["For management", "If complications"]},
    // P
    {id: "pneumonia", name: "Pneumonia", description: "Lung infection.", symptoms: ["Cough", "Fever", "Difficulty breathing"], causes: ["Bacteria", "Viruses"], prevention: ["Vaccination", "Good hygiene"], whenToSeekCare: ["If severe", "If difficulty breathing"]},
    {id: "parkinsons", name: "Parkinson's Disease", description: "Neurological movement disorder.", symptoms: ["Tremors", "Stiffness", "Slow movement"], causes: ["Unknown", "Genetics"], prevention: ["Exercise"], whenToSeekCare: ["If symptoms", "For diagnosis"]},
    // Q
    {id: "quinsy", name: "Quinsy", description: "Complication of tonsillitis.", symptoms: ["Severe throat pain", "Difficulty swallowing"], causes: ["Bacterial infection"], prevention: ["Treat tonsillitis"], whenToSeekCare: ["If severe throat pain", "If difficulty swallowing"]},
    // R
    {id: "rheumatoid-arthritis", name: "Rheumatoid Arthritis", description: "Autoimmune joint disease.", symptoms: ["Joint pain", "Swelling", "Stiffness"], causes: ["Autoimmune"], prevention: ["Early treatment"], whenToSeekCare: ["If symptoms", "For diagnosis"]},
    // S
    {id: "stroke", name: "Stroke", description: "Brain damage from blood flow interruption.", symptoms: ["Sudden weakness", "Speech problems", "Vision loss"], causes: ["Blood clots", "Bleeding"], prevention: ["Control blood pressure", "Don't smoke"], whenToSeekCare: ["EMERGENCY - immediate care"]},
    {id: "sepsis", name: "Sepsis", description: "Life-threatening infection response.", symptoms: ["Fever", "Rapid breathing", "Confusion"], causes: ["Infections"], prevention: ["Treat infections"], whenToSeekCare: ["EMERGENCY - immediate care"]},
    // T
    {id: "tuberculosis", name: "Tuberculosis", description: "Bacterial lung infection.", symptoms: ["Persistent cough", "Weight loss", "Night sweats"], causes: ["TB bacteria"], prevention: ["Vaccination", "Early treatment"], whenToSeekCare: ["If persistent cough", "If exposed"]},
    {id: "typhoid", name: "Typhoid Fever", description: "Bacterial infection from contaminated food/water.", symptoms: ["High fever", "Weakness", "Stomach pain"], causes: ["Salmonella bacteria"], prevention: ["Safe food/water", "Vaccination"], whenToSeekCare: ["If symptoms", "If exposed"]},
    // U
    {id: "ulcer", name: "Peptic Ulcer", description: "Sores in stomach or intestines.", symptoms: ["Stomach pain", "Bloating", "Nausea"], causes: ["H. pylori", "NSAIDs"], prevention: ["Treat infections", "Limit NSAIDs"], whenToSeekCare: ["If symptoms", "If bleeding"]},
    // V
    {id: "varicella", name: "Varicella (Chickenpox)", description: "Viral infection with blisters.", symptoms: ["Rash", "Fever", "Itching"], causes: ["Varicella virus"], prevention: ["Vaccination"], whenToSeekCare: ["If severe", "If complications"]},
    // W
    {id: "whooping-cough", name: "Whooping Cough", description: "Bacterial respiratory infection.", symptoms: ["Severe cough", "Whooping sound", "Vomiting"], causes: ["Bordetella bacteria"], prevention: ["Vaccination"], whenToSeekCare: ["If symptoms", "If exposed"]},
    // X
    {id: "xerophthalmia", name: "Xerophthalmia", description: "Dry eye condition from vitamin A deficiency.", symptoms: ["Dry eyes", "Night blindness"], causes: ["Vitamin A deficiency"], prevention: ["Adequate nutrition"], whenToSeekCare: ["If symptoms", "For treatment"]},
    // Y
    {id: "yellow-fever", name: "Yellow Fever", description: "Mosquito-borne viral disease.", symptoms: ["Fever", "Jaundice", "Bleeding"], causes: ["Virus", "Mosquito bites"], prevention: ["Vaccination", "Mosquito control"], whenToSeekCare: ["If symptoms", "If in endemic area"]},
    // Z
    {id: "zika", name: "Zika Virus", description: "Mosquito-borne viral infection.", symptoms: ["Fever", "Rash", "Joint pain"], causes: ["Zika virus", "Mosquito bites"], prevention: ["Mosquito control", "Repellent"], whenToSeekCare: ["If symptoms", "If pregnant and exposed"]}
];

if (typeof window !== 'undefined') {
    window.diseasesData = diseasesData;
}
