
import React, { useState } from "react";
import axios from "axios";

const QRScanner = () => {
  const [qrCodeData, setQRCodeData] = useState("");
  const [personDetails, setPersonDetails] = useState(null);

  const handleScan = async () => {
    try {
      const response = await axios.get(`/api/person/${qrCodeData}`);
      setPersonDetails(response.data);
    } catch (error) {
      console.error("Error fetching person details:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Scan QR Code"
        value={qrCodeData}
        onChange={(e) => setQRCodeData(e.target.value)}
      />
      <button onClick={handleScan}>Scan</button>

      {personDetails && (
        <div>
          <h2>Person Details</h2>
          <p>Name: {personDetails.name}</p>
          <p>Age: {personDetails.age}</p>
          <p>Contact: {personDetails.contact}</p>
          <p>Email: {personDetails.email}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
