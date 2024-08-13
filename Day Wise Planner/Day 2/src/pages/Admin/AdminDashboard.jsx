// // import React from 'react'

// // const AdminDashboard = () => {
// //     return (
// //         <div>AdminDashboard</div>
// //     )
// // }

// // export default AdminDashboard

// import React from 'react'
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
// const AdminDashboard = () => {
//     return (
//         <div className="flex flex-row p-4 gap-4">
//             <Card className='w-1/4 border border-primary'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Total Users
//                     </CardTitle>
//                     <Users className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-2xl font-bold">10000</div>
//                 </CardContent>
//             </Card>
//             <Card className='w-1/4 border border-primary'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Active Users
//                     </CardTitle>
//                     <Users className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-xl font-bold">9999</div>
//                 </CardContent>
//             </Card>
//             <Card className='w-1/4 border border'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Total Orders
//                     </CardTitle>
//                     <ShoppingBag className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-2xl font-bold">10,000</div>
//                 </CardContent>
//             </Card>
//             <Card className='w-1/4 border border-primary'>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">
//                         Revenue
//                     </CardTitle>
//                     <DollarSign className="h-6 w-6 text-primary" />
//                 </CardHeader>
//                 <CardContent>
//                     <div className="text-2xl font-bold">10,000,00</div>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }

// export default AdminDashboard


import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DollarSign, ShoppingBag, User, Users, Briefcase, FileText, CheckSquare } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="flex flex-row flex-wrap p-4 gap-4">
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10000</div>
                    <CardDescription>
                        All registered users on the platform.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated daily
                </CardFooter>
            </Card>
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-xl font-bold">9999</div>
                    <CardDescription>
                        Users who logged in within the last 24 hours.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated hourly
                </CardFooter>
            </Card>
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Orders
                    </CardTitle>
                    <ShoppingBag className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000</div>
                    <CardDescription>
                        Total number of orders placed on the platform.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated daily
                </CardFooter>
            </Card>
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Revenue
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$1,000,000</div>
                    <CardDescription>
                        Total revenue generated so far.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated monthly
                </CardFooter>
            </Card>
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Jobs Posted
                    </CardTitle>
                    <Briefcase className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">5000</div>
                    <CardDescription>
                        Total number of jobs posted on the platform.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated daily
                </CardFooter>
            </Card>
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Job Listings
                    </CardTitle>
                    <Briefcase className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-xl font-bold">4500</div>
                    <CardDescription>
                        Jobs currently open for applications.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated hourly
                </CardFooter>
            </Card>
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Applications
                    </CardTitle>
                    <FileText className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">15000</div>
                    <CardDescription>
                        Total number of job applications submitted.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated daily
                </CardFooter>
            </Card>
            <Card className='w-1/4 border'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Hired Candidates
                    </CardTitle>
                    <CheckSquare className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2000</div>
                    <CardDescription>
                        Candidates successfully hired through the platform.
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                    Updated monthly
                </CardFooter>
            </Card>
        </div>
    );
}

export default AdminDashboard;
