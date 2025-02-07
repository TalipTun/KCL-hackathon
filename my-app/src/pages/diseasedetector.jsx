import DiseaseCalculator from "../components/disease";
import Navbar from "../components/navigationBar";

function DiseaseDetector() {
    return (
      <>
        <Navbar />
        <div className="disease-detector-container">
          <div className="explanation-text">
            <h1>Why Use the Disease Identifier?</h1>
            <p>
              The Disease Identifier helps identify common plant diseases based on symptoms, providing effective solutions to treat them. 
              By using this tool, you can ensure the health of your crops, reduce the use of harmful chemicals, and promote sustainable farming practices. 
              This not only helps in maintaining a healthy environment but also contributes to a more sustainable and eco-friendly agricultural system.
            </p>
          </div>
          <DiseaseCalculator />
        </div>
      </>
    );
}

export default DiseaseDetector;