import React, { useState } from "react";
import "./InsuranceForm.css";

const LifeInsurance = () => {
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [dependents, setDependents] = useState("");
  const [employment, setEmployment] = useState("");
  const [health, setHealth] = useState("");
  const [smoker, setSmoker] = useState("");
  const [coverage, setCoverage] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age >= 18 && income >= 500000) {
      setRecommendation(
        "✅ HDFC Life Click 2 Protect - Best for high-income professionals."
      );
    } else {
      setRecommendation(
        "✅ SBI Life eShield - Affordable and reliable option."
      );
    }
  };

  return (
    <div className="insurance-form">
      <h2>Life Insurance Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Annual Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />

        <label>Number of Dependents:</label>
        <input
          type="number"
          value={dependents}
          onChange={(e) => setDependents(e.target.value)}
          required
        />

        <label>Employment Type:</label>
        <select
          value={employment}
          onChange={(e) => setEmployment(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="salaried">Salaried</option>
          <option value="business">Business</option>
        </select>

        <label>Existing Health Conditions:</label>
        <select
          value={health}
          onChange={(e) => setHealth(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="none">None</option>
          <option value="diabetes">Diabetes</option>
          <option value="heart">Heart Disease</option>
        </select>

        <label>Are You a Smoker?</label>
        <select
          value={smoker}
          onChange={(e) => setSmoker(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Desired Coverage Amount:</label>
        <input
          type="number"
          value={coverage}
          onChange={(e) => setCoverage(e.target.value)}
          required
        />

        <button type="submit">Get Recommendation</button>
      </form>

      {recommendation && <p className="recommendation">{recommendation}</p>}
    </div>
  );
};

export default LifeInsurance;
