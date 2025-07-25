// import React, { useState } from 'react';
// import axios from 'axios';
// import './AcceptDonationModal.css';

// function AcceptDonationModal({ donation, show, handleClose, onAcceptSuccess }) {
//     const [receiverEmail, setReceiverEmail] = useState('');
//     const [error, setError] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleAccept = async () => {
//         if (!receiverEmail || !/^\S+@\S+\.\S+$/.test(receiverEmail)) {
//             setError('Please enter a valid email address.');
//             return;
//         }
//         setLoading(true);
//         setError('');
//         setMessage('');

//         try {
//             const res = await axios.post(`/api/donations/${donation._id}/accept`, { receiverEmail });
//             setMessage(res.data.message);
//             setTimeout(() => {
//                 onAcceptSuccess(donation._id);
//                 handleClose();
//             }, 3500);
//         } catch (err) {
//             setError(err.response?.data?.message || 'An error occurred.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!show) {
//         return null;
//     }

//     return (
//         <div className="modal-backdrop">
//             <div className="modal-content-custom">
//                 <div className="modal-header">
//                     <h5 className="modal-title">Accept Donation</h5>
//                     <button type="button" className="btn-close" onClick={handleClose}></button>
//                 </div>
//                 <div className="modal-body">
//                     {error && <div className="alert alert-danger">{error}</div>}
//                     {message && <div className="alert alert-success">{message}</div>}
//                     {!message && (
//                         <>
//                             <p>To receive the donor's private contact details, please enter your email address below.</p>
//                             <div className="mb-3">
//                                 <label htmlFor="receiverEmail" className="form-label">Your Email Address</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="receiverEmail"
//                                     value={receiverEmail}
//                                     onChange={(e) => setReceiverEmail(e.target.value)}
//                                     placeholder="you@example.com"
//                                 />
//                             </div>
//                         </>
//                     )}
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
//                     {!message && (
//                         <button type="button" className="btn btn-dark" onClick={handleAccept} disabled={loading}>
//                             {loading ? 'Sending...' : 'Accept & Receive Details'}
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AcceptDonationModal;
import React, { useState } from 'react';
import axios from 'axios';
import './AcceptDonationModal.css';

function AcceptDonationModal({ donation, show, handleClose, onAcceptSuccess }) {
    const [receiverEmail, setReceiverEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAccept = async () => {
        if (!receiverEmail || !/^\S+@\S+\.\S+$/.test(receiverEmail)) {
            setError('Please enter a valid email address.');
            return;
        }
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const res = await axios.post(`/api/donations/${donation._id}/accept`, { receiverEmail });
            setMessage(res.data.message);
            setTimeout(() => {
                onAcceptSuccess(donation._id);
                handleClose();
            }, 3500);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content-custom">
                <div className="modal-header">
                    <h5 className="modal-title">Accept Donation</h5>
                    <button type="button" className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {message && <div className="alert alert-success">{message}</div>}
                    {!message && (
                        <>
                            <p>To receive the donor's private contact details, please enter your email address below.</p>
                            <div className="mb-3">
                                <label htmlFor="receiverEmail" className="form-label">Your Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="receiverEmail"
                                    value={receiverEmail}
                                    onChange={(e) => setReceiverEmail(e.target.value)}
                                    placeholder="you@example.com"
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary-custom" onClick={handleClose}>Close</button>
                    {!message && (
                        <button type="button" className="btn btn-primary-custom" onClick={handleAccept} disabled={loading}>
                            {loading ? 'Sending...' : 'Accept & Receive Details'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AcceptDonationModal;