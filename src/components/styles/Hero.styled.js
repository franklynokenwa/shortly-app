import styled from 'styled-components'

const StyledHeroSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    padding: 0 4rem;

    div{
        margin-top: 1rem;
    }
    h1{
        font-size: 3.8rem;
        font-weight: 700; 
        width: 35rem;
        color:hsl(255, 11%, 22%)
    }
    p{
        width: 30rem;
        margin-top: -2rem;
        font-size: 1.2rem;
    }

    img{
        width: 40rem;
    }
    Button{
        width: 10rem;
    }

    @media screen and (max-width:768px){
        flex-direction: column-reverse;
                
    }
    @media screen and (max-width:500px){
        padding: 0 2rem;
        text-align: center;
        
        
        h1{
            margin-bottom: 3rem;
            width: 25.88rem;
            font-size:3rem;
        }
        p{
            position: relative;
            top: -2rem;
            font-size: 18px;
            width: 20rem;
            margin: 0 auto;
            margin-bottom: 1rem;
        }
                
    }
    @media screen and (max-width:414px){
        img{
            width: 34rem;
        }
        h1{
            font-size: 2rem;
            position: relative;
            left: -2rem;
        }
    }
    @media screen and (max-width:375px){
        img{
            width: 30rem;
        }
        h1{
            left: -3rem;
        }
    }
    @media screen and (max-width:320px){
        img{
            width: 27rem;
        }
        h1{
            left: -4rem;
            width: 24rem;
        }
        p{
            font-size:1rem;
            left: -1rem;
            width: 18rem;
        }
    }

`

export default StyledHeroSection