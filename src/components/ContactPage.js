import React from 'react'
import { Redirect } from 'react-router-dom'

import { PageTemplate } from './PageTemplate'

export const ContactPage = ({
  facebookLink,
  linkedinLink,
  githubLink,
  email,
  pdfcv,
  skype
  }) => {

  return (
    <PageTemplate facebookLink={facebookLink} linkedinLink={linkedinLink} githubLink={githubLink} email={email} pdfcv={pdfcv} skype={skype}>
      <div className='content'>
        <h1>Contacts</h1>
        <p className="text">Feel free to text me.</p>
        {skype &&
          <p className="text">Skype: {skype}</p>
        }
        {email &&
          <p className="text">Email: {email}</p>
        }
        {facebookLink &&
          <p className="text">Facebook: <a href={facebookLink} target="_blank" className="text">{facebookLink}</a></p>
        }
      </div>
    </PageTemplate>
  )
}
