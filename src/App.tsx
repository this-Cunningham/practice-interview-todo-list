import "./App.css";
import * as React from "react";
import { TodosList } from "./TodosList";

const realFakeData = {
  todos: [],
  name: "Todo List 1",
};

interface TodosData {
  url: string;
  data: { todos: any[]; name: string };
}
export const TodosContext = React.createContext<TodosData | null>(null);

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<TodosData | null>(null);

  React.useEffect(() => {
    let timeoutId: number;

    const fetch = (url: string) => {
      return new Promise<TodosData>((resolve) => {
        timeoutId = setTimeout(() => {
          console.log("hi");
          resolve({ url, data: realFakeData });
        }, 500);
      });
    };

    fetch("todo-list.com").then((res) => setData(res));

    return () => clearTimeout(timeoutId);
  }, []);

  return <TodosContext.Provider value={data}>{children}</TodosContext.Provider>;
};

function App() {
  return (
    <TodosProvider>
      <TodosList />
    </TodosProvider>
  );
}

export default App;
