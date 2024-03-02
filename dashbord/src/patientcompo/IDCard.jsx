import React from 'react';
import QRCode from 'qrcode.react';

const generateQRCodeData = (data) => {
  // You can customize this function based on the data structure you want for the QR code
  return JSON.stringify(data);
};

const IDCard = ({ data }) => {
  const { image, name, age, contact, email } = data;
  const qrCodeData = generateQRCodeData(data);

  return (
    <div className="id-card">
      <div className="card-header">
        <img src={image} alt={name} className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Age:</strong> {age} <br />
          <strong>Contact:</strong> {contact} <br />
          <strong>Email:</strong> {email} <br />
        </p>
        <div className="qr-code">
          <QRCode value={qrCodeData} />
        </div>
      </div>
    </div>
  );
};

export default IDCard;
