import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button{
        font-family: 'Roboto', sans-serif;
        color: white;
    }

    html{
        height: 100%;
    }

    body{
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #000000;
    }

    #root{
        height: 100%;
    }
`