import { createTodo } from './backendFunctions'

export const CreateTodoButton = () => {
  return (
    <div className="mt-4">
      <button
        className="border-4 py-2 px-2 border-red-500 rounded"
        onClick={() => createTodo("hello")}
      >
        Create Todo
      </button>
    </div>
  )
}
