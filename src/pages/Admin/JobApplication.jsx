import React, { useState } from 'react';
import { Search, X, Edit, Trash2 } from 'lucide-react';
import {
    Table,
    TableCaption,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from '../../components/ui/table';
import { Button } from '../../components/ui/button';

const JobApplication = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [projects, setProjects] = useState([
        { id: 1, project: 'E-commerce Website', manager: 'Michael Scott', status: 'In Progress' },
        { id: 2, project: 'Mobile App Development', manager: 'Pam Beesly', status: 'Completed' },
        { id: 3, project: 'Marketing Campaign', manager: 'Jim Halpert', status: 'Not Started' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editProject, setEditProject] = useState(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEditProject = (project) => {
        setEditProject(project);
        setShowModal(true);
    };

    const handleDeleteProject = (projectId) => {
        setProjects(projects.filter(proj => proj.id !== projectId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedProject = {
            id: editProject ? editProject.id : Date.now(),
            project: formData.get('project') || '',
            manager: formData.get('manager') || '',
            status: formData.get('status') || 'Not Started',
        };
        if (editProject) {
            setProjects(projects.map(proj => (proj.id === editProject.id ? updatedProject : proj)));
        } else {
            setProjects([...projects, updatedProject]);
        }
        setShowModal(false);
    };

    const filteredProjects = projects.filter(proj =>
        proj.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.manager.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-6'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-2xl font-bold text-primary'>Project Management</h1>
                </div>
            </div>
            <div className='mt-4 flex justify-between items-center'>
                <div className='relative w-full'>
                    <input
                        type='text'
                        placeholder='Search projects...'
                        value={searchTerm}
                        onChange={handleSearch}
                        className='pl-10 pr-4 py-2 border border-gray-300 rounded w-full'
                    />
                    <Search className='absolute left-2 top-2.5 text-gray-400' size={20} />
                </div>
            </div>
            <div className='mt-4'>
                <Table>
                    <TableCaption>A list of ongoing and completed projects.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Project</TableHead>
                            <TableHead>Project Manager</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(proj => (
                                <TableRow key={proj.id}>
                                    <TableCell>{proj.project}</TableCell>
                                    <TableCell>{proj.manager}</TableCell>
                                    <TableCell>{proj.status}</TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant='outline'
                                            className='mr-2'
                                            onClick={() => handleEditProject(proj)}
                                        >
                                            <Edit size={16} className='mr-1' />
                                            Edit
                                        </Button>
                                        <Button
                                            variant='outline'
                                            color='danger'
                                            onClick={() => handleDeleteProject(proj.id)}
                                        >
                                            <Trash2 size={16} className='mr-1' />
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className='text-center text-gray-500'>
                                    No projects found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary'>
                                {editProject ? 'Edit Project' : 'Project Details'}
                            </h2>
                            <button onClick={() => setShowModal(false)}><X size={20} className="text-primary" /></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='project'>Project Name</label>
                                <input
                                    type='text'
                                    id='project'
                                    name='project'
                                    defaultValue={editProject?.project || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='manager'>Project Manager</label>
                                <input
                                    type='text'
                                    id='manager'
                                    name='manager'
                                    defaultValue={editProject?.manager || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='status'>Status</label>
                                <select
                                    id='status'
                                    name='status'
                                    defaultValue={editProject?.status || 'Not Started'}
                                    className='w-full px-4 py-2 border rounded'
                                >
                                    <option value='Not Started'>Not Started</option>
                                    <option value='In Progress'>In Progress</option>
                                    <option value='Completed'>Completed</option>
                                    <option value='On Hold'>On Hold</option>
                                </select>
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='bg-primary text-primary-foreground px-4 py-2 rounded'>
                                    {editProject ? 'Update' : 'Save'} Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobApplication;
