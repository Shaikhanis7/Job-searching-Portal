
// import React from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { LayoutDashboard, Users, Power } from 'lucide-react'
// import { Button } from '../ui/button'
// import { FaIoxhost } from 'react-icons/fa'

// const Leftbar = () => {
//     const navigate = useNavigate();

//     const AdminLinks = [
//         {
//             title: 'Admin Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Jobs',
//             link: '/admin/jobs1',
//             icon: FaIoxhost
//         },
//         {
//             title:'Document Management',
//             link:'/admin/documentmanagement',
//             icon: Users
//         },
//         {
//             title:'Support',
//             link:'/admin/support',
//             icon: Power
//         }
//     ]

//     const handleLogout = () => {
//         // Perform any logout logic here (e.g., clearing tokens, etc.)
//         navigate('/');
//     }

//     return (
//         <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
//             <div className='h-[5%] text-primary font-bold text-2xl flex justify-center items-center'>
//                 JobAura
//             </div>
//             <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
//                 {AdminLinks.map((data, index) => (
//                     <NavLink key={index} to={data.link} className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
//                         <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                             {React.createElement(data.icon, { size: 20 })}
//                             {data.title}
//                         </span>
//                     </NavLink>
//                 ))}
//             </div>
//             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
//                 <Button onClick={handleLogout} className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'>
//                     <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
//                         <Power size={20} /> Logout
//                     </span>
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default Leftbar


import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Power, FileText, Briefcase, HelpCircle, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { FaIoxhost } from 'react-icons/fa';

const Leftbar = () => {
    const navigate = useNavigate();

    const AdminLinks = [
        {
            title: 'Admin Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard,
        },
        {
            title: 'Job Application',
            link: '/admin/apply-job',
            icon: FileText,
        },
        {
            title: 'Jobs Postings',
            link: '/admin/jobs-post',
            icon: Briefcase,
        },
        {
            title: 'Users',
            link: '/admin/users',
            icon: Users,
        },
        {
            title: 'Settings',
            link: '/admin/settings',
            icon: Settings,
        },
       
        {
            title: 'Support',
            link: '/admin/support',
            icon: HelpCircle,
        },
    ];

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clearing tokens, etc.)
        navigate('/');
    };

    return (
        <div className='fixed top-0 left-0 h-screen w-1/6 flex flex-col shadow-sm shadow-primary pt-10 bg-black'>
            <div className='text-primary font-bold text-2xl flex justify-center items-center h-[5%]'>
                JobAura
            </div>
            <div className='flex flex-col justify-start items-center gap-2 h-[90%] overflow-y-auto'>
                {AdminLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
                        <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                            {React.createElement(data.icon, { size: 20 })}
                            {data.title}
                        </span>
                    </NavLink>
                ))}
            </div>
            <div className='flex justify-center items-center h-[5%]'>
                <Button
                    onClick={handleLogout}
                    className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default Leftbar;
