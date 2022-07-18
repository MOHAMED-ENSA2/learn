import {Input} from "../Components";
import {ComponentStory, ComponentMeta} from "@storybook/react"

export default {
    title  : "Test/Input" , 
    component : Input
} as ComponentMeta<typeof Input>;


const Template : ComponentStory<typeof Input> = (args) => <Input {...args} /> ; 

export const primary = Template.bind({}) ; 
primary.args = {
    primary : true , 
    placeHolder : "primary"
}

export const secondary = Template.bind({}) ; 

secondary.args = {
    primary : false , 
    placeHolder : "secondary"
}

