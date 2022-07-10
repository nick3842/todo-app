import './App.css';
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <HomePage />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="create" element={<CreateTodoButton />} />
      <Route path="showtodos" element={<ListTodosButton />} />
    </Routes>
  )
}

export default App;
