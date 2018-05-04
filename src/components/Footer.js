import React from 'react'

export const Footer = ({ linkedinLink, facebookLink, githubLink, email }) => {
  return (
    <div className="footer">
      <h3>Want me to save the world?</h3>
      {email &&
        <p>{email}</p>
      }
      <div className="s-icon_cnt">
        {linkedinLink &&
          <a href={linkedinLink} target="_blank" className="s-icon __linkedin"></a>
        }
        {facebookLink &&
          <a href={facebookLink} target="_blank" className="s-icon __facebook"></a>
        }
        {githubLink &&
          <a href={githubLink} target="_blank" className="s-icon __github"></a>
        }
      </div>
    </div>
  )
}
