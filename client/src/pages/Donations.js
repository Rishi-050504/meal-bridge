

// import React, { useState, useEffect } from 'react';
// import './Donations.css';
// import localities from '../data/localities';

// const sampleDonations = [
//   {
//     id: 1,
//     imageUrl: 'https://via.placeholder.com/200',
//     donorName: 'Alice Johnson',
//     contactEmail: 'alice@example.com',
//     contactPhone: '+1 111 222 3333',
//     address: '123 Main St, Springfield',
//     locality: 'Springfield',
//     items: [
//       { name: 'Rice', quantity: '5 kg' },
//       { name: 'Canned Beans', quantity: '10 cans' },
//     ],
//     dateTime: '2025-06-25 19:56',
//   },
//   {
//     id: 2,
//     imageUrl: 'https://via.placeholder.com/200',
//     donorName: 'Bob Smith',
//     contactEmail: 'bob@example.com',
//     contactPhone: '+1 444 555 6666',
//     address: '456 Market Ave, Shelbyville',
//     locality: 'Shelbyville',
//     items: [
//       { name: 'Bread', quantity: '2 loaves' },
//       { name: 'Milk', quantity: '1 liter' },
//     ],
//     dateTime: '2025-06-25 10:00',
//   },
// ];

// const Donations = () => {
//   const [donations, setDonations] = useState([]);
//   const [selectedLocality, setSelectedLocality] = useState('All');

//   useEffect(() => {
//     const now = new Date();
//     const validDonations = sampleDonations.filter((donation) => {
//       return new Date(donation.dateTime) > now;
//     });
//     setDonations(validDonations);
//   }, []);

//   const handleAccept = (id) => {
//     setDonations(donations.filter((donation) => donation.id !== id));
//   };

//   const handleLocalityChange = (e) => {
//     setSelectedLocality(e.target.value);
//   };

//   const filteredDonations =
//     selectedLocality === 'All'
//       ? donations
//       : donations.filter((d) => d.locality === selectedLocality);

//   return (
//     <div className="donations-page">
//       <div className="locality-filter">
//         <label htmlFor="locality">Filter by Locality: </label>
//         <select id="locality" onChange={handleLocalityChange}>
//           {localities.map((loc) => (
//             <option key={loc} value={loc}>{loc}</option>
//           ))}
//         </select>
//       </div>

//       <div className="donation-grid">
//         {filteredDonations.map((donation) => (
//           <div className="donation-card" key={donation.id}>
//             <img src={donation.imageUrl} alt="Donation" />
//             <div className="donation-details">
//               <h3>{donation.donorName}</h3>
//               <p><strong>Address:</strong> {donation.address}</p>
//               <p><strong>Email:</strong> {donation.contactEmail}</p>
//               <p><strong>Phone:</strong> {donation.contactPhone}</p>
//               <p><strong>Items:</strong></p>
//               <ul>
//                 {donation.items.map((item, index) => (
//                   <li key={index}>{item.name} - {item.quantity}</li>
//                 ))}
//               </ul>
//               <p><strong>Date & Time:</strong> {donation.dateTime}</p>
//               <button className="accept-btn" onClick={() => handleAccept(donation.id)}>
//                 Accept
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// useEffect(() => {
//   const fetchDonations = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/donations');
//       const data = await res.json();
//       setDonations(data);
//     } catch (err) {
//       console.error('Error fetching donations:', err);
//     }
//   };

//   fetchDonations();
// }, []);

// export default Donations;

import React, { useState, useEffect } from 'react';
import './Donations.css';
import localities from '../data/localities';

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState('All');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/donations');
        const data = await res.json();
        setDonations(data);
      } catch (err) {
        console.error('Error fetching donations:', err);
      }
    };

    fetchDonations();
  }, []);

  const handleAccept = (id) => {
    setDonations((prev) => prev.filter((donation) => donation._id !== id));
  };

  const handleLocalityChange = (e) => {
    setSelectedLocality(e.target.value);
  };

  const filteredDonations =
    selectedLocality === 'All'
      ? donations
      : donations.filter((d) => d.locality === selectedLocality);

  return (
    <div className="donations-page">
      <div className="locality-filter">
        <label htmlFor="locality">Filter by Locality: </label>
        <select id="locality" onChange={handleLocalityChange}>
          <option value="All">All</option>
          {localities.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="donation-grid">
        {filteredDonations.map((donation) => (
          <div className="donation-card" key={donation._id}>
            <img src={donation.images?.[0] || '/placeholder.jpg'} alt="Donation" />
            <div className="donation-details">
              <h3>{donation.donorName}</h3>
              <p><strong>Address:</strong> {donation.donorAddress}</p>
              <p><strong>Email:</strong> {donation.donorEmail}</p>
              <p><strong>Phone:</strong> {donation.donorPhone}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {donation.items.map((item, index) => (
                  <li key={index}>{item.name} - {item.quantity}</li>
                ))}
              </ul>
              <p><strong>Consume Before:</strong> {new Date(donation.timeBeforeConsumption).toLocaleString()}</p>
              <button className="accept-btn" onClick={() => handleAccept(donation._id)}>
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;
