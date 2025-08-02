import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { TodosList } from './TodosList'

// Mock the fetchTodos API
vi.mock('./api/fetchTodos', () => ({
  fetchTodos: vi.fn(() =>
    Promise.resolve({
      url: 'test',
      data: {
        todos: [
          {
            category: 'work',
            priority: 1,
            title: 'Test Todo 1',
            completed: false,
            description: 'Test description 1'
          },
          {
            category: 'home',
            priority: 2,
            title: 'Test Todo 2',
            completed: true,
            description: 'Test description 2'
          }
        ],
        name: 'Test List'
      }
    })
  )
}))

describe('TodosList Component', () => {
  it('should display todos after loading', async () => {
    render(<TodosList />)

    // Should show loading state initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    // Wait for todos to load and display
    await waitFor(() => {
      expect(screen.getByText('Test Todo 1')).toBeInTheDocument()
      expect(screen.getByText('Test Todo 2')).toBeInTheDocument()
    })

    // Loading should be gone
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  })

  it('should filter todos based on search input', async () => {
    render(<TodosList />)

    // Wait for todos to load
    await waitFor(() => {
      expect(screen.getByText('Test Todo 1')).toBeInTheDocument()
    })

    // Get the filter input and type in it
    const filterInput = screen.getByLabelText(/filter todos/i)
    await userEvent.type(filterInput, 'Test Todo 1')

    // Should show only the matching todo
    expect(screen.getByText('Test Todo 1')).toBeInTheDocument()
    expect(screen.queryByText('Test Todo 2')).not.toBeInTheDocument()
  })

  it('should hide completed todos when checkbox is checked', async () => {
    render(<TodosList />)

    // Wait for todos to load
    await waitFor(() => {
      expect(screen.getByText('Test Todo 2')).toBeInTheDocument()
    })

    // Find and click the hide completed checkbox
    const hideCompletedCheckbox = screen.getByLabelText(/hide completed todos/i)
    await userEvent.click(hideCompletedCheckbox)

    // Completed todo should be hidden, uncompleted should still show
    expect(screen.queryByText('Test Todo 2')).not.toBeInTheDocument()
    expect(screen.getByText('Test Todo 1')).toBeInTheDocument()
  })

  it('should create a new todo when form is submitted', async () => {
    render(<TodosList />)

    // Wait for initial load
    await waitFor(() => {
      expect(screen.getByText('Test Todo 1')).toBeInTheDocument()
    })

    // Fill out the form
    const titleInput = screen.getByLabelText(/title/i)
    const descriptionInput = screen.getByLabelText(/description/i)
    const submitButton = screen.getByRole('button', { name: /create new todo/i })

    await userEvent.type(titleInput, 'New Test Todo')
    await userEvent.type(descriptionInput, 'New test description')
    await userEvent.click(submitButton)

    // Should see the new todo in the list
    expect(screen.getByText('New Test Todo')).toBeInTheDocument()

    // Form should be cleared
    expect(titleInput).toHaveValue('')
    expect(descriptionInput).toHaveValue('')
  })
})