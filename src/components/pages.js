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

export const Works = ({works}) =>
  <PageTemplate>
    <section className="works">
      <h1>Works</h1>
      <TagCloud>
      </TagCloud>
      <CardContainer works={works}>
      </CardContainer>
    </section>
  </PageTemplate>

export const Error = () =>
  <PageTemplate>
    <section className="error">
      <h1>Not Found</h1>
    </section>
  </PageTemplate>
