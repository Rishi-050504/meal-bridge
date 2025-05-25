import React, { useState } from 'react';
import './Donate.css';
import { useNavigate } from 'react-router-dom';

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
      setFormData({ ...formData, images: [...formData.images, ...fileArray] });

      const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...previewUrls]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/donations');
  };

  return (
    <div className="donate-background">
      <div className="donate-overlay" />
      <div className="donate-container">
        <form className="donate-form" onSubmit={handleSubmit}>
          <div className="form-group locality-select">
            <label>Select your locality:</label>
            <select name="locality" value={formData.locality} onChange={handleChange} required>
              <option value="">-- Select Locality --</option>
              <option value="Downtown">Downtown</option>
              <option value="Uptown">Uptown</option>
              <option value="Suburbs">Suburbs</option>
            </select>
          </div>

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

          <div className="form-group">
            <label>Time before they can be consumed:</label>
            <input
              type="datetime-local"
              name="timeBeforeConsumption"
              value={formData.timeBeforeConsumption}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload picture(s):</label>
            <input type="file" name="images" onChange={handleChange} multiple />
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

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
