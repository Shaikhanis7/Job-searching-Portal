import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';

const NotFound = () => {
  const navigate = useNavigate();

 

  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <NeonGradientCard className="max-w-sm h-64 flex items-center justify-center text-center">
        <span className="pointer-events-none z-20 flex items-center justify-center h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Not Found !!
        </span>
      </NeonGradientCard>
      <button
        onClick={() => navigate('/')}
        className="mt-4 text-lg font-semibold text-blue-500 hover:underline"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
