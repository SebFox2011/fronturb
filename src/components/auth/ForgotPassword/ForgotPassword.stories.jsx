import  ForgotPassword  from "./ForgotPassword"
import React from "react"

export default {
  title: "Authentification/ForgotPassword",
  component: ForgotPassword,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = (args) => <ForgotPassword {...args} />
export const Primary = Template.bind({})