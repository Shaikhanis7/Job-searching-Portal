import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { File } from 'lucide-react';

const DocumentManagement = () => {
    return (
        <Card className='w-1/4 border'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Document Management
                </CardTitle>
                <File className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
                <div className="text-xl font-bold">Manage Documents</div>
                <CardDescription>
                    Easily upload, organize, and access documents.
                </CardDescription>
            </CardContent>
            <CardFooter className="text-xs text-gray-500">
                Seamlessly manage all your documents.
            </CardFooter>
        </Card>
    );
}

export default DocumentManagement;
