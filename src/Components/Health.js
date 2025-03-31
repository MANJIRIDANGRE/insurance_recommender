import React, { useState } from "react";
import "./InsuranceForm.css";

const HealthInsurance = () => {
  const [age, setAge] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [coverage, setCoverage] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age < 40 && medicalHistory === "no") {
      setRecommendation(
        "✅ ICICI Lombard Health Insurance - Best for young adults."
      );
    } else {
      setRecommendation(
        "✅ Max Bupa Health Companion - Best for those with a medical history."
      );
    }
  };

  return (
    <div className="insurance-form">
      <h2>Health Insurance Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Any Pre-existing Medical Condition?</label>
        <select
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Family History of Critical Illness?</label>
        <select
          value={familyHistory}
          onChange={(e) => setFamilyHistory(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Do you smoke or drink alcohol?</label>
        <select
          value={lifestyle}
          onChange={(e) => setLifestyle(e.target.value)}
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

export default HealthInsurance;
