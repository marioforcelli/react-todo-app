
import { GlobalStyle } from './App.styles.js'
import Header from './components/Header/index'
import AddTodo from './components/AddTodo/index.jsx'
import TodoListProvider from './contexts/TodoContext.jsx'
import TodoList from './components/TodoList/index.jsx'

function App() {

  return (
    <TodoListProvider>
      <GlobalStyle/>
      <Header/>
      <AddTodo/>
      <TodoList/>
    </TodoListProvider>

  )
}

export default App
