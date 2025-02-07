import Navbar from "../components/navigationBar";
import Yaseen from "../components/Yaseen";
import '../components/yaseen.css'; // Import the Yaseen.css file

function Calculator() {
    return (
      <>
        <Navbar />
        <div className="calculator-container">
          <div className="explanation-text">
            <h1>Why Use the Soil Regulation Calculator?</h1>
            <p>
              The Soil Regulation Calculator helps you determine the optimal soil conditions for your crops. By using this tool, you can ensure that your soil has the right pH, temperature, rainfall, and mineral levels. 
              This not only promotes healthy crop growth but also reduces the need for chemical interventions, contributing to a more sustainable and eco-friendly agricultural practice.
            </p>
          </div>
          <Yaseen />
        </div>
      </>
    );
}

export default Calculator;