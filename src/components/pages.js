import React from 'react'
import { NavLink } from 'react-router-dom';

import { PageTemplate } from './PageTemplate'
import { TagCloud } from './TagCloud'
import { CardContainer } from './CardContainer'
import { WorkCard } from './WorkCard'
import { FilteredWorkCardsList } from '../containers/FilteredWorkCardsList'
import { Quote } from './Quote'
import { WorkStats } from './WorkStats'


export const Home = ({
  name,
  photo,
  quote,
  about,
  selectedWorks,
  personalStats,
  worksCount = 0,
  facebookLink,
  linkedinLink,
  githubLink,
  email,
  pdfcv
}) =>
  <PageTemplate facebookLink={facebookLink} linkedinLink={linkedinLink} githubLink={githubLink} email={email} pdfcv={pdfcv}>
    <section className="home">
      <div className="content">
        <h1>{name}</h1>
        <div className="avatar" style={{backgroundImage:"url("+photo+")"}}></div>
      </div>
      {quote &&
        <Quote text={quote}/>
      }
      <p className="about">{about}</p>
      <WorkStats stats={personalStats}/>
      <div className="divider"></div>
      {(selectedWorks && selectedWorks.length > 0) &&
        <div className="content">
          <h2>Some projects</h2>
          <div className="card-container">
            {selectedWorks.map((w, index) => (
              <WorkCard key={index} {...w} className="tag" />
            ))}
          </div>
          <div className="showall-btn-cnt">
            <NavLink to="works" className="btn">Show all {(worksCount < 11) ? worksCount: Math.floor(worksCount/10)*10+'+'} work{(worksCount > 1) ? 's': ''}</NavLink>
          </div>
        </div>
      }
      <div className="divider"></div>
    </section>
  </PageTemplate>

export const Works = ({
  works,
  tags,
  facebookLink,
  linkedinLink,
  githubLink,
  email,
  pdfcv
  }) =>
  <PageTemplate facebookLink={facebookLink} linkedinLink={linkedinLink} githubLink={githubLink} email={email} pdfcv={pdfcv}>
    <section className="works">
      <h1>Works</h1>
      <TagCloud tags={tags}>
      </TagCloud>
      <CardContainer works={works}>
      </CardContainer>
    </section>
  </PageTemplate>

export const Error = (
  facebookLink,
  linkedinLink,
  githubLink,
  email,
  pdfcv
  ) =>
  <PageTemplate facebookLink={facebookLink} linkedinLink={linkedinLink} githubLink={githubLink} email={email} pdfcv={pdfcv}>
    <section className="error">
      <h1>Not Found</h1>
    </section>
  </PageTemplate>
