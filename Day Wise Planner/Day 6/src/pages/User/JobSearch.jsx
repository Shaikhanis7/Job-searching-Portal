import React, { useState } from 'react';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSearch = () => {
    // Handle job search
  };

  return (
    <div style={styles.container}>
      <h2>Job Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
        placeholder="Search for jobs"
      />
      <select value={jobType} onChange={(e) => setJobType(e.target.value)} style={styles.select}>
        <option value="">Job Type</option>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
      </select>
      <select value={location} onChange={(e) => setLocation(e.target.value)} style={styles.select}>
        <option value="">Location</option>
        <option value="new-york">New York</option>
        <option value="san-francisco">San Francisco</option>
      </select>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        style={styles.input}
        placeholder="Salary"
      />
      <button style={styles.button} onClick={handleSearch}>Search</button>
    </div>
  );
};

const styles = {
  container: { padding: '20px', backgroundColor: '#f9f9f9' },
  searchBar: { width: '100%', padding: '10px', marginBottom: '10px' },
  select: { width: '100%', padding: '10px', marginBottom: '10px' },
  input: { display: 'block', width: '100%', padding: '10px', marginBottom: '10px' },
  button: { padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
};

export default JobSearch;
