"use client";

import { useState } from 'react';

export default function PersonalLinkPage() {
  // Replace with your personal UPI ID (VPA)
  const upiId = "9980410347-2@ybl"; 
  const name = "Chikkanna N";

  // State to track the dynamic slider amount, default set to 500
  const [amount, setAmount] = useState<number>(500);
  
  // Dynamic link generation helper
  const getUpiLink = (amount: number) => {
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Support My Work</h2>
      <p>Drag the slider to choose your amount, then complete your payment directly via PhonePe or your preferred UPI app.</p>
      
      <div style={{ maxWidth: '350px', margin: '2rem auto' }}>
        {/* Large visual amount display */}
        <h1 style={{ fontSize: '2.5rem', color: '#5f259f', margin: '0 0 1rem 0' }}>
          ₹{amount}
        </h1>

        {/* The range slider element */}
        <input 
          type="range" 
          min="50" 
          max="2000" 
          step="50" // Moves the slider in clean blocks of ₹50
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
          style={{ width: '100%', cursor: 'pointer', accentColor: '#5f259f' }}
        />

        {/* Small min/max visual labels underneath */}
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          <span>₹50</span>
          <span>₹2,000</span>
        </div>
      </div>

      {/* Dynamic Action Button pulling from state */}
      <div>
        <a href={getUpiLink(amount)} style={buttonStyle}>
          Donate ₹{amount} Now
        </a>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: 'inline-block',
  padding: '12px 30px',
  backgroundColor: '#5f259f', // PhonePe Purple Accent Color
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold' as const,
  boxShadow: '0 4px 6px rgba(95, 37, 159, 0.2)',
  transition: 'transform 0.1s ease'
};
