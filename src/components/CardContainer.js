import React from 'react'
import { WorkCard } from './WorkCard'

export const CardContainer = ({works, onWorkClick}) =>
  <div className="card-container">
    {works.map((work, index) => (
      <WorkCard key={index} {...work} onClick={() => onWorkClick(index)} />
    ))}
  </div>
