import React, { useState } from 'react';
import TUIInput from '../commons/TUIButton'; 
import TUIButton from '../commons/TUIButton'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto">
      <TUIInput
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs"
      />
      <TUIInput
        name="number"
        type="tel"
        placeholder="Your Phone Number"
        value={formData.number}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs"
      />
      <TUIInput
        name="address"
        placeholder="Your Address"
        value={formData.address}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs"
      />
      <TUIInput
        name="message"
        type="textarea"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs h-32"
      />
      <TUIButton
        text="Send"
        type="submit"
        className="btn btn-info w-full"
      />
    </form>
  );
};

export default ContactForm;
