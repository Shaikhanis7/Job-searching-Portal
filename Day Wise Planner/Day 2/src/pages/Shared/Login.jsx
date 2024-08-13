

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle ,CardDescription} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <Card className="w-full max-w-md shadow-xl rounded-xl">
                <CardHeader className="p-8xl text-center border-b ">
                    <CardTitle className="text-6xl font-bold text-gray-800">Login</CardTitle>
                    <CardDescription className="mt-2 text-lg text-gray-600">
                        Please enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="email" className="block text-sm text-2xl text-gray-700">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your email address"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" className="block text-sm font-medium text-gray-700 text-2xl">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Your password"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-8 text-center border-t ">
                    <Button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
