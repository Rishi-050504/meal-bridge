
import React from 'react';
import './DonationCard.css';

function DonationCard({ donation, onAcceptClick }) {
    const totalQuantity = donation.items.reduce((total, item) => total + item.quantity, 0);
    const itemNames = donation.items.map(item => item.itemName).join(', ');

    return (
        <div className="donation-card">
            <div className="card-image-container">
                <img src={donation.foodImage} className="card-img-top" alt={itemNames} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{itemNames}</h5>
                <p className="card-text"><strong>Location:</strong> {donation.locality}</p>
                <p className="card-text"><strong>Quantity:</strong> Approx. {totalQuantity} servings</p>
                <p className="card-text donor-name">By {donation.donorName}</p>
                <button onClick={() => onAcceptClick(donation)} className="btn btn-primary-custom w-100 mt-3">
                    Accept Donation
                </button>
            </div>
        </div>
    );
}

export default DonationCard;