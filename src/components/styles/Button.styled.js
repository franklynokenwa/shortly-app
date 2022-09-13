import styled from 'styled-components'


const Styledbutton = styled.button`
@import
    url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
    background-color: ${(props) => props.backgroundColor};
    height: 3rem;
    width: 6rem;
    border: none;
    border-radius: ${(props) => props.borderRadius};
    color: ${(props) => props.color};
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;

    :hover{
        background-color: ${(props) => props.hoverBackgroundColor};
        transition: 0.5s ease-in-out;
    }
    :active{
        background-color:green;
        
    }
    :visited{
        background-color:red;
        
    }
    

`

export default Styledbutton