import React, { useState } from 'react';

// Sample data
const initialSavedJobs = [
  {
    id: 1,
    title: 'UX Designer',
    company: 'Company A',
    location: 'New York',
    datePosted: '2024-08-10',
    jobType: 'Full-time',
    salary: '$80,000',
    experience: '3-5 years',
    description: 'Design user experiences and interfaces.',
    companyWebsite: 'https://companyA.com'
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'Company B',
    location: 'San Francisco',
    datePosted: '2024-08-05',
    jobType: 'Part-time',
    salary: '$70,000',
    experience: '2-4 years',
    description: 'Analyze and interpret complex data to help companies make decisions.',
    companyWebsite: 'https://companyB.com'
  },
  {
    id: 3,
    title: 'Front-end Developer',
    company: 'Company C',
    location: 'Los Angeles',
    datePosted: '2024-07-30',
    jobType: 'Contract',
    salary: '$90,000',
    experience: '2-3 years',
    description: 'Develop and maintain the user interface of web applications.',
    companyWebsite: 'https://companyC.com'
  },
  {
    id: 4,
    title: 'Back-end Developer',
    company: 'Company D',
    location: 'Seattle',
    datePosted: '2024-07-25',
    jobType: 'Full-time',
    salary: '$95,000',
    experience: '4-6 years',
    description: 'Build and maintain the server-side logic and database management.',
    companyWebsite: 'https://companyD.com'
  },
  {
    id: 5,
    title: 'Product Manager',
    company: 'Company E',
    location: 'Chicago',
    datePosted: '2024-08-01',
    jobType: 'Full-time',
    salary: '$110,000',
    experience: '5+ years',
    description: 'Lead the product development lifecycle from ideation to launch.',
    companyWebsite: 'https://companyE.com'
  },
];


function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState(initialSavedJobs);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleRemove = (jobId) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const updatedJobs = savedJobs.map(job =>
      job.id === selectedJob.id ? selectedJob : job
    );
    setSavedJobs(updatedJobs);
    setSelectedJob(null);
  };

  return (
    <div>
      <h2>Saved Jobs</h2>
      <ul>
        {savedJobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <button className="view-details" onClick={() => handleViewDetails(job)}>View Details</button>
            <button className="remove" onClick={() => handleRemove(job.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {selectedJob && (
        <div className="details-modal">
          <h3>Job Details</h3>
          <form onSubmit={handleUpdateJob}>
            <label>
              Job Title:
              <input
                type="text"
                value={selectedJob.title}
                onChange={(e) => setSelectedJob({ ...selectedJob, title: e.target.value })}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                value={selectedJob.company}
                onChange={(e) => setSelectedJob({ ...selectedJob, company: e.target.value })}
              />
            </label>
            <button type="submit">Update Job</button>
            <button type="button" onClick={handleCloseDetails}>Close</button>
          </form>
          <style jsx>{`
            .details-modal {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: white;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
              z-index: 1000;
              animation: fadeIn 0.5s ease-in;
            }
            form {
              display: flex;
              flex-direction: column;
            }
            label {
              margin-bottom: 10px;
            }
            input[type="text"] {
              margin-top: 5px;
              padding: 8px;
              border: 1px solid #ddd;
              border-radius: 4px;
              width: 100%;
              transition: border-color 0.3s ease;
            }
            input[type="text"]:focus {
              border-color: #007bff;
              outline: none;
            }
            button {
              padding: 8px 12px;
              border: none;
              border-radius: 4px;
              margin-top: 10px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            button[type="submit"] {
              background-color: #007bff;
              color: white;
            }
            button[type="submit"]:hover {
              background-color: #0056b3;
            }
            button[type="button"] {
              background-color: #ccc;
              color: black;
            }
            button[type="button"]:hover {
              background-color: #999;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}

      <style jsx>{`
        h2 {
          color: #333;
          margin-bottom: 20px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          border: 1px solid #ddd;
          padding: 10px;
          margin-bottom: 10px;
          position: relative;
          transition: transform 0.3s ease;
        }
        li:hover {
          transform: scale(1.02);
        }
        button {
          padding: 5px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin: 5px 0;
          transition: background-color 0.3s ease;
        }
        .view-details {
          background-color: #28a745;
          color: white;
        }
        .view-details:hover {
          background-color: #218838;
        }
        .remove {
          background-color: #dc3545;
          color: white;
        }
        .remove:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
}

export default SavedJobs;
