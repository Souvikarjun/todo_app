import React from 'react';
import { buttonProps } from '../types/types';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = ({type, text, onClick, actionButton, bgColor, ...props} : buttonProps ) => {
  return (
    <div>
        <button onClick={onClick} type={type} className= {clsx(
            actionButton && "text-whgite hover:bg-blue-800 font-medium founded-lg text-sm px-5 mb-5 focus:outline-none",
            `${bgColor} hover:${bgColor} font-medium founded-lg text-sm px-5 mb-5 focus:outline-none`
        )}>
            {text}
        </button>
    </div>
  )
}
export default Button