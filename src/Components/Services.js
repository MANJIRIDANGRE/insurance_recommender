import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Life Insurance",
    description:
      "Ensure financial security for your family in case of uncertainties.",
    img: "✈️",
  },
  {
    title: "Health Insurance",
    description: "Covers medical expenses, hospital stays, and treatments.",
    img: "🏥",
  },
  {
    title: "Home Insurance",
    description:
      "Covers damages due to natural disasters, theft, and accidents.",
    img: "🏡",
  },
  {
    title: "Motor Insurance",
    description:
      "Safeguards your vehicle against accidents, theft, and damages.",
    img: "🚗",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <nav className="w-full flex justify-between p-4 bg-blue-200">
        <Link to="/" className="text-2xl font-bold text-blue-900">
          InsureBank
        </Link>
      </nav>

      <h2 className="text-4xl font-bold text-gray-800 mt-12">
        InsureBank has a full suite of financial services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <span className="text-6xl">{service.img}</span>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
