import React from 'react'
import Styledbutton from './styles/Button.styled'

const Button = (props) => {
    return (
        <Styledbutton 
            backgroundColor={props.backgroundColor}
            borderRadius={props.borderRadius}
            hoverBackgroundColor={props.hoverBackgroundColor}
            color={props.color}
            type={props.type}
            onClick={props.onClick}
            >
            {props.name}
        </Styledbutton>
    )
}

export default Button
