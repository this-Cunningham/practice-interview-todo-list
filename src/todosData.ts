export interface Todo {
  category: string;
  priority: number;
  title: string;
  completed: boolean;
  description: string;
}

export const todosList: Todo[] = [
  {
    category: "work",
    priority: 2,
    title: "Finish project report",
    completed: false,
    description: "Write up the final report for the XYZ project.",
  },
  {
    category: "home",
    priority: 1,
    title: "Clean the kitchen",
    completed: true,
    description: "Wash dishes, wipe counters, and sweep the floor.",
  },
  {
    category: "work",
    priority: 1,
    title: "Attend meeting with client",
    completed: false,
    description: "Discuss project progress and next steps with the client.",
  },
];
