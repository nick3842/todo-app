let todos: todo[] = []
let counter = 1

type todo = {
  todo: string
  id: number
  completed: boolean
}

export const createTodo = (todo: string) => {
  let newTodo: todo = {
    todo: todo,
    id: counter,
    completed: false
  }

  console.log(`created todo ${newTodo.todo} with id ${newTodo.id}`)
  todos.push(newTodo)
  counter += 1
}

export const updateTodo = (id: number, todo: string) => {
  console.log(`updating ${todo} with id ${id}`)
}

export const deleteTodo = (id: number) => {
  console.log("deleting todo with id: ", id)
}

export const completeTodo = (id: number) => {
  console.log({ id })
}

export const getTodos = () => {
  console.log("listing todos")
  console.log(todos)
}

export const getCompletedTodos = () => {
  console.log("completed todos")
}
