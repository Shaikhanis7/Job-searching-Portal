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

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState([
    {
      username: "johndoe",
      email: "johndoe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      username: "janedoe",
      email: "janedoe@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      username: "samsmith",
      email: "samsmith@example.com",
      role: "User",
      status: "Active",
    },
  ]);

  const handleEdit = (user) => {
    setEditUser({ ...user }); // Clone the user to avoid mutating the original
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!editUser || !editUser.username || !editUser.email || !editUser.role || !editUser.status) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    if (editMode) {
      // Update existing user
      setUsers(users.map(user => user.username === editUser.username ? editUser : user));
    } else {
      // Add new user
      setUsers([...users, editUser]);
    }

    setOpen(false);
    setEditMode(false);
    setEditUser(null);
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Users List</CardTitle>
          <Button onClick={() => {
            setEditMode(false);
            setEditUser(null);
            setOpen(true);
          }}>
            <FaPlus className='h-10 w-10 mr-2' /> Add User
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.username}>
                  <TableCell className="font-medium">{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell className="flex justify-center gap-3">
                    <FaEdit
                      className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white rounded-md'
                      onClick={() => handleEdit(user)}
                    />
                    <FaTrash
                      className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-md'
                      onClick={() => handleDelete(user.username)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4">
            <strong>Total Users:</strong> {users.length}
          </div>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editMode ? "Edit User" : "Add User"}</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  value={editUser?.username || ''}
                  onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={editUser?.email || ''}
                  onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Input
                  id="role"
                  value={editUser?.role || ''}
                  onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Input
                  id="status"
                  value={editUser?.status || ''}
                  onChange={(e) => setEditUser({ ...editUser, status: e.target.value })}
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
                {editMode ? "Save Changes" : "Add User"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminUsers;
