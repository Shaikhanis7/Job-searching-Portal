// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

// const Register = () => {
//   return (
//     <div className='h-full w-full flex justify-center items-center'>
//       <Card className="w-1/4">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Create an account</CardTitle>
//           <CardDescription>
//             Enter your email below to create your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="roll">Rollnumber</Label>
//             <Input id="roll" type="text" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" type="password" placeholder=""/>
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full">Create account</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

// export default Register


// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

// const Register = () => {
//   return (
//     <div className='min-h-screen flex justify-center items-center bg-black'>
//       <Card className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden">
//         <CardHeader className="p-6 bg-white">
//           <CardTitle className="text-3xl font-semibold text-gray-800">Create an account</CardTitle>
//           <CardDescription className="mt-2 text-sm text-gray-600">
//             Enter your email below to create your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="p-6 bg-gray-50">
//           <div className="relative mb-6">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-gray-300" />
//             </div>
//           </div>
//           <div className="grid gap-4">
//             <div className="grid gap-1">
//               <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
//               <Input id="name" type="text" placeholder="Your Name" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
//             </div>
//             <div className="grid gap-1">
//               <Label htmlFor="phone-no" className="text-sm font-medium text-gray-700 ">Phone Number</Label>
//               <Input id="Phone" type="number" placeholder="Your number" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
//             </div>
//             <div className="grid gap-1">
//               <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
//               <Input id="email" type="email" placeholder="Your email " className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
//             </div>
//             <div className="grid gap-1">
//               <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
//               <Input id="password" type="password" placeholder="password" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="p-6 bg-white">
//           <Button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Create account</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

// export default Register

import { Button } from '@/components/ui/button';
import { Card, CardContent,CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card className="w-full max-w-md shadow-xl rounded-xl ">
        <CardHeader className="p-4 text-center border-b ">
          <CardTitle className="text-5xl font-semibold text-gray-800">Create an Account</CardTitle>
          <CardDescription className="mt-1 text-base text-gray-600">
            Enter your details below to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <Label htmlFor="phone-no" className="block text-sm font-medium text-gray-700">Phone Number</Label>
              <Input
                id="phone-no"
                type="tel"
                placeholder="Your Phone Number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Your Password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 text-center border-t ">
          <Button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Create Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
