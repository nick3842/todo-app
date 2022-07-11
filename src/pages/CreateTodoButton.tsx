import { Link } from 'react-router-dom'

export const CreateTodoButton = () => {
  return (
    <div className="mt-4">
      <div>
        <Link className="flex items-center w-full" to="/create">

          <span className="border-4 py-2 px-2 border-red-500 rounded">Create Todo</span>
        </Link>
      </div>
    </div>
  )
}
