import styled from 'styled-components'

const StyledDetailsItemSection = styled.div`
    width: 19rem;
    background-color: white;
    padding: 2rem;
    margin-top: 4rem;
    border-radius: 10px;


    aside{
        width: 5rem;
        height: 5rem;
        border-radius: 80%;
        background-color: #3a3052;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -4rem;
        margin-bottom: -3rem;
    }

    div{
        width: 30rem;
    }

    div > h1{
        font-size: 1.5rem;
        color: black;
    }
    div > p{
        width: 19rem;
        font-size: 1rem;
        margin-top: -0.5rem;

    }
    @media screen and (max-width:768px){
        text-align: center;
        z-index: -0;

        aside{
            margin: 0 auto;
            width: 7rem;
            height: 7rem;
            top: -5rem;
        }
        div h1{
            width: 18rem;
            margin-top: -2rem;
        }
        div p{
            width: 19rem;
        }
                
    }
    @media screen and (max-width:500px){
        aside{
            margin: 0 auto;
            width: 7rem;
            height: 7rem;
            top: -5rem;
        }
                
    }
    @media screen and (max-width:414px){
        
    }
    @media screen and (max-width:375px){
        width: 18rem;
    }
    @media screen and (max-width:320px){
        width: 14rem;
        
        div h1{
            width: 14rem;
            margin-top: -2rem;
        }
        div p{
            width: 15.5rem;
        }
    }

`

export default StyledDetailsItemSection