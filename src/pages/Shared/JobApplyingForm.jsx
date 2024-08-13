import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobForm = () => {
  const [form, setForm] = useState({
    jobTitle: '',
    category: '',
    jobType: '',
    applicationDeadline: '',
    salaryCurrency: '',
    jobDescription: '',
    companyName: '',
    companyWebsite: '',
    companyIndustry: '',
    linkedinLink: '',
    companyDescription: '',
    logo: null,
    recruiterCompanyName: '',
    recruiterCompanyBusiness: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      'jobTitle',
      'category',
      'jobType',
      'applicationDeadline',
      'salaryCurrency',
      'jobDescription',
      'companyName',
      'companyWebsite',
      'companyIndustry',
      'linkedinLink',
      'companyDescription',
      'recruiterCompanyName',
      'recruiterCompanyBusiness',
      'termsAccepted'
    ];

    for (let field of requiredFields) {
      if (!form[field]) {
        toast.error(`Please fill out the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
        return;
      }
    }

    if (!form.termsAccepted) {
      toast.error('You must accept the terms and privacy policy.');
      return;
    }

    toast.success('Form submitted successfully!');
    console.log('Form submitted:', form);
  };
  const formStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: '8px',
    animation: 'fadeIn 1s ease-in-out',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
  };

  const keyframesStyle = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

  const sectionStyle = {
    marginBottom: '20px',
  };

  const h3Style = {
    marginBottom: '10px',
    color: '#f5f5f5',
    animation: 'slideIn 0.8s ease-in-out',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #333',
    borderRadius: '4px',
    backgroundColor: '#222',
    color: '#fff',
    transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '80px',
  };

  const rowStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  };

  const fileInputStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };

  const fileSmallStyle = {
    color: '#888',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.6s ease-in-out',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'underline',
    transition: 'color 0.3s ease-in-out',
  };

  const linkHoverStyle = {
    color: '#0056b3',
  };

  const mediaQueryStyle = `
    @media (max-width: 600px) {
      .row {
        flex-direction: column;
      }
    }
  `;
  return (
    <div>
      <style>{keyframesStyle}</style>
      <style>{mediaQueryStyle}</style>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={sectionStyle}>
          <h3 style={h3Style}>Job Information</h3>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={form.jobTitle}
            onChange={handleChange}
            style={inputStyle}
          />
          <div style={rowStyle} className="row">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Category</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Sales">Sales</option>
              {/* Add more categories as needed */}
            </select>

            <select
              name="jobType"
              value={form.jobType}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              {/* Add more job types as needed */}
            </select>
          </div>
          <div style={rowStyle} className="row">
            <input
              type="date"
              name="applicationDeadline"
              value={form.applicationDeadline}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="salaryCurrency"
              placeholder="Salary Currency"
              value={form.salaryCurrency}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <textarea
            name="jobDescription"
            placeholder="Job Description"
            value={form.jobDescription}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>
        </div>

        <div style={sectionStyle}>
          <h3 style={h3Style}>Company Information</h3>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={form.companyName}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="companyWebsite"
            placeholder="Company Website"
            value={form.companyWebsite}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="companyIndustry"
            placeholder="Company Industry"
            value={form.companyIndustry}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="linkedinLink"
            placeholder="LinkedIn Page Link"
            value={form.linkedinLink}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="companyDescription"
            placeholder="Company Description"
            value={form.companyDescription}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>
          <div style={fileInputStyle}>
            <label htmlFor="logo">Add Your Resume</label>
            <input
              type="file"
              name="logo"
              id="logo"
              onChange={handleChange}
              style={inputStyle}
            />
            <small style={fileSmallStyle}>Maximum file size: 2 MB</small>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={h3Style}>Recruiter Information</h3>
          <input
            type="text"
            name="recruiterCompanyName"
            placeholder="Company Name"
            value={form.recruiterCompanyName}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="recruiterCompanyBusiness"
            placeholder="Company Business"
            value={form.recruiterCompanyBusiness}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={sectionStyle}>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
            />
            Accept <a href="/privacy-policy" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>terms and privacy policy</a>
          </label>
          
          <button 
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Post A Job
          </button>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default JobForm;