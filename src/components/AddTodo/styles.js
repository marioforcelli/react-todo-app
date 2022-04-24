import styled from 'styled-components'

import { AiOutlinePlus } from 'react-icons/ai'

export const Container = styled.div`
    margin: 20px 0px 30px 0;
    height: 60px;
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: min(1200px, 85vw);
    border-radius: 20px;
    background-color: #66666E;
`

export const Form = styled.form`
    height: 100%;
    display: flex;

`

export const Input = styled.input `
    padding: 20px;
    outline: none;
    width: 94%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size: 24px;

    ::placeholder{
        color: #999999;
    }
    @media(max-width: 580px){
        width: 90%;
    }

`

export const SubmitBtn = styled(AiOutlinePlus)`
    fill: #E6E6E9;
    width: 30px;
    height: 30px;
    :hover{
        cursor: pointer;
    }


`

