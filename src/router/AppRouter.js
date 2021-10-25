import React from 'react'

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={ChatPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
