import styled from 'styled-components'

const StyledDetailsSection = styled.section`
    background-color: rgba(240,241,246,255);
    padding-bottom: 18rem;
    padding-top: 6rem;
    padding-left: 4rem;
    padding-right: 4rem;

    section{
        width: 50rem;
        margin: 5rem auto;
        text-align: center;
    }
    section > h1{
        color: black;
        font-size: 3rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
    }
    section > p{
        width: 38rem;
        margin: 0 auto;
        font-size: 1.3rem;
        font-weight: 500;

    }
    hr{
        background-color: hsl(180, 66%, 45%);
        height: 0.5rem;
        width: 26.7rem;
        border: none;
        position: relative;
        top: 16rem;
    }

    @media screen and (max-width:768px){
        margin-top: 2rem;
        section{
            text-align: center;
            width: 40rem;
            margin-top: 22rem;
            
        }
        section p{
            width: 28rem;
        }
        hr{
            transform: rotate(90deg);
            top: 37rem;
            width: 58rem;
            left: -9rem;
        }
                
    }
    @media screen and (max-width:500px){
        margin-top: 3rem;
        section{
            width: 27rem;
            position: relative;
            left: -2rem;
        }
        section h1{
            font-size: 2rem;
        }
        hr{
            left: -17.2rem;
        }
                        
    }
    @media screen and (max-width:414px){
        section{
            width: 25rem;
            position: relative;
            left: -3rem;
        }
        section h1{
            font-size: 2rem;
        }
        section p{
            width: 24rem;
            font-size: 1.2rem;
        }
        hr{
            left: -19.99rem;
        }
    }
    @media screen and (max-width:375px){
        section{
            width: 22rem;
        
        }
        section h1{
            font-size: 2rem;
        }
        section p{
            width: 22rem;
        }
        hr{
            left: -21.2rem;
        }
    }
    @media screen and (max-width:320px){
        section{
            width: 21rem;
        }
        section h1{
            font-size: 1.7rem;
            width: 18rem;
        } 
        section p{
            width: 20rem;
            font-size: 1rem;
            position: relative;
            left: -1rem;
        }
        hr{
            left: -22.9rem;
        }
    }

`

export default StyledDetailsSection

