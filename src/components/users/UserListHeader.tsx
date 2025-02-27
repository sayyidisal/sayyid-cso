
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface UserListHeaderProps {
  onAddClick: () => void;
}

const UserListHeader = ({ onAddClick }: UserListHeaderProps) => {
  return (
    <div className="flex justify-between items-center transform transition-all duration-300 hover:scale-[1.02]">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold text-neutral-900 animate-fadeIn">StarfetchX</h1>
        <p className="text-neutral-500 animate-fadeIn delay-100">
          Manage your team members and their account permissions here.
        </p>
      </div>
      <Button
        onClick={onAddClick}
        className="bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        <PlusCircle className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
        Add User
      </Button>
    </div>
  );
};

export default UserListHeader;
