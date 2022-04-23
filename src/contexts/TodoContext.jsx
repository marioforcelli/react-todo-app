import {createContext, useState} from 'react'

export const TodoContext = createContext();

export default function todoListProvider({children}){

    const [todoList, setTodoList] = useState([
        {'id': 1, 'text': 'Comprar carne', 'checked': false, 'show': true},
        {'id': 2, 'text': 'Comprar Frutas', 'checked': false, 'show': true}
    ]);

    return(
        <TodoContext.Provider value={{todoList, setTodoList}}>
            {children}
        </TodoContext.Provider>
    )

}


