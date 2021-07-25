import Login from "./Login"
import React from "react"

export default {
  title: "Authentification/Login",
  component: Login,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = (args) => <Login {...args} />
export const Primary = Template.bind({})
