import React from 'react'

/**
  * @param {Array} stats {label, value}
  */
export const WorkStats = ({ header, stats }) => {

  return (
    <div>
      {header &&
        <h2>{header}</h2>
      }
      <div className="work-stat-wr">
        {stats.map((s, i) =>
          <div key={i} className="work-stat-i">
            <p className="work-stat-title">{s.value}</p>
            <p className="work-stat-desc">{s.label}</p>
          </div>
        )}
      </div>
    </div>
  )
}
