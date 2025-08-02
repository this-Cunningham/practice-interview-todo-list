# React TodosList - Junior Frontend Engineer Interview

## Overview
This is a practical React interview exercise where you'll implement a todo list application with modern React patterns. The project includes a test suite that will guide your development - make the failing tests pass by implementing the required features.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the tests to see what needs to be implemented:**
   ```bash
   npm test
   ```

3. **Start the development server (optional):**
   ```bash
   npm run dev
   ```

## Implementation Instructions

Implement these features step by step in the `src/TodosList.tsx` component:

### 1. Set up state management with useState and useEffect
- Import and use React hooks for managing component state
- Create state variables for todos array, loading status, filter text, and hideCompleted boolean

### 2. Fetch todos on mount using fetchTodos API
- Use the provided `fetchTodos` function from `./api/fetchTodos`
- Handle loading states and display "Loading..." text initially
- Store the fetched todos in state

### 3. Display todo items with TodoItem component
- Create a reusable TodoItem component that shows:
  - Title with priority indicator
  - Completion status (checkbox)
  - Category
- Map over the todos array to render the list

### 4. Implement todo filtering by text
- Connect the filter input to state
- Filter todos by title/description that includes the search text (case-insensitive)
- Update the displayed todos based on the filter

### 5. Add hide completed functionality
- Connect the "Hide Completed" checkbox to state
- Filter out completed todos when the checkbox is checked
- Show all todos when unchecked

### 6. Make todos clickable to show/hide description
- When clicking a todo item, toggle showing/hiding its description
- Use local state in the TodoItem component to track expanded state
- Display the description below the todo when expanded

### 7. Add priority sorting buttons
- Add buttons to sort todos by priority (high to low, low to high)
- Priority 1 = highest priority, higher numbers = lower priority
- Update the todo list order based on selected sorting

### 8. Make completion checkbox functional
- Clicking the checkbox should toggle the completed status of a todo
- Update the todo's completed property in state
- Reflect the change in the UI immediately

### 9. Implement add new todo form
- Connect the form inputs to state (controlled components)
- Handle form submission to add new todos to the list
- Include title, description, category, and priority fields
- Reset the form after successful submission

### 10. Add form validation for required title
- Ensure the title field is required before allowing todo creation
- Show basic error messages for invalid submissions
- Prevent form submission if validation fails

## Bonus Features (Optional)
- Add a category filtering dropdown
- Implement todo deletion functionality
- Add local storage persistence

## Test-Driven Development
The project includes 4 comprehensive tests that will guide your implementation:

1. **Loading and Data Display Test** - Verifies todos load from API and display correctly
2. **Search Filtering Test** - Tests that the filter input works to show/hide todos
3. **Hide Completed Test** - Validates the "Hide Completed" checkbox functionality
4. **Add New Todo Test** - Ensures form submission creates new todos and clears the form

Watch the tests pass as you implement each feature. Run `npm test` to see your progress!

---

## Interview Questions

### Core React Concepts

**1. What's the difference between useState and useEffect? When would you use each?**
- Discuss state management vs side effects
- Explain when each hook is appropriate
- Give examples from the TodosList implementation

**2. How would you handle async data fetching in React? What are the common patterns?**
- Discuss promises, async/await, loading states
- Explain error handling strategies
- Apply to the fetchTodos API implementation

**3. Explain controlled vs uncontrolled components. Which approach should we use for the form inputs?**
- Define both approaches and their trade-offs
- Discuss when to use each
- Apply to the todo creation form

### Performance & Best Practices

**4. How would you optimize this component if the todo list had 1000+ items?**
- Discuss virtualization, pagination, memoization
- Explain React.memo, useMemo, useCallback
- Consider performance implications of different approaches

**5. What's the purpose of the 'key' prop when rendering lists? What happens if you don't use it?**
- Explain React's reconciliation algorithm
- Discuss the importance of stable, unique keys
- Apply to rendering the todo list

### User Interaction & Forms

**6. How would you handle form validation? What are different approaches you could take?**
- Discuss client-side vs server-side validation
- Explain real-time vs on-submit validation strategies
- Apply to the title validation requirement

**7. Explain event handling in React. How does event delegation work with React events?**
- Discuss SyntheticEvent vs native events
- Explain React's event system and delegation
- Apply to form submission, clicking, typing interactions

### Component Architecture

**8. What's the difference between props and state? When should data be props vs state?**
- Define props vs state and their purposes
- Discuss data flow in React applications
- Apply to passing todo data and managing local state

**9. How would you structure this component if it became very large? What patterns would you use?**
- Discuss component composition strategies
- Explain custom hooks, context, and state management
- Consider separation of concerns and reusability

**10. Explain the component lifecycle. What happens when a component mounts, updates, and unmounts?**
- Discuss the component lifecycle phases
- Explain useEffect's relationship to lifecycle methods
- Apply to data fetching timing and cleanup

## Evaluation Criteria

### Technical Implementation (60%)
- **Functionality**: Do the implemented features work correctly?
- **Code Quality**: Is the code clean, readable, and well-organized?
- **React Patterns**: Are modern React patterns and best practices used?
- **Testing**: Do the provided tests pass?

### Problem-Solving (25%)
- **Approach**: How do you break down complex problems?
- **Debugging**: How do you identify and fix issues?
- **Decision Making**: Can you justify your technical choices?

### Communication (15%)
- **Explanation**: Can you clearly explain your code and decisions?
- **Questions**: Do you ask good clarifying questions?
- **Collaboration**: How do you respond to feedback and suggestions?

## Resources

- [React Documentation](https://react.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Good luck with your interview! Focus on writing clean, functional code and don't hesitate to ask questions.