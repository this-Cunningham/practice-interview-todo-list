// import { useContext } from "react";
// import { TodosContext } from "./App";
import { todosList, Todo } from "./todosData";
import * as React from "react";

export const TodosList = () => {
  // const data = useContext(TodosContext);
  const [todos, setTodos] = React.useState(todosList);
  const [filterText, setFilterText] = React.useState("");
  const [hideCompleted, setHideCompleted] = React.useState(false);
  const [newTodo, setNewTodo] = React.useState<Todo>({
    description: "",
    title: "",
    priority: 0,
    completed: false,
    category: "",
  });

  const createTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
    setNewTodo({
      description: "",
      title: "",
      priority: 0,
      completed: false,
      category: "",
    });
  };

  return (
    <div className="todo-list-container">
      <div className="search-bar-container">
        <fieldset>
          <label htmlFor="todo-filter">Filter Todos: </label>

          <input
            id="todo-filter"
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter"
          />

          <br />

          <input
            id="hide-completed"
            type="checkbox"
            checked={hideCompleted}
            onChange={() => setHideCompleted((prev) => !prev)}
          />
          <label htmlFor="hide-completed">Hide Completed Todos</label>
        </fieldset>
      </div>

      <div className="create-todo-container" style={{ marginTop: "16px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTodo(newTodo);
          }}
        >
          <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <h3>Create new Todo</h3>
            <label htmlFor="new-todo-title">Title: </label>
            <input
              id="new-todo-title"
              type="text"
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo({ ...newTodo, title: e.target.value })
              }
            />
            <br />

            <label htmlFor="new-todo-description">Description: </label>
            <input
              id="new-todo-description"
              type="text"
              value={newTodo.description}
              onChange={(e) =>
                setNewTodo({ ...newTodo, description: e.target.value })
              }
            />
            <button type="submit">Create new Todo</button>
          </fieldset>
        </form>
      </div>

      <ul>
        {todos
          .filter(
            ({ title, description, completed }) =>
              (title.toLowerCase().includes(filterText.toLowerCase()) ||
                description.toLowerCase().includes(filterText.toLowerCase())) &&
              (hideCompleted ? !completed : true)
          )
          .map((todo, i) => (
            <TodoItem
              todoItemData={todo}
              handleCheckboxChange={() => {
                const newTodos = todos.slice();
                newTodos[i] = { ...todo, completed: !todo.completed };
                setTodos(newTodos);
              }}
            />
          ))}
      </ul>
    </div>
  );
};

// todo list container
// sort by priority
// sort by completed

// search bar
// filter todos by text
// click "hide completed" checkbox to filter out all completed todos
// make sure to include labels for accessibility on form components

// Todo Item Component
// checkbox toggles based on "completed" property
// Title based on title property with priority
// if you click on a todo item it will display a description
const TodoItem = ({
  todoItemData,
  handleCheckboxChange,
}: {
  todoItemData: Todo;
  handleCheckboxChange: any;
}) => {
  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <div>
        <input
          type="checkbox"
          id={`todo-checkbox-${todoItemData.title}`}
          checked={todoItemData.completed}
          onChange={handleCheckboxChange}
        />{" "}
        <label htmlFor={`todo-checkbox-${todoItemData.title}`}>
          {todoItemData.title}
        </label>
      </div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "24px",
          fontSize: "12px",
          overflowX: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "240px",
        }}
      >
        {todoItemData.description}
      </div>
    </li>
  );
};
