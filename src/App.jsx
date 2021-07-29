import "aos/dist/aos.css"
import "react-lazy-load-image-component/src/effects/blur.css"
import "./scss/react-images.scss"
import "./scss/slick-slider.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Redirect, Route, Router, Switch } from "react-router-dom"

import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword"
import Home from "./components/Home"
import Login from "./components/auth/Login/Login"
import { Main as MainLayout } from "./layouts"
import NotFound from "./components/NotFound/NotFound"
import React from "react"
import Signup from "./components/auth/Signup/Signup"
import WithLayout from "./WithLayout"
import { createBrowserHistory } from "history"
import { useSelector } from "react-redux"

const browserHistory = createBrowserHistory()

function App() {
  const loginState = useSelector((state) => state.currentUser.loginState)
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path="/"
          render={(matchProps) => (
            <WithLayout
              {...matchProps}
              component={loginState === "logged-in" ? Home : Login}
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
              layout={MainLayout}
            />
          )}
        />
        <Route
          exact
          path="/page-login"
          render={(matchProps) => (
            <WithLayout {...matchProps} component={Login} layout={MainLayout} />
          )}
        />
        <Route
          exact
          path="/page-signup"
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
          render={(matchProps) => (
            <WithLayout
              {...matchProps}
              component={NotFound}
              layout={MainLayout}
            />
          )}
        />
      </Switch>
    </Router>
  )
}

export default App
