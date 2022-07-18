import {InputType} from "../../types"

import "./Input.css"

function Input({
    primary = true ,
    placeHolder = "" ,
    onChange = () => console.log("btn clicked!")
    } :  InputType){

    const mode = primary ? "input--primary" : "input--secondary" 
    return(
        <input 
            type="text"
            className= {`input ${mode}`}
            placeholder={placeHolder}
            onChange = {onChange}
        />
    )
}

export default Input ; 