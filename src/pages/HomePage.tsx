import { CreateTodoButton } from './CreateTodoButton'
import { DeleteTodoButton } from './DeleteTodoButton'
import { ListTodosButton } from './ListTodosButton'

export const HomePage = () => {
  return (
    <>
      <div className="h-2/3">
        <div className="text-center grid place-items-center mx-auto text-4xl text-red-500">
          <div>
            This is the home page
            <br></br>
            <span className="underline">
              Options
            </span>
          </div>
          <CreateTodoButton />
          <ListTodosButton />
          {/* <UpdateTodoModal /> */}
          <DeleteTodoButton />
          {/* <CompleteTodoModal /> */}
          {/* <ShowCompletedTodosModal /> */}
        </div>
      </div>
    </>
  )
}
