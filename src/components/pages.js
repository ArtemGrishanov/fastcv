import React from 'react'
import { PageTemplate } from './PageTemplate'
import { TagCloud } from './TagCloud'
import { CardContainer } from './CardContainer'
import { WorkCard } from './WorkCard'
import { FilteredWorkCardsList } from '../containers/FilteredWorkCardsList'

export const Home = () =>
  <PageTemplate>
    <section className="home">
      <h1>Home page</h1>
    </section>
  </PageTemplate>

export const About = () =>
  <PageTemplate>
    <section className="about">
      <h1>About the Company</h1>
    </section>
  </PageTemplate>

export const Works = () =>
  <PageTemplate>
    <section className="works">
      <h1>Works</h1>
      <TagCloud>
      </TagCloud>
      <FilteredWorkCardsList>
        {
        //<CardContainer>
            // <WorkCard img="https://www.travelgayeurope.com/wp-content/uploads/2017/02/Gay-RIGA-City-Guide.jpg" title="New logo for the City of Riga" description="Description of the project, description description description description description description description description 123"/>
            // <WorkCard img="https://d1x3cbuht6sy0f.cloudfront.net/sales/43260/afd21695_994d_48f7_84b9_2d9b4072a696.jpg" title="Riga startup contest 2017"/>
        //</CardContainer>
        }
      </FilteredWorkCardsList>
    </section>
  </PageTemplate>

export const Error = () =>
  <PageTemplate>
    <section className="error">
      <h1>Not Found</h1>
    </section>
  </PageTemplate>
