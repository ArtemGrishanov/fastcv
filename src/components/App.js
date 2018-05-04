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
import { ContactPage } from './ContactPage'
import { cv } from '../cv'


const App = ( {tags, selectedWorks} ) => (
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" render={(props) =>
          <Home name={cv.name}
            photo={cv.photoUrl}
            quote={cv.quote}
            about={cv.about}
            personalStats={cv.personalStats}
            selectedWorks={cv.selectedWorks}
            worksCount={cv.works.length}
            facebookLink={cv.facebook}
            linkedinLink={cv.linkedin}
            githubLink={cv.github}
            email={cv.email}
            pdfcv={cv.pdfcv}
          />
        } />
        {/*<Route path="/about" component={About} />*/}
        <Route path="/works" render={(props) =>
          <Works works={cv.works}
            tags={tags}
            facebookLink={cv.facebook}
            linkedinLink={cv.linkedin}
            githubLink={cv.github}
            email={cv.email}
            pdfcv={cv.pdfcv}
          />
        } />
        <Route path="/work/" render={(props) =>
          <WorkPage works={cv.works}
            facebookLink={cv.facebook}
            linkedinLink={cv.linkedin}
            githubLink={cv.github}
            email={cv.email}
            pdfcv={cv.pdfcv}
          />
        } />
        <Route path="/contacts/" render={(props) =>
          <ContactPage
            facebookLink={cv.facebook}
            linkedinLink={cv.linkedin}
            githubLink={cv.github}
            email={cv.email}
            pdfcv={cv.pdfcv}
            skype={cv.skype}
          />
        } />
        <Route render={(props) =>
          <Error pdfcv={cv.pdfcv}/>
        } />
      </Switch>
    </div>
  </HashRouter>
)

export default App
