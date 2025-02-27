
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
      <Search className="h-5 w-5 text-neutral-400 transition-colors duration-200" />
      <Input
        placeholder="Search users..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-none shadow-none focus-visible:ring-0 text-neutral-900 placeholder:text-neutral-400 transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;
