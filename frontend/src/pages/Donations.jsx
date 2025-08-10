
import React, { useState, useEffect } from 'react';
import DonationCard from '../components/DonationCard';
import AcceptDonationModal from '../components/AcceptDonationModal';
import PageLayout from '../components/PageLayout';
import axios from 'axios';

function Donations() {
    const [donations, setDonations] = useState([]);
    const [locality, setLocality] = useState('');
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedDonation, setSelectedDonation] = useState(null);

    const fetchDonations = async (filter = '') => {
        setLoading(true);
        try {
            const res = await axios.get(`/api/donations?locality=${filter}`);
            setDonations(res.data);
        } catch (error) {
            console.error("Error fetching donations:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchDonations();
    }, []);

    const handleFilter = (e) => {
        e.preventDefault();
        fetchDonations(locality);
    };
    
    const handleAcceptClick = (donation) => {
        setSelectedDonation(donation);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedDonation(null);
    };

    const handleAcceptSuccess = (id) => {
        setDonations(donations.filter(d => d._id !== id));
    };

    return (
        <PageLayout title="Available Donations" subtitle="Find surplus food shared by generous donors in your area.">
            <form onSubmit={handleFilter} className="row g-3 justify-content-center mb-5">
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your city or area to filter..."
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary-custom">Filter Results</button>
                </div>
            </form>

            {loading ? (
                <div className="text-center"><div className="spinner-border text-primary-custom" role="status"><span className="visually-hidden">Loading...</span></div></div>
            ) : (
                <div className="row g-4">
                    {donations.length > 0 ? (
                        donations.map(donation => (
                            <div key={donation._id} className="col-lg-4 col-md-6">
                                <DonationCard donation={donation} onAcceptClick={handleAcceptClick} />
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <h4>No Donations Found</h4>
                            <p className="text-muted">There are currently no donations listed in this area. Please check back later.</p>
                        </div>
                    )}
                </div>
            )}
            
            {selectedDonation && (
                <AcceptDonationModal 
                    show={showModal}
                    handleClose={handleModalClose}
                    donation={selectedDonation}
                    onAcceptSuccess={handleAcceptSuccess}
                />
            )}
        </PageLayout>
    );
}

export default Donations;