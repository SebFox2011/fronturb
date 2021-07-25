import React from "react"
import  Signup  from "./Signup"

export default {
  title: "Authentification/Signup",
  component: Signup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = (args) => <Signup {...args} />
export const Primary = Template.bind({})