
import { useState } from "react";
import { User } from "@/types/user";
import UserListHeader from "@/components/users/UserListHeader";
import SearchBar from "@/components/users/SearchBar";
import UserTable from "@/components/users/UserTable";
import AddUserDialog from "@/components/AddUserDialog";
import EditUserDialog from "@/components/EditUserDialog";
import DeleteUserDialog from "@/components/DeleteUserDialog";
import { useUsers } from "@/hooks/useUsers";

const Index = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
  const {
    users,
    isLoading,
    searchTerm,
    setSearchTerm,
    addUser,
    updateUser,
    deleteUser,
  } = useUsers();

  const handleAddUser = (newUser: NewUser) => {
    addUser(newUser);
    setShowAddDialog(false);
  };

  const handleUpdateUser = (updatedUser: User) => {
    updateUser(updatedUser);
    setShowEditDialog(false);
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      deleteUser(selectedUser.id);
      setShowDeleteDialog(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <UserListHeader onAddClick={() => setShowAddDialog(true)} />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-md">
          <UserTable
            users={users}
            isLoading={isLoading}
            onEditUser={(user) => {
              setSelectedUser(user);
              setShowEditDialog(true);
            }}
            onDeleteUser={(user) => {
              setSelectedUser(user);
              setShowDeleteDialog(true);
            }}
            onAddUser={() => setShowAddDialog(true)}
          />
        </div>
      </div>

      <AddUserDialog
        open={showAddDialog}
        onClose={() => setShowAddDialog(false)}
        onAdd={handleAddUser}
      />

      {selectedUser && (
        <>
          <EditUserDialog
            open={showEditDialog}
            onClose={() => setShowEditDialog(false)}
            user={selectedUser}
            onUpdate={handleUpdateUser}
          />
          <DeleteUserDialog
            open={showDeleteDialog}
            onClose={() => setShowDeleteDialog(false)}
            userName={selectedUser.name}
            onDelete={handleDeleteUser}
          />
        </>
      )}
    </div>
  );
};

export default Index;
