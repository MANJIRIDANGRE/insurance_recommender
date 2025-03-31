import React, { useState } from "react";
import "./InsuranceForm.css";

const HomeInsurance = () => {
  const [ownership, setOwnership] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ownership === "owner" && propertyType === "apartment") {
      setRecommendation(
        "HDFC Ergo Home Insurance - Best for apartment owners."
      );
    } else {
      setRecommendation(
        "ICICI Lombard Home Insurance - Best for independent house owners."
      );
    }
  };

  return (
    <div className="insurance-form">
      <h2>Home Insurance Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <label>Are you an owner or tenant?</label>
        <select
          value={ownership}
          onChange={(e) => setOwnership(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="owner">Owner</option>
          <option value="tenant">Tenant</option>
        </select>

        <label>Property Type:</label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="apartment">Apartment</option>
          <option value="house">Independent House</option>
        </select>

        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit">Get Recommendation</button>
      </form>

      {recommendation && <p className="recommendation">{recommendation}</p>}
    </div>
  );
};

export default HomeInsurance;
