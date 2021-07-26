import "aos/dist/aos.css"
import "react-lazy-load-image-component/src/effects/blur.css"
import "./scss/react-images.scss"
import "./scss/slick-slider.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {
  Fluid as FluidLayout,
  Main as MainLayout,
} from "./layouts"
import { Route, Router, Switch } from "react-router-dom"

//import AppBar from "./components/PrimarySearchAppBar"
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword"
import Login from "./components/auth/Login/Login"
import React from "react"
import Signup from "./components/auth/Signup/Signup"
import WithLayout from "./WithLayout"
import { createBrowserHistory } from "history"

const browserHistory = createBrowserHistory()

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path="/"
          render={(matchProps) => (
            <WithLayout
              {...matchProps}
              component={Signup}
              layout={MainLayout}
            />
          )}
        />
        <Route
          exact
          path="/page-forgot-password"
          render={(matchProps) => (
            <WithLayout
              {...matchProps}
              component={ForgotPassword}
              layout={FluidLayout}
            />
          )}
        />
        <Route
          exact
          path="/page-login"
          render={(matchProps) => (
            <WithLayout
              {...matchProps}
              component={Login}
              layout={FluidLayout}
            />
          )}
        />
        <Route
          exact
          path="/page-signup"
          render={(matchProps) => (
            <WithLayout
              {...matchProps}
              component={Signup}
              layout={FluidLayout}
            />
          )}
        />
      </Switch>
    </Router>
  )
}

export default App
