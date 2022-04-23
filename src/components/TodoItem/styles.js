import styled from 'styled-components'
import { BsTrash } from 'react-icons/bs'


export const Container = styled.div`
    display: flex;
   
    width: min(1000px, 85vw);
    background-color: #9999A1 ;
    min-height: 35px;
    height: 50px;
    margin: 10px;
    justify-content: flex-start;
    border-radius: 10px;

    :hover{
        .options{
            display: flex;
            justify-content: flex-end;
            margin-right: 10px;
        }
    }
`

export const Form = styled.form`
    width: 80%;
    display: flex;
    

    align-items: center;

    
`

export const Input = styled.input`
    appearance: none;
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    border: 1px solid black;
    background-color: #E6E6E9;
    outline: none;
    border: none;
    margin: 0 20px 0px 20px;
    border-radius: 25px;

    :checked {
        background-color: #66666E ;
        
    }

    :hover{
        cursor: pointer;
    }

`


export const Label = styled.label`
    width: auto;
    font-size: 20px;
    text-decoration:  ${props => (props.todoChecked? "line-through" : "none")};
    text-decoration-style: double;


`

export const Options = styled.div`
    display: none;
    width: 20%;
    height: 100%;
    align-items: center;


`

export const Trash = styled(BsTrash)`
    width: 45px;
    height: 25px;

    :hover{
        cursor: pointer;
    }
`