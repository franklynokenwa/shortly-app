import styled from 'styled-components'

const StlyedNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8rem;
    padding: 0 2rem;

    section{
        width: 100%;
        display: flex;
        
        justify-content: space-between;
    }

    nav{
        display: flex;
        justify-content: space-around;
        width: 50%;
        align-items: center;
    }

    a{
        text-decoration: none;
    }
    p{
        color:hsl(0, 0%, 75%);
        cursor: pointer;
    }
    p:hover{
        color:hsl(0, 0%, 49%);
    }

    img{
        width: 15rem;
        height: 5rem;
        padding-left: 1.2rem;
        margin-top: 1.5rem;
        cursor: pointer;
    }
    div{
        display:flex;
        width: 15rem;
        justify-content: space-evenly;
        align-items: center;
    }
    aside{
        display: none;
    }
    
    @media screen and (max-width:768px){
        flex-direction: column;
        width: 100%;
        img{
            /* width: 8rem; */
        }
        .sectionExpanded nav{
            background-color: gold;
            z-index: 1;
            flex-direction: column;
            display: block

        }
        .sectionClosed nav{
            display: block;
            background-color: black;
        }
        nav{
            flex-direction: column;

        }
        
        div{
            width: 100%;
            flex-direction: column;

        }
        /* .navHide{
            display: none;
        } */
        /* .navHide{
            background-color: green;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .navShow{
            background-color: red;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        } */
        aside{
            display: block;
            font-size: 5rem;
            z-index: 1;
            position: relative;
            top: -25rem;
            left: 40rem;
            width: 4rem;
            cursor: pointer;
            background-color: red;
            
        }
        
    }
`

export default StlyedNavBar