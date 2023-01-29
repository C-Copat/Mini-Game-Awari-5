
import { useState } from 'react'
import styles from './CustomButton.css'

export default function CustomButton({style, label, clickFunction, children}) {

    const [buttonState,setButtonState] = useState('button--default')

    return(
        <div>

            <button
                onClick={clickFunction}
                className={`button ${style}`}
                > 
            {label}
            {children}
            </button>
        </div>
    )
}