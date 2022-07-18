// import  { pipe} from  "lodash/fp" ; 

import {pipe, curry} from "ramda"

const add  = (a:number , b : number , c : number) : number => a + b + c ; 

const add_curry = (a : number) => (b : number) => (c : number) => a + b + c ; 

// function composition  

// const str_upper : string = str.toUpperCase() ; 
// const wrap : string = "<div>" +  str_upper  + "</div>" ; 

const str = "Mohamed" ; 

const wrap = (str : string) => "<div>" +  str  + "</div>"
const toUpper = (str : string) => str.toUpperCase() ; 
// const addTitle = (title : string) =>  (str : string) =>  title + str
const  addTitle = (title : string , str : string) =>  title + str
// const curriedAddTitle = curry(addTitle) 

// const result = wrap(addTitle(toUpper(str))) ; 

const result = pipe(toUpper ,  curry(addTitle)( "D.") , wrap);
result(str);


export{}
