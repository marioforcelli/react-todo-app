import {createContext, useState} from 'react'

export const TodoContext = createContext();

export default function todoListProvider({children}){

    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todolist'))  || []);

    return(
        <TodoContext.Provider value={{todoList, setTodoList}}>
            {children}
        </TodoContext.Provider>
    )

}


