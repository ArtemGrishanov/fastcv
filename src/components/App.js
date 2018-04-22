import React from 'react'
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'

import {
  Home,
  About,
  Works,
  Error
} from './pages'
import { WorkPage } from './WorkPage'
import { works } from '../works'


const App = () => (
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" render={(props) =>
          <Works works={works} />
        } />
        <Route path="/work/" render={(props) =>
          <WorkPage works={works} />
        } />
        <Route component={Error} />
      </Switch>
    </div>
  </HashRouter>
)

export default App
