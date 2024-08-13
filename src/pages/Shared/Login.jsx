
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [errors, setErrors] = useState({});
// //     const navigate = useNavigate();

// //     const validate = () => {
// //         const newErrors = {};
// //         if (!email) {
// //             newErrors.email = 'Email is required';
// //         } else if (!/\S+@\S+\.\S+/.test(email)) {
// //             newErrors.email = 'Email address is invalid';
// //         }
// //         if (!password) {
// //             newErrors.password = 'Password is required';
// //         } else if (password.length < 6) {
// //             newErrors.password = 'Password must be at least 6 characters';
// //         }
// //         return newErrors;
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const newErrors = validate();
// //         if (Object.keys(newErrors).length === 0) {
// //             const existingUsers = [
// //                 { email: 'iam@example.com', password: 'password123' },
// //             ];
// //             const adminUsers = [
// //                 { email: 'admin@example.com', password: 'admin123' },
// //             ];
// //             const user = existingUsers.find(user => user.email === email && user.password === password);
// //             const admin = adminUsers.find(admin => admin.email === email && admin.password === password);

// //             if (user) {
// //                 toast.success('Login successful!');
// //                 setTimeout(() => {
// //                     navigate('/');
// //                 }, 2000);
// //             } else if (admin) {
// //                 toast.success('Login successful!');
// //                 setTimeout(() => {
// //                     navigate('/admin/dashboard');
// //                 }, 2000);
// //             } else {
// //                 toast.error('Incorrect credentials. Please try again.');
// //             }
// //         } else {
// //             setErrors(newErrors);
// //         }
// //     };

// //     return (
// //         <div className='min-h-screen flex items-center justify-center'>
// //             <ToastContainer />
// //             <Card className="w-full max-w-md shadow-xl rounded-xl">
// //                 <CardHeader className="p-8 text-center border-b">
// //                     <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
// //                     <CardDescription className="mt-2 text-lg text-gray-600">
// //                         Please enter your credentials to access your account.
// //                     </CardDescription>
// //                 </CardHeader>
// //                 <form onSubmit={handleSubmit}>
// //                     <CardContent className="p-8">
// //                         <div className="space-y-6">
// //                             <div>
// //                                 <Label htmlFor="email" className="block text-sm text-gray-700">Email</Label>
// //                                 <Input
// //                                     id="email"
// //                                     type="email"
// //                                     value={email}
// //                                     onChange={(e) => setEmail(e.target.value)}
// //                                     placeholder="Your email address"
// //                                     className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// //                                 />
// //                                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //                             </div>
// //                             <div>
// //                                 <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
// //                                 <Input
// //                                     id="password"
// //                                     type="password"
// //                                     value={password}
// //                                     onChange={(e) => setPassword(e.target.value)}
// //                                     placeholder="Your password"
// //                                     className={`mt-1 block w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// //                                 />
// //                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //                             </div>
// //                         </div>
// //                     </CardContent>
// //                     <CardFooter className="p-8 text-center border-t">
// //                         <Button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
// //                             Login
// //                         </Button>
// //                     </CardFooter>
// //                 </form>
// //             </Card>
           
// //         </div>
// //     );
// // };

// // export default Login;




















// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { toast, ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import { Button } from '@/components/ui/button';
// // // import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// // // import { Input } from '@/components/ui/input';
// // // import { Label } from '@/components/ui/label';
// // // import { authService } from '@/services/auth'; 

// // // const Login = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [errors, setErrors] = useState({});
// // //     const navigate = useNavigate();

// // //     const validate = () => {
// // //         const newErrors = {};
// // //         if (!email) {
// // //             newErrors.email = 'Email is required';
// // //         } else if (!/\S+@\S+\.\S+/.test(email)) {
// // //             newErrors.email = 'Email address is invalid';
// // //         }
// // //         if (!password) {
// // //             newErrors.password = 'Password is required';
// // //         } else if (password.length < 6) {
// // //             newErrors.password = 'Password must be at least 6 characters';
// // //         }
// // //         return newErrors;
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         const newErrors = validate();
// // //         if (Object.keys(newErrors).length === 0) {
// // //             try {
// // //                 const response = await authService.SignIn(email, password);
// // //                 const { token, role } = response.data;
                
