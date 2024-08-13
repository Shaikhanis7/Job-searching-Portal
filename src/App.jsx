
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//shared
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import NotFound from './pages/Shared/NotFound'
import Jobs from './pages/Shared/Jobs'
import Services from './pages/Shared/Services';
import JobApplyingForm from './pages/Shared/JobApplyingForm';
import ViewJobs from './pages/Shared/ViewJobs';
import ContactUs from './pages/Shared/ContactUs'
import PrivacyPolicy from './pages/Shared/PrivacyPolicy';
//layout
import AdminLayout from './layout/AdminLayout'
import HomeLayout from './layout/HomeLayout'
import UserLayout from './layout/UserLayout'
//admin
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddCompany from './pages/Admin/AddCompany';
import UserManagement from './pages/Admin/UserManagement'
import Support from './pages/Admin/Support'
import JobApplication from './pages/Admin/JobApplication'
import Settings from './pages/Admin/Settings';
//user
import JobApplications from './pages/User/JobApplications'
import JobBoard from './components/User/JobBoard'// import JobListing from './components/User/JobListing'
// import UserApplications from './components/User/UserApplications'
import ProfileOverview from './pages/User/ProfileOverview'
import UserDashboard from './pages/User/UserDashboard'
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
                        <Route path='/admin/apply-job' element={<JobApplication />} />
                        <Route path='/admin/jobs-post' element={<AddCompany/>} />
                        <Route path='/admin/users' element={<UserManagement/>}/>
                        <Route path='/admin/support' element={<Support/>} />
                        <Route path='/admin/settings' element={<Settings/>}/>

                    </Route>
                    <Route element={<UserLayout />}>
                    <Route path='/user/job-applications' element={< JobApplications/>} />
                    <Route path='/user/job-listings' element={<JobBoard/>} />
                    <Route path='/user/profile' element={<ProfileOverview/>} />
                    <Route path='/user/dashboard' element={<UserDashboard/>} />
                    <Route path='/user/settings' element={<Settings />} />

                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App

