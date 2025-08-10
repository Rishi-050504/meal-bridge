
import React, { useState } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout';

function Contribute() {
    const [donorDetails, setDonorDetails] = useState({
        donorName: '',
        donorMobile: '',
        donorEmail: '',
        donorAddress: '',
        locality: '',
    });
    const [items, setItems] = useState([{ itemName: '', quantity: 1 }]);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDonorChange = (e) => setDonorDetails({ ...donorDetails, [e.target.name]: e.target.value });
    const handleItemChange = (index, e) => {
        const newItems = [...items];
        newItems[index][e.target.name] = e.target.value;
        setItems(newItems);
    };
    const handleQuantityChange = (index, amount) => {
        const newItems = [...items];
        const newQuantity = newItems[index].quantity + amount;
        if (newQuantity >= 1) newItems[index].quantity = newQuantity;
        setItems(newItems);
    };
    const addItem = () => setItems([...items, { itemName: '', quantity: 1 }]);
    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        if (!file) {
            setError('Please upload a picture of the food.');
            return;
        }
        setLoading(true);

        const data = new FormData();
        data.append('foodImage', file);
        data.append('items', JSON.stringify(items));
        for (const key in donorDetails) data.append(key, donorDetails[key]);

        try {
            await axios.post('/api/donations', data, { headers: { 'Content-Type': 'multipart/form-data' } });
            setMessage('Thank you! Your generous donation has been listed.');
            setDonorDetails({ donorName: '', donorMobile: '', donorEmail: '', donorAddress: '', locality: '' });
            setItems([{ itemName: '', quantity: 1 }]);
            setFile(null);
            e.target.reset();
        } catch (err) {
            setError(err.response?.data?.message || 'Server error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageLayout title="Make a Donation" subtitle="Your generosity can make a world of difference.">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit}>
                        {message && <div className="alert alert-success">{message}</div>}
                        {error && <div className="alert alert-danger">{error}</div>}
                        
                        <div className="p-4 rounded-3 border mb-4">
                            <h5 className="mb-3">1. Your Details (Private)</h5>
                            <div className="mb-3">
                                <label htmlFor="donorName" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="donorName" name="donorName" value={donorDetails.donorName} onChange={handleDonorChange} required />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3"><label htmlFor="donorMobile" className="form-label">Mobile Number</label><input type="tel" className="form-control" id="donorMobile" name="donorMobile" value={donorDetails.donorMobile} onChange={handleDonorChange} required /></div>
                                <div className="col-md-6 mb-3"><label htmlFor="donorEmail" className="form-label">Email Address</label><input type="email" className="form-control" id="donorEmail" name="donorEmail" value={donorDetails.donorEmail} onChange={handleDonorChange} required /></div>
                            </div>
                            <div className="mb-3"><label htmlFor="donorAddress" className="form-label">Full Address for Pickup</label><input type="text" className="form-control" id="donorAddress" name="donorAddress" value={donorDetails.donorAddress} onChange={handleDonorChange} required /></div>
                            <div className="mb-3"><label htmlFor="locality" className="form-label">Your Locality/Area (This will be public)</label><input type="text" className="form-control" id="locality" name="locality" value={donorDetails.locality} onChange={handleDonorChange} required /></div>
                        </div>

                        <div className="p-4 rounded-3 border mb-4">
                            <h5 className="mb-3">2. Food Items</h5>
                            {items.map((item, index) => (
                                <div key={index} className="row align-items-center mb-2 g-2">
                                    <div className="col-sm-6"><input type="text" name="itemName" className="form-control" placeholder="Item Name (e.g., Rice)" value={item.itemName} onChange={(e) => handleItemChange(index, e)} required /></div>
                                    <div className="col-sm-4"><div className="input-group"><button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(index, -1)}>-</button><input type="number" name="quantity" className="form-control text-center" value={item.quantity} readOnly /><button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(index, 1)}>+</button></div></div>
                                    <div className="col-sm-2 text-end">{items.length > 1 && <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeItem(index)}>Remove</button>}</div>
                                </div>
                            ))}
                            <button type="button" className="btn btn-secondary-custom mt-2" onClick={addItem}>+ Add Item</button>
                        </div>

                        <div className="p-4 rounded-3 border mb-4">
                            <h5 className="mb-3">3. Upload a Picture</h5>
                            <input type="file" className="form-control" id="foodImage" name="foodImage" onChange={handleFileChange} required />
                        </div>

                        <button type="submit" className="btn btn-primary-custom w-100 btn-lg" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit Donation'}
                        </button>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
}

export default Contribute;