// // //                 authService.setToken(token);
                
// // //                 if (role === 'admin') {
// // //                     toast.success('Login successful!');
// // //                     setTimeout(() => {
// // //                         navigate('/admin/dashboard');
// // //                     }, 2000);
// // //                 } else {
// // //                     toast.success('Login successful!');
// // //                     setTimeout(() => {
// // //                         navigate('/');
// // //                     }, 2000);
// // //                 }
// // //             } catch (error) {
// // //                 toast.error('Incorrect credentials. Please try again.');
// // //             }
// // //         } else {
// // //             setErrors(newErrors);
// // //         }
// // //     };

// // //     return (
// // //         <div className='min-h-screen flex items-center justify-center'>
// // //             <ToastContainer />
// // //             <Card className="w-full max-w-md shadow-xl rounded-xl">
// // //                 <CardHeader className="p-8 text-center border-b">
// // //                     <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
// // //                     <CardDescription className="mt-2 text-lg text-gray-600">
// // //                         Please enter your credentials to access your account.
// // //                     </CardDescription>
// // //                 </CardHeader>
// // //                 <form onSubmit={handleSubmit}>
// // //                     <CardContent className="p-8">
// // //                         <div className="space-y-6">
// // //                             <div>
// // //                                 <Label htmlFor="email" className="block text-sm text-gray-700">Email</Label>
// // //                                 <Input
// // //                                     id="email"
// // //                                     type="email"
// // //                                     value={email}
// // //                                     onChange={(e) => setEmail(e.target.value)}
// // //                                     placeholder="Your email address"
// // //                                     className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// // //                                 />
// // //                                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// // //                             </div>
// // //                             <div>
// // //                                 <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
// // //                                 <Input
// // //                                     id="password"
// // //                                     type="password"
// // //                                     value={password}
// // //                                     onChange={(e) => setPassword(e.target.value)}
// // //                                     placeholder="Your password"
// // //                                     className={`mt-1 block w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// // //                                 />
// // //                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// // //                             </div>
// // //                         </div>
// // //                     </CardContent>
// // //                     <CardFooter className="p-8 text-center border-t">
// // //                         <Button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
// // //                             Login
// // //                         </Button>
// // //                     </CardFooter>
// // //                 </form>
// // //             </Card>
// // //         </div>
// // //     );
// // // };

// // // export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { SignIn } from '@/services/api';
// const Login = () => 
//     {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const validate = () => {
//         const newErrors = {};
//         if (!email) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Email address is invalid';
//         }
//         if (!password) {
//             newErrors.password = 'Password is required';
//         }
//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newErrors = validate();
//         if (Object.keys(newErrors).length === 0) {
//             try {
//                 const response = await SignIn(email, password);
//                 toast.success('Login successful!');
//                 setTimeout(() => {
//                     const role = response.data.role;
//                     navigate(role === 'ADMIN' ? '/dashboard' : '/');
//                 }, 2000);
//             } catch (error) {
//                 toast.error('Login failed. Please check your credentials.');
//             }
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center">
//             <ToastContainer />
//             <Card className="w-full max-w-md shadow-xl rounded-xl">
//                 <CardHeader className="p-4 text-center border-b">
//                     <CardTitle className="text-5xl font-semibold text-gray-800">Welcome Back</CardTitle>
//                     <CardDescription className="mt-1 text-base text-gray-600">
//                         Enter your email and password to sign in.
//                     </CardDescription>
//                 </CardHeader>
//                 <form onSubmit={handleSubmit}>
//                     <CardContent className="p-4">
//                         <div className="space-y-4">
//                             <div>
//                                 <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Your Email"
//                                     className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     placeholder="Your Password"
//                                     className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                             </div>
//                         </div>
//                     </CardContent>
//                     <CardFooter className="p-4 text-center border-t">
//                         <Button type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
//                             Sign In
//                         </Button>
//                     </CardFooter>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default Login;





