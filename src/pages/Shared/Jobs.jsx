

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { MagicCard } from '@/components/magicui/magic-card';

const Jobs = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // const handleNavigate = (path) => {
  //   navigate(path);
  // };
  const handlePostJobsClick1 = () => {
    navigate('/viewjobs'); // Navigate to the form page
  };
  const handlePostJobsClick2 = () => {
    navigate('/jobapply'); // Navigate to the form page
  };
  const handlePostJobsClick3 = () => {
    navigate('/postedjobs'); // Navigate to the form page
  };
  const handlePostJobsClick4 = () => {
    navigate('/card'); // Navigate to the form page
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <div onClick={handlePostJobsClick1} className='inline-block w-[200vh]'>

        <MagicCard
        className=" cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl "
        gradientColor={isDarkTheme ? "#262626" : "#D9D9D955"}
        >
          View Jobs
        </MagicCard >
          </div>
          <div onClick={handlePostJobsClick2} className='inline-block w-[200vh]'>

        <MagicCard 
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={isDarkTheme ? "#262626" : "#D9D9D955"}
          >
          Post Jobs
        </MagicCard>
          </div>
       <div onClick={handlePostJobsClick3} className='inline-block w-[200vh]'>

        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={isDarkTheme ? "#262626" : "#D9D9D955"}
          >
          Posted Jobs
        </MagicCard>
          </div>
          <div onClick={handlePostJobsClick4} className='inline-block w-[200vh]'>

        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={isDarkTheme ? "#262626" : "#D9D9D955"}
          >
          Openings
        </MagicCard>
          </div>
      </div>
    </div>
  );
};

export default Jobs;