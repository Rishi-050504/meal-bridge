import React, { useState } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout';

function Help() {
    const [formData, setFormData] = useState({ name: '', email: '', query: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);
        try {
            const res = await axios.post('/api/help/send-query', formData);
            setMessage(res.data.message);
            setFormData({ name: '', email: '', query: '' });
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send query.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageLayout title="Help Center" subtitle="Answers to common questions and a way to contact us.">
            <div className="row">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="accordion" id="faqAccordion">
                        <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">How do I donate food?</button></h2><div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion"><div className="accordion-body">Go to the "Donate Now" page, fill in your private contact details, the food items, and upload a picture. Your private details are only shared with a receiver after they accept the donation.</div></div></div>
                        <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">What kind of food can I donate?</button></h2><div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body">You can donate any edible food, including surplus cooked meals, fresh produce, and packaged items that are well within their expiry date. Please ensure the food is hygienic and safe.</div></div></div>
                        <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">How does a receiver contact a donor?</button></h2><div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body">When a receiver clicks "Accept Donation," they are prompted to enter their email. We then securely send the donor's private contact details (name, mobile, address) to the receiver's email for offline coordination.</div></div></div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="p-4 rounded-3 border" style={{backgroundColor: "var(--color-primary-light)"}}>
                        <h4 className="mb-3">Still have a question?</h4>
                        <p className="text-muted mb-3">Send us a message and we'll get back to you.</p>
                        <form onSubmit={handleSubmit}>
                            {message && <div className="alert alert-success">{message}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="mb-3"><label htmlFor="queryName" className="form-label">Your Name</label><input type="text" className="form-control" id="queryName" name="name" value={formData.name} onChange={handleChange} required /></div>
                            <div className="mb-3"><label htmlFor="queryEmail" className="form-label">Email address</label><input type="email" className="form-control" id="queryEmail" name="email" value={formData.email} onChange={handleChange} required /></div>
                            <div className="mb-3"><label htmlFor="queryText" className="form-label">Your Message</label><textarea className="form-control" id="queryText" name="query" rows="4" value={formData.query} onChange={handleChange} required></textarea></div>
                            <button type="submit" className="btn btn-primary-custom w-100" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default Help;
