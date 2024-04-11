export type UserLogin = {
  username: string;
  password: string;
};

export type NewUser = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type User = {
  id: string;
};

export type TaskType = {
  description: string;
  completed: boolean;
  owner: User | "unassigned";
};

export type Home = {
  name: string;
  inhabitants: string[];
};

export type AllHomes = Home[];
