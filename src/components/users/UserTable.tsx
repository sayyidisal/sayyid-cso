
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2, Users } from "lucide-react";

interface UserTableProps {
  users: User[];
  isLoading: boolean;
  onEditUser: (user: User) => void;
  onDeleteUser: (user: User) => void;
  onAddUser: () => void;
}

const UserTable = ({ users, isLoading, onEditUser, onDeleteUser, onAddUser }: UserTableProps) => {
  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-neutral-200 mb-4 animate-spin" />
          <div className="h-4 w-48 bg-neutral-200 rounded mb-2" />
          <div className="h-3 w-32 bg-neutral-200 rounded" />
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="p-8 text-center transform transition-all duration-300 hover:scale-105">
        <Users className="h-12 w-12 text-neutral-300 mx-auto mb-4 animate-float" />
        <h3 className="text-lg font-medium text-neutral-900 mb-1">No users yet</h3>
        <p className="text-neutral-500 mb-4">Get started by adding your first user</p>
        <Button
          onClick={onAddUser}
          variant="outline"
          className="mx-auto transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
        >
          <Users className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
          Add User
        </Button>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-neutral-50 transition-colors duration-200">
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow 
            key={user.id}
            className="hover:bg-neutral-50 transition-all duration-200 animate-fadeIn"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge
                variant={user.status === "active" ? "default" : "secondary"}
                className={`${
                  user.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-neutral-100 text-neutral-800"
                } transition-all duration-300 transform hover:scale-105`}
              >
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEditUser(user)}
                  className="hover:bg-neutral-100 transition-all duration-200 transform hover:scale-110"
                >
                  <Pencil className="h-4 w-4 text-neutral-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteUser(user)}
                  className="hover:bg-red-50 transition-all duration-200 transform hover:scale-110"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
