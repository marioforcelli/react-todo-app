import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"
import TodoItem from "../TodoItem"
import { Container } from "./styles"


export default function TodoList(){
    const {todoList} = useContext(TodoContext)
    return(
        
        <Container>
            {todoList.filter(i => i.show).map((i, index) =>{
                {console.log(i)}
                return(
                    <TodoItem key={index} todo={i}/>
                )
                
            })}
        </Container>
    )
}