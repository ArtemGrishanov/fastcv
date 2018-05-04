import React from 'react';
import { MainMenu } from './MainMenu'
import { Footer } from './Footer'

export const PageTemplate = ({children, facebookLink, linkedinLink, githubLink, email, pdfcv}) =>
  <div className='page'>
    <MainMenu pdfcv={pdfcv}/>
    <div className="page_content">
      <a href="//github.com/artemgrishanov/fastcv" target="_blank" className="want_this_label"></a>
      {children}
    </div>
    <Footer facebookLink={facebookLink} linkedinLink={linkedinLink} githubLink={githubLink} email={email}/>
  </div>
