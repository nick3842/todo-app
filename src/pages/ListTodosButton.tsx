import { getTodos } from './backendFunctions'
export const ListTodosButton = () => {
  return (
    <div className="mt-4">
      <button
        className="border-4 py-2 px-2 border-red-500 rounded"
        onClick={() => getTodos()}
      >
        Show Todos
      </button>
    </div>
  )
}
