import styled from 'styled-components'
import boostBackgroundImage from '../../images/bg-boost-desktop.svg'

const StyledDiv = styled.div`
    text-align: center;
    background: url(${boostBackgroundImage}) no-repeat;
    background-color: hsl(257, 27%, 26%);
    padding: 3rem;
    color: white;

    Button{
        width: 8rem;
    }
    @media screen and (max-width:500px){
        h1{
            width: 28rem;   
            font-size:2rem;
            position: relative;
            left:-1rem
        }
    }
    @media screen and (max-width:414px){
        h1{
            width: 25rem;   
            left:-2rem
        }
    }
    @media screen and (max-width:375px){
        h1{
            font-size: 1.5rem;
            left:-3rem
        }
    }
    @media screen and (max-width:320px){
        h1{
            left:-5.3rem
        }
    }

`

export default StyledDiv