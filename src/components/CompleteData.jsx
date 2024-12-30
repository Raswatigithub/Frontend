import React, { useState } from 'react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const initialFormData = {
  firstName: '',
  lastName: '',
  gender: '',
  aadharCard_Number: '',
  address: '',
  DOB: '',
  accountDetails: '',
  terms: false,
};

const CompleteData = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, // handle checkbox and other input types
    });
  };

  const handleSubmitButton = () => {
    if (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.gender.trim() !== '' &&
      formData.accountDetails.trim() !== '' &&
      formData.terms
    ) {
      alert('Data is submitted');
      setFormData(initialFormData); // Reset the form
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10max-w-xl mx-auto p-4 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-semibold mb-4">Complete USer Information</h1>
      <div className="space-y-4">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Gender Select */}
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Gender</option>
            {options.map((option) => (
              <option key={option.key} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>

        {/* Account Details Radio Buttons */}
        <div>
          <label className="block text-sm font-medium">Account Details</label>
          <div className="flex space-x-4">
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="radio"
                name="accountDetails"
                value="AadharCard"
                checked={formData.accountDetails === 'AadharCard'}
                onChange={handleChange}
                className="radio"
              />
              <span>Aadhar Card</span>
            </label>
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="radio"
                name="accountDetails"
                value="PanCard"
                checked={formData.accountDetails === 'PanCard'}
                onChange={handleChange}
                className="radio"
              />
              <span>Pan Card</span>
            </label>
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="radio"
                name="accountDetails"
                value="DebitCard"
                checked={formData.accountDetails === 'DebitCard'}
                onChange={handleChange}
                className="radio"
              />
              <span>Debit Card</span>
            </label>
          </div>
        </div>

        {/* Address Textarea */}
        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter your address"
          ></textarea>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div>
          <label className="cursor-pointer flex items-center space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="checkbox"
            />
            <span>I agree to the Terms and Conditions</span>
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmitButton}
            disabled={!formData.terms}
            className={`btn w-full ${!formData.terms ? 'btn-disabled' : 'btn-primary'}`}
          >
            Submit
          </button>
        </div>
      </div>

      <p className="mt-4">
        Have questions or feedback? We'd love to hear from you! Contact us at{' '}
        <a href="mailto:info@example.com" className="text-blue-500">
          aycinfo@aycanalytics.com
        </a>{' '}
        or{' '}
        <a href="tel:+1234567890" className="text-blue-500">
          1234567896
        </a>
        .
      </p>
    </div>
  );
};

export default CompleteData;
