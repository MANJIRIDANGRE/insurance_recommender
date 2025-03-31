import React, { useState } from "react";
import "./InsuranceForm.css";

const MotorInsurance = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleAge, setVehicleAge] = useState("");
  const [usage, setUsage] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicleType === "car" && vehicleAge < 5) {
      setRecommendation("HDFC Ergo Car Insurance - Best for new cars.");
    } else {
      setRecommendation(
        "Tata AIG Auto Secure - Comprehensive coverage for older vehicles."
      );
    }
  };

  return (
    <div className="insurance-form">
      <h2>Motor Insurance Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <label>Vehicle Type:</label>
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
        </select>

        <label>Vehicle Age (Years):</label>
        <input
          type="number"
          value={vehicleAge}
          onChange={(e) => setVehicleAge(e.target.value)}
          required
        />

        <label>Usage:</label>
        <select
          value={usage}
          onChange={(e) => setUsage(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="personal">Personal</option>
          <option value="commercial">Commercial</option>
        </select>

        <button type="submit">Get Recommendation</button>
      </form>

      {recommendation && <p className="recommendation">{recommendation}</p>}
    </div>
  );
};

export default MotorInsurance;
