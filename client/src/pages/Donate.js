import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [formData, setFormData] = useState({
    locality: '',
    items: [{ name: '', quantity: '' }],
    timeBeforeConsumption: '',
    donorName: '',
    donorPhone: '',
    donorEmail: '',
    donorAddress: '',
    image: null
  });

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
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission logic here
  };

  return (
    <div className="donate-container">
      <form className="donate-form" onSubmit={handleSubmit}>
        <div className="form-group locality-select">
          <label>Select your locality:</label>
          <select name="locality" value={formData.locality} onChange={handleChange} required>
            <option value="">-- Select Locality --</option>
            {/* Add locality options here later */}
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
          <label>Upload picture:</label>
          <input type="file" name="image" onChange={handleChange} />
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
  );
};

export default Donate;
