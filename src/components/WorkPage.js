import React from 'react'
import { Redirect } from 'react-router-dom'

import { PageTemplate } from './PageTemplate'

export const WorkPage = ({works}) => {

  const workKey = window.location.href.split('/').pop()
  const work = works.filter((element) => element.key === workKey)

  if (work.length === 0) {
    return <Redirect to='/error'/>
  }

  return (
    <PageTemplate>
      <h1>Specific work {workKey}</h1>
    </PageTemplate>
  )
}
