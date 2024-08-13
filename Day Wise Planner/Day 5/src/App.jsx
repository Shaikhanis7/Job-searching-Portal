
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import Jobs from './pages/Shared/Jobs'
import Services from './pages/Shared/Services';
// import TechJobs from './pages/Shared/TechJobs';
import JobApplyingForm from './pages/Shared/JobApplyingForm';
import ViewJobs from './pages/Shared/ViewJobs';
import AdminUsers from './pages/Admin/AdminUsers'
import Jobs1 from './pages/Admin/Jobs1'
import ContactUs from './pages/Shared/ContactUs'
// import DashBoard from './layout/DashBoard';
import PrivacyPolicy from './pages/Shared/PrivacyPolicy';
import DocumentManagement from './pages/Admin/DocumentManagement'
import ProfileOverview from './pages/User/ProfileOverview'
import JobSearch from './pages/User/JobSearch'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/jobs' element={<Jobs/>} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/services' element={<Services/>} />
                        <Route path='/jobapply' element={<JobApplyingForm/>} />
                        <Route path='/viewjobs' element={<ViewJobs/>} />
                        <Route path='/contactus' element={<ContactUs/>}/>
                        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                        
                    </Route>

                   
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/Users' element={<AdminUsers />} />
                        <Route path='/admin/jobs1' element={<Jobs1 />} />
                        <Route path='/admin/documentmanagement' element={<DocumentManagement />}/>
                    </Route>
                    <Route element={<UserLayout />}>
                    <Route path='/user/profile' element={<ProfileOverview />} />
                    <Route path='/user/job-search' element={<JobSearch />} />

                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App

