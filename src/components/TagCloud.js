import React from 'react'
import { Tag } from './Tag';

export const TagCloud = ({ tags }) =>
  <div className="tag-cloud">
    {tags.map((t, i) =>
      <Tag key={i} text={t}/>
    )}
  </div>
