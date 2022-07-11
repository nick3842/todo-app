import { useState } from 'react'
import { createTodo, getTodos } from './backendFunctions'

type CreateTodoModalProps = {
  closeModal: () => void
}
export const CreateTodoModal = () => {
  const [label, setLabel] = useState("")

  return (
    <div className="mt-4">
      <div className="text-center">
        <h1 className="text-center mx-auto text-4xl">
        Create a todo!
        </h1>
          <input
            id="NewTODO_Label"
            value={label}
            onChange={evt => { setLabel(evt.target.value)}}
            placeholder={"What do you need to do?"}
            className="border border-blue-500 focus:border-red-500 rounded p-4 bg-transparent mt-4" />
        <button
          className="ml-2 rounded-full border border-red-500 p-2 hover:bg-red-200 focus:ring"
          onClick={() => createTodo(label)}
        >
          Submit
        </button>
        {/* <button */}
        {/*   className="ml-2" */}
        {/*   onClick={() => getTodos()} */}
        {/* > */}
        {/*   Show Todos */}
        {/* </button> */}
      </div>
    </div>
  )
}
