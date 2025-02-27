
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  created_at: string;
}

export type NewUser = Omit<User, "id" | "created_at">;
