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
import { cv } from '../cv'


const App = ( {tags, selectedWorks} ) => (
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" render={(props) =>
          <Home name={cv.name} photo={cv.photoUrl} quote={cv.quote} about={cv.about} personalStats={cv.personalStats} selectedWorks={cv.selectedWorks} worksCount={cv.works.length}/>
        } />
        {/*<Route path="/about" component={About} />*/}
        <Route path="/works" render={(props) =>
          <Works works={cv.works} tags={tags}/>
        } />
        <Route path="/work/" render={(props) =>
          <WorkPage works={cv.works} />
        } />
        <Route component={Error} />
      </Switch>
    </div>
  </HashRouter>
)

export default App
