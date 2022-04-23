
import { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import * as C from './styles'



export default function TodoItem({todo}) {

    const { setTodoList, todoList} = useContext(TodoContext)

    const handleChange = e =>{
        const { name } = e.target
        const arr = [...todoList]
        arr[todo.id -1].checked = !arr[todo.id-1].checked
        setTodoList(arr)
    }

    const handleDeleteClick = e =>{
        const arr = [...todoList]
        arr[todo.id-1].show = !arr[todo.id-1].show
        setTodoList(arr)
        console.log(arr[todo.id-1])
    }


    return(
        <C.Container id={todo.id}>
            <C.Form>
                <C.Input name='checked' type={'checkbox'} onChange={handleChange} ></C.Input>
                <C.Label todoChecked={todo.checked}>{todo.text}</C.Label>
                
            </C.Form>
            <C.Options className='options'>
                <C.Trash onClick={handleDeleteClick}/>
            </C.Options>
            
        </C.Container>
        

    )
}