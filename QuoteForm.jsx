
import React, { useState } from "react";

const services = [
  { name: "Solar Panel (Any size)", price: 30 },
  { name: "Balustrade Panel (Any size)", price: 15 },
  { name: "Square Plain Window", price: 35 },
  { name: "Square Cottage Window", price: 35 },
  { name: "2 x Stack Window", price: 35 },
  { name: "2 x Stack Uneven Window", price: 35 },
  { name: "3 x Stack Window", price: 40 },
  { name: "3 x Stack Uneven Window", price: 40 },
  { name: "4 x Stack Window", price: 45 },
  { name: "Foldable Stack Glass Door", price: 45 },
  { name: "Double Tilt Plain Window", price: 35 },
  { name: "Double Tilt Cottage Window", price: 45 },
  { name: "2 x Sliding Door Panels", price: 45 },
  { name: "Skylight Window", price: 60 },
  { name: "Arch Window", price: 55 },
  { name: "Triangle Window", price: 55 },
  { name: "Slanted Window", price: 35 },
  { name: "Circle Window", price: 35 },
  { name: "Plain Bay Window", price: 75 },
  { name: "Cottage Bay Window", price: 95 },
];

export default function QuoteForm() {
  const [quantities, setQuantities] = useState(Array(services.length).fill(0));
  const [customerInfo, setCustomerInfo] = useState({ name: "", email: "", phone: "" });

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value) || 0;
    setQuantities(newQuantities);
  };

  const handleInputChange = (field, value) => {
    setCustomerInfo({ ...customerInfo, [field]: value });
  };

  const total = quantities.reduce(
    (sum, qty, i) => sum + qty * services[i].price,
    0
  );

  const minimumFee = 950;
  const displayTotal = total < minimumFee ? minimumFee : total;

  const handleSubmit = () => {
    const selectedServices = services.map((s, i) => ({
      name: s.name,
      quantity: quantities[i],
      total: quantities[i] * s.price,
    })).filter(s => s.quantity > 0);

    const formData = {
      ...customerInfo,
      services: selectedServices,
      total: displayTotal,
    };

    console.log("Form Submitted:", formData);
    alert("Quote submitted successfully!");
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Get a Quote</h1>

      <input placeholder="Your Name" value={customerInfo.name} onChange={(e) => handleInputChange("name", e.target.value)} style={{ marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }} />
      <input placeholder="Email Address" value={customerInfo.email} onChange={(e) => handleInputChange("email", e.target.value)} style={{ marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }} />
      <input placeholder="Phone Number" value={customerInfo.phone} onChange={(e) => handleInputChange("phone", e.target.value)} style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }} />

      {services.map((service, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <div>
            <strong>{service.name}</strong><br />
            <span>R{service.price}</span>
          </div>
          <input type="number" min="0" value={quantities[index]} onChange={(e) => handleQuantityChange(index, e.target.value)} style={{ width: "60px", textAlign: "center" }} />
        </div>
      ))}

      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <p><strong>Total: R{displayTotal}</strong></p>
        {total < minimumFee && <p style={{ color: "red" }}>Minimum call-out fee of R{minimumFee} applies</p>}
      </div>

      <button onClick={handleSubmit} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", backgroundColor: "#1e40af", color: "white", border: "none", borderRadius: "5px" }}>
        Submit Quote Request
      </button>
    </div>
  );
}
