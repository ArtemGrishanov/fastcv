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

export const Me = () =>
  <PageTemplate>
    <section className="me">
      <h1>Artem Grishanov</h1>
    </section>
  </PageTemplate>

export const Works = ({works, tags}) =>
  <PageTemplate>
    <section className="works">
      <h1>Works</h1>
      <TagCloud tags={tags}>
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
