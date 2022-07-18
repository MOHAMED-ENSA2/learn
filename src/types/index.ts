
export interface BtnProps {
    primary ?: boolean ;
    background ?: string ; 
    size ?: "small" | "meduim" | "large" ;
    label ?: string ;
    onClick ?: () => void ; 
}


export interface InputType {
    primary ?: boolean ; 
    placeHolder ?: string ; 
    onChange ?: () => void; 
}

