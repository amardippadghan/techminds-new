import React, { useState } from 'react';
import TUIInput from '../commons/TUIInput'; // Make sure this path is correct
import TUIButton from './../commons/TUIButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
 
      <form onSubmit={handleSubmit} className="space-y-4">
        <TUIInput
        label="Full Name"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
          className="w-full"
        />
        <TUIInput
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
          className="w-full"
        />
        <TUIInput
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          name="number"
          type="tel"
          className="w-full"
        />
        <div className="relative">
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            className="input input-bordered input-info w-full h-32 resize-none"
          />
          <label className="absolute top-0 left-0 pl-2 pt-2 text-gray-500 transition-transform duration-300 transform -translate-y-2">
            <span className="text-sm">Message</span>
          </label>
        </div>
       <TUIButton text="Send" onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default ContactForm;
