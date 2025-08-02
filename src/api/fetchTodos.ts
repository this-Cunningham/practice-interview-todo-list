import { todosList as mockTodosListData } from "../todosData";

export const fetchTodos = (url: string) => {
    return new Promise<{url: string, data: {todos: typeof mockTodosListData, name: string}}>((resolve) => {
      const timeoutId = setTimeout(() => {
        resolve({ url, data: { todos: mockTodosListData, name: "Todo List 1" } });
      }, 1000);

      return () => clearTimeout(timeoutId);
    });
  };