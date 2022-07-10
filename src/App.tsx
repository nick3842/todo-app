import './App.css'
import { HomePage } from './pages/HomePage'
import { CreateTodoButton } from './pages/CreateTodoButton'
import { ListTodosButton } from './pages/ListTodosButton'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="create" element={<CreateTodoButton />} />
      <Route path="showtodos" element={<ListTodosButton />} />
    </Routes>
  )
}

export default App
