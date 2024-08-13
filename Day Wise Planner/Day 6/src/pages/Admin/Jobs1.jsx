import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Jobs1 = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const [jobListings, setJobListings] = useState([
    {
      jobTitle: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$120,000/year",
    },
    {
      jobTitle: "Product Manager",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110,000/year",
    },
    {
      jobTitle: "Data Analyst",
      company: "Facebook",
      location: "Menlo Park, CA",
      type: "Contract",
      salary: "$90,000/year",
    },
    {
      jobTitle: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$130,000/year",
    },
    {
      jobTitle: "Marketing Manager",
      company: "Microsoft",
      location: "Redmond, WA",
      type: "Full-time",
      salary: "$100,000/year",
    },
  ]);

  const handleEdit = (job) => {
    setEditJob({ ...job }); // Clone the job to avoid mutating the original
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = (jobTitle) => {
    setJobListings(jobListings.filter(job => job.jobTitle !== jobTitle));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!editJob || !editJob.jobTitle || !editJob.company || !editJob.location || !editJob.type || !editJob.salary) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    if (editMode) {
      // Update existing job
      setJobListings(jobListings.map(job => job.jobTitle === editJob.jobTitle ? editJob : job));
    } else {
      // Add new job
      setJobListings([...jobListings, editJob]);
    }

    setOpen(false);
    setEditMode(false);
    setEditJob(null);
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Job Listings</CardTitle>
          <Button onClick={() => {
            setEditMode(false);
            setEditJob(null);
            setOpen(true);
          }}>
            <FaPlus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobListings.map((job) => (
                <TableRow key={job.jobTitle}>
                  <TableCell className="font-medium">{job.jobTitle}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                  <TableCell className="flex justify-center gap-3">
                    <FaEdit
                      className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white rounded-md'
                      onClick={() => handleEdit(job)}
                    />
                    <FaTrash
                      className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-md'
                      onClick={() => handleDelete(job.jobTitle)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editMode ? "Edit Job Listing" : "Add Job Listing"}</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="jobTitle" className="text-right">
                  Job Title
                </Label>
                <Input
                  id="jobTitle"
                  value={editJob?.jobTitle || ''}
                  onChange={(e) => setEditJob({ ...editJob, jobTitle: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="company" className="text-right">
                  Company
                </Label>
                <Input
                  id="company"
                  value={editJob?.company || ''}
                  onChange={(e) => setEditJob({ ...editJob, company: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input
                  id="location"
                  value={editJob?.location || ''}
                  onChange={(e) => setEditJob({ ...editJob, location: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="type" className="text-right">
                  Type
                </Label>
                <Input
                  id="type"
                  value={editJob?.type || ''}
                  onChange={(e) => setEditJob({ ...editJob, type: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="salary" className="text-right">
                  Salary
                </Label>
                <Input
                  id="salary"
                  value={editJob?.salary || ''}
                  onChange={(e) => setEditJob({ ...editJob, salary: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter className='flex flex-col flex-1'>
              <Button
                type="button"
                className='w-1/2 outline bg-red-400/90 hover:bg-red-400'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className='w-1/2'
              >
                {editMode ? "Save Changes" : "Add Job"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Jobs1;
