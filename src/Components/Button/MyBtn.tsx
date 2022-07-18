import {BtnProps} from "../../types"
import "./mybutton.css"

function Button({
    primary = false,
    background,
    label = "enter",
    size = "meduim",
    onClick = () => console.log("btn clicked!")
    } : BtnProps){

    const mode = primary ? "btn--primary" : "btn--secondary"
    return (
        <div 
            className={`btn ${mode} btn--${size}`}
            style = {{background}}
            onClick = {onClick}
        >
            {label}
        </div>
    )
}

export default Button 