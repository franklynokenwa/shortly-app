import styled from 'styled-components'

const StyledShortenedLink = styled.div`
    
    background-color: white;
    border-radius: 10px;
    margin-top: 1rem;
    margin-bottom: 8rem;
    width: 58rem;
    padding:0 2rem;
    position: relative;
    left: -1rem;

    div{
        display: flex;
        justify-content: space-between;
    }
    p{
        padding-right: 2rem;
        color: hsl(255, 11%, 22%);
    }
    #fullLink{
        color: hsl(180, 66%, 49%);
    }
    Button{
        margin-top: 0.5rem;
        position: relative;
        left: 1rem;
    }

    @media screen and (max-width:768px){
        display: flex;
        width: 36rem;
        flex-direction: row;

        div{
            flex-direction: column;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        .container-original{
            border-bottom: 1px solid black;
            padding-bottom: 1rem;
        }
        #fullLink{
            margin-top: 0;
        }

        Button{
            width: 37rem;
            height: 4rem;
            left: -0.5rem;
            margin-top: -3rem;
        }
                
    }
    @media screen and (max-width:500px){
        width: 23rem;
        Button{
            width: 24.5rem;
        }
                
    }
    @media screen and (max-width:414px){
        width: 18rem;
        Button{
            width: 19.5rem;
        }
    }
    @media screen and (max-width:375px){
        width: 16rem;
        Button{
            width: 17.5rem;
        }
    }
    @media screen and (max-width:320px){
        width: 12.5rem;
        Button{
            width: 14.5rem;
        }
    }
    
    

`
export default StyledShortenedLink;