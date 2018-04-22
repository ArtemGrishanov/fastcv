import React from 'react'
import { Redirect } from 'react-router-dom'

import { PageTemplate } from './PageTemplate'
import { WorkStats } from './WorkStats'

export const WorkPage = ({works}) => {

  const workKey = window.location.href.split('/').pop()
  const filteredWorks = works.filter((element) => element.workId === workKey)
  if (filteredWorks.length === 0) {
    return <Redirect to='/error'/>
  }
  const work = filteredWorks[0]

  function onImageClick() {

  }

  return (
    <PageTemplate>
      {/*<h1>Specific work {workKey}</h1>*/}
      <div className='content'>
        <h1>{work.title}</h1>
        <p className="work-page-date">{work.dateStart + ' — ' + work.dateEnd}</p>
        <p className="work-page-role">Project role — {work.role}</p>
        <p className="work-page-description">{work.description.common}</p>
        {work.images.map((url, index) => (
          <img className="work-page-img" key={index} src={url} onClick={onImageClick} />
        ))}
      </div>
      <div className="divider"></div>
      <div className="content">
      <h2>Tools and technologies used</h2>
      <div className="work-page-tag-cnt">
        {work.tags.map((tag, index) => (
          <span key={index} className="tag">{"#"+tag}</span>
        ))}
      </div>
      </div>
      <div className="divider"></div>
      <WorkStats work={work}/>
      <div className="divider"></div>
    </PageTemplate>
  )
}