// import React, { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { SignIn } from '@/services/auth';

// const Login = () => {
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const validate = () => {
//         const newErrors = {};
//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;

//         if (!email) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Email address is invalid';
//         }
//         if (!password) {
//             newErrors.password = 'Password is required';
//         }

//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newErrors = validate();
//         if (Object.keys(newErrors).length === 0) {
//             try {
//                 const { role } = await SignIn(emailRef.current.value, passwordRef.current.value);
//                 toast.success('Login successful!');
//                 setTimeout(() => {
//                     navigate(role === 'ADMIN' ? '/dashboard' : '/');
//                 }, 2000);
//             } catch (error) {
//                 toast.error('Login failed. Please check your credentials.');
//             }
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center">
//             <ToastContainer />
//             <Card className="w-full max-w-md shadow-xl rounded-xl">
//                 <CardHeader className="p-4 text-center border-b">
//                     <CardTitle className="text-5xl font-semibold text-gray-800">Welcome Back</CardTitle>
//                     <CardDescription className="mt-1 text-base text-gray-600">
//                         Enter your email and password to sign in.
//                     </CardDescription>
//                 </CardHeader>
//                 <form onSubmit={handleSubmit}>
//                     <CardContent className="p-4">
//                         <div className="space-y-4">
//                             <div>
//                                 <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     ref={emailRef}
//                                     placeholder="Your Email"
//                                     className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     ref={passwordRef}
//                                     placeholder="Your Password"
//                                     className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                             </div>
//                         </div>
//                     </CardContent>
//                     <CardFooter className="p-4 text-center border-t">
//                         <Button type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
//                             Sign In
//                         </Button>
//                     </CardFooter>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default Login;




import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authService } from '@/services/auth';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        const email = emailRef.current?.value ?? '';
        const password = passwordRef.current?.value ?? '';

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";

    //     const newErrors = validate();
    //     if (Object.keys(newErrors).length === 0) {
    //         try {
    //             const res = await authService.SignIn(email, password);
    //             if (res.status === 200) {
    //                 authService.setToken(res.data.accessToken);
    //                 toast.success("Welcome");
    //                 setTimeout(() => {
    //                     navigate(res.data.role === 'ADMIN' ? '/admin/dashboard' : '/');
    //                 }, 5000);
    //             } else {
    //                 toast.error("Login failed");
    //             }
    //         } catch (error) {
    //             toast.error("Login failed");
    //         }
    //     } else {
    //         setErrors(newErrors);
    //     }
    // };
    
    try {
        const res = await authService.SignIn(email, password);
        if (res.status === 200) {
            authService.setToken(res.data.accessToken);
            toast.success("Welcome");
            await checkRedirect();
        } else {
            toast.error("Login failed");
        }
    } catch (error) {
        toast.error("Login failed");
    }
};

const checkRedirect=async()=>
{
    const token=authService.getToken();
    const userRole=authService.getUserRole();

    console.log(userRole);
    if(token && userRole)
    {
        if(userRole==="STUDENT")
        {
            navigate('/user/dashboard');
        }
        else if(userRole==="ADMIN")
{
            navigate('/admin/dashboard');
    }
}
};
    return (
        <div className="min-h-screen flex items-center justify-center">
            <ToastContainer />
            <Card className="w-full max-w-md shadow-xl rounded-xl">
                <CardHeader className="p-4 text-center border-b">
                    <CardTitle className="text-5xl font-semibold text-gray-800">Welcome Back</CardTitle>
                    <CardDescription className="mt-1 text-base text-gray-600">
                        Enter your email and password to sign in.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="p-4">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    ref={emailRef}
                                    placeholder="Your Email"
                                    className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    ref={passwordRef}
                                    placeholder="Your Password"
                                    className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 text-center border-t">
                        <Button type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Sign In
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default Login;
