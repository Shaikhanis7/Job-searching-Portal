
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Power } from 'lucide-react'
import { Button } from '../ui/button'
import { FaIoxhost } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg";

const Leftbar = () => {
    const navigate = useNavigate();

    const UserLinks = [
        {
            title: 'Profile',
            link: '/user/profile',
            icon:CgProfile

        },
        {
            title: 'Job Search',
            link: '/user/job-search',
            icon: Users
        },
    //     {
    //         title: 'Jobs',
    //         link: '/admin/jobs1',
    //         icon: FaIoxhost
    //     },
    //     {
    //         title:'Document Management',
    //         link:'/admin/documentmanagement',
    //         icon: Users
    //     },
    //     {
    //         title:'Support',
    //         link:'/admin/support',
    //         icon: Power
    //     }
    ]

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clearing tokens, etc.)
        navigate('/');
    }

    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
            <div className='h-[5%] text-primary font-bold text-2xl flex justify-center items-center'>
                JobAura
            </div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
                {UserLinks.map((data, index) => (
                    <NavLink key={index} to={data.link} className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
                        <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                            {React.createElement(data.icon, { size: 20 })}
                            {data.title}
                        </span>
                    </NavLink>
                ))}
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button onClick={handleLogout} className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default Leftbar
