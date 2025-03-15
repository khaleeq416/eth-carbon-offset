// 3️⃣ CarbonCalculator.js (Estimate Carbon Footprint)
export default function CarbonCalculator() {
  const calculateFootprint = (txCount) => txCount * 0.02; // Simple estimation
  
  return (
    <div>
      <h2>Carbon Footprint Estimator</h2>
      <p>Each Ethereum transaction emits ~0.02 kg CO₂.</p>
      <input type="number" placeholder="Enter transaction count" id="txCount" />
      <button onClick={() => {
        const txCount = document.getElementById('txCount').value;
        alert(`Estimated Carbon Emission: ${calculateFootprint(txCount)} kg CO₂`);
      }}>Calculate</button>
    </div>
  );
}
