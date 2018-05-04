import React from 'react'
import { Redirect } from 'react-router-dom'

import { PageTemplate } from './PageTemplate'
import { WorkStats } from './WorkStats'

export const WorkPage = ({
  works,
  facebookLink,
  linkedinLink,
  githubLink,
  email,
  pdfcv
  }) => {

  const workKey = window.location.href.split('/').pop()
  const filteredWorks = works.filter((element) => element.workId === workKey)
  if (filteredWorks.length === 0) {
    return <Redirect to='/error'/>
  }
  const work = filteredWorks[0]
  const stats = []
  if (work.complexity !== undefined) {
    stats.push({label:'Complexity', value:work.complexity})
  }
  if (work.teamSize !== undefined) {
    stats.push({label:'Team Size', value:work.teamSize})
  }

  function onImageClick() {

  }

  return (
    <PageTemplate facebookLink={facebookLink} linkedinLink={linkedinLink} githubLink={githubLink} email={email} pdfcv={pdfcv}>
      <a href="/#/works/" className="back"></a>
      <div className='content'>
        <h1>{work.title || "Work title"}</h1>
        {(work.dateStart || work.dateEnd) &&
          <p className="work-page-date">{work.dateStart + ((work.dateStart||work.dateEnd)?' — ':'') + work.dateEnd}</p>
        }
        {work.role &&
          <p className="work-page-role">Project role — {work.role}</p>
        }
        {work.url &&
          <p className="work-page-link">
            <a href={work.url} target="_blank">{work.url}</a>
          </p>
        }
        {(work.description && work.description.common) &&
          <p className="work-page-description">{work.description.common}</p>
        }
        {(work.description && work.description.tech) &&
          <p className="work-page-description">Tech details: {work.description.tech}</p>
        }
        {(work.description && work.description.benefits) &&
          <p className="work-page-description">Business benefits: {work.description.benefits}</p>
        }
        {work.images.map((url, index) => (
          <img className="work-page-img" key={index} src={url} onClick={onImageClick} />
        ))}
      </div>
      <div className="divider"></div>

      {(work.tags && work.tags.length > 0) &&
        <div>
          <div className="content">
            <h2>Tools and technologies used</h2>
            <div className="work-page-tag-cnt">
              {work.tags.map((tag, index) => (
                <span key={index} className="tag">{"#"+tag}</span>
              ))}
            </div>
          </div>
          <div className="divider"></div>
        </div>
      }

      {(stats && stats.length > 0) &&
        <div>
          <WorkStats header="Project statistics" stats={stats}/>
          <div className="divider"></div>
        </div>
      }

    </PageTemplate>
  )
}
