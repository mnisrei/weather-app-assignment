import React from 'react'
function Button({ color, width, height, text, bgColor, fontSize, fontWeight, onClick,margin }) {
    return (
        <button
            className='buttonStyled'
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: color,
                width: width,
                height: height,
                fontSize: fontSize,
                fontWeight: fontWeight,
                margin: margin
            }}>
            {text}
        </button >
    )
}

export default Button;
