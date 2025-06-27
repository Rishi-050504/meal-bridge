
// import React, { useState } from 'react';
// import './Donate.css';
// import { useNavigate } from 'react-router-dom';
// import localities from '../data/localities'; // Importing locality list

// const Donate = () => {
//   const [formData, setFormData] = useState({
//     locality: '',
//     items: [{ name: '', quantity: '' }],
//     timeBeforeConsumption: '',
//     donorName: '',
//     donorPhone: '',
//     donorEmail: '',
//     donorAddress: '',
//     images: [],
//   });

//   const [imagePreviews, setImagePreviews] = useState([]);
//   const navigate = useNavigate();

//   const handleItemChange = (index, event) => {
//     const newItems = [...formData.items];
//     newItems[index][event.target.name] = event.target.value;
//     setFormData({ ...formData, items: newItems });
//   };

//   const addItemField = () => {
//     setFormData({
//       ...formData,
//       items: [...formData.items, { name: '', quantity: '' }],
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'images') {
//       const fileArray = Array.from(files);
//       setFormData({ ...formData, images: [...formData.images, ...fileArray] });

//       const previewUrls = fileArray.map((file) =>
//         URL.createObjectURL(file)
//       );
//       setImagePreviews((prev) => [...prev, ...previewUrls]);
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const removeImage = (indexToRemove) => {
//     const updatedImages = formData.images.filter(
//       (_, i) => i !== indexToRemove
//     );
//     const updatedPreviews = imagePreviews.filter(
//       (_, i) => i !== indexToRemove
//     );
//     setFormData({ ...formData, images: updatedImages });
//     setImagePreviews(updatedPreviews);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send to backend
//     try {
//       const form = new FormData();
//       form.append('locality', formData.locality);
//       form.append('timeBeforeConsumption', formData.timeBeforeConsumption);
//       form.append('donorName', formData.donorName);
//       form.append('donorPhone', formData.donorPhone);
//       form.append('donorEmail', formData.donorEmail);
//       form.append('donorAddress', formData.donorAddress);
//       form.append('items', JSON.stringify(formData.items));

//       formData.images.forEach((img) => {
//         form.append('images', img);
//       });

//       const res = await fetch('http://localhost:5000/api/donations', {
//         method: 'POST',
//         body: form,
//       });

//       const result = await res.json();

//       if (res.ok) {
//         alert('Donation submitted successfully!');
//         navigate('/donations');
//       } else {
//         alert(result.message || 'Failed to submit donation.');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('An error occurred.');
//     }
//   };

//   return (
//     <div className="donate-background">
//       <div className="donate-overlay" />
//       <div className="donate-container">
//         <form className="donate-form" onSubmit={handleSubmit}>
//           {/* Locality Dropdown */}
//           <div className="form-group locality-select">
//             <label>Select your locality:</label>
//             <select
//               name="locality"
//               value={formData.locality}
//               onChange={handleChange}
//               required
//             >
//               <option value="">-- Select Locality --</option>
//               {localities.map((area, index) => (
//                 <option key={index} value={area}>
//                   {area}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Items Section */}
//           <div className="form-group items-grid">
//             <label>Item(s):</label>
//             {formData.items.map((item, index) => (
//               <div key={index} className="item-row">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Item Name"
//                   value={item.name}
//                   onChange={(e) => handleItemChange(index, e)}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="quantity"
//                   placeholder="Quantity"
//                   value={item.quantity}
//                   onChange={(e) => handleItemChange(index, e)}
//                   required
//                 />
//               </div>
//             ))}
//             <button type="button" onClick={addItemField} className="add-item-btn">
//               + Add another item
//             </button>
//           </div>

//           {/* Time Before Consumption */}
//           <div className="form-group">
//             <label>Time before they can be consumed:</label>
//             <input
//               type="datetime-local"
//               name="timeBeforeConsumption"
//               value={formData.timeBeforeConsumption}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Image Upload */}
//           <div className="form-group">
//             <label>Upload picture(s):</label>
//             <input
//               type="file"
//               name="images"
//               onChange={handleChange}
//               multiple
//               accept="image/*"
//             />
//             <div className="image-preview-grid">
//               {imagePreviews.map((src, index) => (
//                 <div key={index} className="image-preview-section">
//                   <img
//                     src={src}
//                     alt={`Preview ${index}`}
//                     className="image-preview"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeImage(index)}
//                     className="remove-image-btn"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Donor Name */}
//           <div className="form-group">
//             <label>Name of the donor:</label>
//             <input
//               type="text"
//               name="donorName"
//               value={formData.donorName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Donor Contact */}
//           <div className="form-group">
//             <label>Contact details of the donor:</label>
//             <input
//               type="text"
//               name="donorPhone"
//               placeholder="Phone Number"
//               value={formData.donorPhone}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="donorEmail"
//               placeholder="Email Address"
//               value={formData.donorEmail}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Donor Address */}
//           <div className="form-group">
//             <label>Address:</label>
//             <textarea
//               name="donorAddress"
//               value={formData.donorAddress}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Submit */}
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donate;

import React, { useState } from 'react';
import './Donate.css';
import { useNavigate } from 'react-router-dom';
import localities from '../data/localities';

const Donate = () => {
  const [formData, setFormData] = useState({
    locality: '',
    items: [{ name: '', quantity: '' }],
    timeBeforeConsumption: '',
    donorName: '',
    donorPhone: '',
    donorEmail: '',
    donorAddress: '',
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  const handleItemChange = (index, event) => {
    const newItems = [...formData.items];
    newItems[index][event.target.name] = event.target.value;
    setFormData({ ...formData, items: newItems });
  };

  const addItemField = () => {
    setFormData({ ...formData, items: [...formData.items, { name: '', quantity: '' }] });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      const fileArray = Array.from(files);
      setFormData((prev) => ({ ...prev, images: [...prev.images, ...fileArray] }));

      const previews = fileArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...previews]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const removeImage = (indexToRemove) => {
    const updatedImages = formData.images.filter((_, i) => i !== indexToRemove);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== indexToRemove);
    setFormData({ ...formData, images: updatedImages });
    setImagePreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submission = new FormData();

      submission.append('locality', formData.locality);
      submission.append('timeBeforeConsumption', formData.timeBeforeConsumption);
      submission.append('donorName', formData.donorName);
      submission.append('donorPhone', formData.donorPhone);
      submission.append('donorEmail', formData.donorEmail);
      submission.append('donorAddress', formData.donorAddress);
      submission.append('items', JSON.stringify(formData.items)); // send as JSON string

      formData.images.forEach((img) => submission.append('images', img));

      const res = await fetch('http://localhost:5000/api/donations', {
        method: 'POST',
        body: submission,
      });

      if (res.ok) {
        navigate('/donations');
      } else {
        alert('Failed to submit donation');
      }
    } catch (err) {
      console.error('Error submitting donation:', err);
    }
  };

  return (
    <div className="donate-background">
      <div className="donate-overlay" />
      <div className="donate-container">
        <form className="donate-form" onSubmit={handleSubmit}>
          {/* Locality Dropdown */}
          <div className="form-group locality-select">
            <label>Select your locality:</label>
            <select
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Locality --</option>
              {localities.map((area, index) => (
                <option key={index} value={area}>{area}</option>
              ))}
            </select>
          </div>

          {/* Items */}
          <div className="form-group items-grid">
            <label>Item(s):</label>
            {formData.items.map((item, index) => (
              <div key={index} className="item-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={addItemField} className="add-item-btn">
              + Add another item
            </button>
          </div>

          {/* Time Before Consumption */}
          <div className="form-group">
            <label>Time before consumption:</label>
            <input
              type="datetime-local"
              name="timeBeforeConsumption"
              value={formData.timeBeforeConsumption}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label>Upload picture(s):</label>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              multiple
            />
            <div className="image-preview-grid">
              {imagePreviews.map((src, index) => (
                <div key={index} className="image-preview-section">
                  <img src={src} alt={`Preview ${index}`} className="image-preview" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="remove-image-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Donor Details */}
          <div className="form-group">
            <label>Name of the donor:</label>
            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact details of the donor:</label>
            <input
              type="text"
              name="donorPhone"
              placeholder="Phone Number"
              value={formData.donorPhone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="donorEmail"
              placeholder="Email Address"
              value={formData.donorEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="donorAddress"
              value={formData.donorAddress}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
