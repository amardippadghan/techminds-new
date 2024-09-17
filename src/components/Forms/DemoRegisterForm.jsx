import React, { useState } from 'react';
import TUIInput from '../commons/TUIInput';
import TUIDropdown from '../commons/TUIDropdown';
import TUIButton from '../commons/TUIButton';

const DemoRegisterForm = () => { // Fixed component name here
  const [formData, setFormData] = useState({
    fullName: '',
    number: '',
    email: '',
    address: '',
    branch: '',
    collegeName: '',
    course: ''
  });

  const courses = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'mernstack', label: 'MERN Stack' },
    { value: 'salesforce', label: 'Salesforce' },
    { value: 'crm', label: 'CRM Training' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDropdownChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      course: e.target.value
    }));
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
    <div className='container mx-auto p-6 md:p-10'>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
        Demo Register
      </h1>
      <form className="space-y-4 p-4 max-w-lg mx-auto">
        <div>
          <TUIInput
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
          />
        </div>
        <div>
          <TUIInput
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
            name="number"
            type="tel"
          />
        </div>
        <div>
          <TUIInput
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
          />
        </div>
        <div>
          <TUIInput
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            name="address"
          />
        </div>
        <div>
          <TUIInput
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
            name="branch"
          />
        </div>
        <div>
          <TUIInput
            placeholder="College Name"
            value={formData.collegeName}
            onChange={handleChange}
            name="collegeName"
          />
        </div>
        <div>
          <TUIDropdown
            options={courses}
            value={formData.course}
            onChange={handleDropdownChange}
            className="w-full max-w-xs"
          />
        </div>
        <div className="text-center">
          <TUIButton text='Register' />
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default DemoRegisterForm;
