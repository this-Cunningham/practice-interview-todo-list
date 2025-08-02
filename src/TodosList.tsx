import React from "react";

export const TodosList = () => {
  // INTERVIEW INSTRUCTIONS:
  // See INTERVIEW_INSTRUCTIONS.md for complete details and questions
  // Implement the features step by step to make the tests pass!

  return (
    <div className="todo-list-container">
      <div className="search-bar-container">
        <fieldset>
          <label htmlFor="todo-filter">Filter Todos: </label>

          <input
            id="todo-filter"
            type="text"
            placeholder="Filter"
          />

          <br />

          <input
            id="hide-completed"
            type="checkbox"
          />
          <label htmlFor="hide-completed">Hide Completed Todos</label>
        </fieldset>
      </div>

      <div className="create-todo-container" style={{ marginTop: "16px" }}>
        <form>
          <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <h3>Create new Todo</h3>
            <label htmlFor="new-todo-title">Title: </label>
            <input
              id="new-todo-title"
              type="text"
            />
            <br />

            <label htmlFor="new-todo-description">Description: </label>
            <input
              id="new-todo-description"
              type="text"
            />
            <button type="submit">Create new Todo</button>
          </fieldset>
        </form>
      </div>
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
