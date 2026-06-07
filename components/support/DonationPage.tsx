export default function PersonalLinkPage() {
  // Replace with your personal UPI ID (VPA)
  const upiId = "9980410347-2@ybl"; 
  const name = "Chikkanna N";
  
  // Dynamic link generation helper
  const getUpiLink = (amount: any) => {
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Support My Work</h2>
      <p>Click an amount below to complete your payment directly via PhonePe or your preferred UPI app.</p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
        <a href={getUpiLink(50)} style={buttonStyle}>Donate ₹50</a>
        <a href={getUpiLink(100)} style={buttonStyle}>Donate ₹100</a>
        <a href={getUpiLink(500)} style={buttonStyle}>Donate ₹500</a>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#5f259f', // PhonePe Purple Accent Color
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};
