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

const App = () => (
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route component={Error} />
      </Switch>
    </div>
  </HashRouter>
)

export default App
