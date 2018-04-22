import React from 'react'

export const WorkStats = ({ work }) => {

  return (
    <div>
      <h2>Project statistics</h2>
      <div className="work-stat-wr">
        <div className="work-stat-i">
          <p className="work-stat-title">{work.complexity}</p>
          <p className="work-stat-desc">Complexity</p>
        </div>
        <div className="work-stat-i">
          <p className="work-stat-title">{work.teamSize}</p>
          <p className="work-stat-desc">Team Size</p>
        </div>

        {/* it is possible to add other statistics here */}
        
      </div>
    </div>
  )
}
