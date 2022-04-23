import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import * as C from './styles'

export default function AddTodo(){
    const [input, setInput]= useState('')
    const {setTodoList, todoList} = useContext(TodoContext)

    const handleInputChange = e => setInput(e.target.value)

    useEffect(()=>{
        localStorage.setItem('todolist', JSON.stringify(todoList))
    }, [todoList])

    const handleSubmit = e =>{
        e.preventDefault();
       
        if(input){
            setTodoList(prev =>{
                return [
                    ...prev,
                    {'id': todoList.length + 1 ,'text': input, 'checked': false, 'show': true}
                    ]
                }
            )
                setInput('')
        }
  
    }
    return (
        
        <C.Container>
            <C.Wrapper>
                <C.Form onSubmit={handleSubmit}>
                    <C.Input value={input} onChange={handleInputChange}/>
                </C.Form>
            </C.Wrapper>
        </C.Container>
    )
}