import React, { useState } from 'react';

const DiseaseCalculator = () => {
    const [symptoms, setSymptoms] = useState('');
    const [result, setResult] = useState(null);

    const diseases = {
        'yellow leaves': {
            disease: 'Nitrogen Deficiency',
            solution: 'Apply a nitrogen-rich fertilizer',
            cost: '£10 per m²',
            reasoning: 'Nitrogen is essential for plant growth and chlorophyll production. A deficiency leads to yellowing leaves.',
            solutionReasoning: 'Applying a nitrogen-rich fertilizer replenishes the nitrogen in the soil, promoting healthy leaf growth.'
        },
        'brown spots': {
            disease: 'Fungal Infection',
            solution: 'Use a fungicide',
            cost: '£15 per m²',
            reasoning: 'Fungal infections cause brown spots on leaves due to the pathogen attacking plant tissues.',
            solutionReasoning: 'Using a fungicide helps to kill the fungal spores and prevent the spread of the infection.'
        },
        'wilting': {
            disease: 'Underwatering',
            solution: 'Increase watering frequency',
            cost: 'Free',
            reasoning: 'Wilting occurs when plants do not receive enough water, leading to loss of turgor pressure in cells.',
            solutionReasoning: 'Increasing watering frequency ensures that the plant receives adequate moisture to maintain turgor pressure and stay healthy.'
        },
        'white powder': {
            disease: 'Powdery Mildew',
            solution: 'Apply a fungicide',
            cost: '£15 per m²',
            reasoning: 'Powdery mildew is a fungal disease that appears as white powder on leaves, reducing photosynthesis.',
            solutionReasoning: 'Applying a fungicide helps to eliminate the fungal spores and prevent further spread of the disease.'
        }
    };

    const handleCalculate = () => {
        const diseaseInfo = diseases[symptoms.toLowerCase()];
        if (diseaseInfo) {
            setResult(diseaseInfo);
        } else {
            setResult({
                disease: 'Unknown',
                solution: 'Consult an expert',
                cost: 'Varies',
                reasoning: 'The symptoms do not match any known diseases in our database.',
                solutionReasoning: 'Consulting an expert can provide a more accurate diagnosis and appropriate solution.'
            });
        }
    };

    return (
        <div>
            <h1>Plant Disease Calculator</h1>
            <input
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Enter symptoms"
            />
            <button onClick={handleCalculate}>Calculate</button>
            {result && (
                <div>
                    <h2>Disease: {result.disease}</h2>
                    <p>Reasoning: {result.reasoning}</p>
                    <p>Solution: {result.solution}</p>
                    <p>Solution Reasoning: {result.solutionReasoning}</p>
                    <p>Cost: {result.cost}</p>
                </div>
            )}
        </div>
    );
};

export default DiseaseCalculator;