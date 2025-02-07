import React, { useState, useEffect } from 'react';
import './Yaseen.css'; // Make sure to create this CSS file

const Yaseen = () => {
    const [ph, setPh] = useState(7);
    const [temperature, setTemperature] = useState('');
    const [rainfall, setRainfall] = useState('');
    const [soilMinerals, setSoilMinerals] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCalculate = () => {
        setLoading(true);
        setTimeout(() => {
            let recommendationText = 'Solution: ';

            if (ph < 6.0) {
                recommendationText += 'Increase pH levels by adding lime or wood ash. ';
            } else if (ph > 7.5) {
                recommendationText += 'Decrease pH levels by adding sulfur or organic matter. ';
            } else {
                recommendationText += 'pH levels are optimal. ';
            }

            if (temperature < 15) {
                recommendationText += 'Increase soil temperature by using black plastic mulch or increasing sunlight exposure. ';
            } else if (temperature > 30) {
                recommendationText += 'Decrease soil temperature by using shade cloth or increasing irrigation. ';
            } else {
                recommendationText += 'Soil temperature is optimal. ';
            }

            if (rainfall < 20) {
                recommendationText += 'Increase irrigation to ensure adequate water supply. ';
            } else if (rainfall > 50) {
                recommendationText += 'Improve drainage to prevent waterlogging. ';
            } else {
                recommendationText += 'Rainfall levels are optimal. ';
            }

            if (soilMinerals < 50) {
                recommendationText += 'Add more minerals to the soil by using balanced fertilizers or compost. ';
            } else if (soilMinerals > 150) {
                recommendationText += 'Reduce mineral content by leaching excess minerals with water or using gypsum. ';
            } else {
                recommendationText += 'Soil mineral levels are optimal. ';
            }

            setRecommendation(recommendationText);
            setLoading(false);
        }, 2000); // Simulate a 2-second loading time
    };

    const isFormValid = () => {
        return ph !== '' && temperature !== '' && rainfall !== '' && soilMinerals !== '';
    };

    return (
        <div>
            <h1>Soil Regulation Calculator</h1>
            <div>
                <label>
                    pH:
                    <input type="range" min="0" max="14" step="0.1" value={ph} onChange={(e) => setPh(e.target.value)} />
                    <span>{ph}</span>
                </label>
            </div>
            <div>
                <label>
                    Temperature (°C):
                    <input type="number" className="small-input" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Rainfall (mm):
                    <input type="number" className="small-input" value={rainfall} onChange={(e) => setRainfall(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Soil Minerals (ppm):
                    <input type="number" className="small-input" value={soilMinerals} onChange={(e) => setSoilMinerals(e.target.value)} />
                </label>
            </div>
            <button onClick={handleCalculate} disabled={!isFormValid()}>Calculate</button>
            {loading ? (
                <div className="loader"></div>
            ) : (
                <div className="generated-text">
                    <h2>Recommendation:</h2>
                    <p>{recommendation}</p>
                </div>
            )}
        </div>
    );
};

export default Yaseen;