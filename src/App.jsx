import "./App.css"

import { Route, Router, Switch } from "react-router-dom"

import FluidLayout from './layouts/Fluid'
//import AppBar from "./components/PrimarySearchAppBar"
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword"
import Login from "./components/auth/Login/Login"
import React from "react"
import Signup from "./components/auth/Signup/Signup"
import WithLayout from "./WithLayout"
import { createBrowserHistory } from "history"
import logo from "./turbine_dentaire.png"

const browserHistory = createBrowserHistory()

function App() {
  return (
    <div className="App">
      {/* <AppBar /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Login /> */}
      </header>
      <Router history={browserHistory}>
        <Switch>
          <Route
            exact
            path="/"
            render={(matchProps) => (
              <WithLayout
                {...matchProps}
                component={Signup}
                layout={FluidLayout}
              />
            )}
          />
          <Route
            exact
            path="/page-forgot-password"
            component={ForgotPassword}
          />
          <Route exact path="/page-login" component={Login} />
          <Route exact path="/page-signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
