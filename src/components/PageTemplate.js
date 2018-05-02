import React from 'react';
import { MainMenu } from './MainMenu'
import { Footer } from './Footer'

export const PageTemplate = ({children}) =>
  <div className='page'>
    <MainMenu />
    <div className="page_content">
      <a href="//github.com/artemgrishanov/fastcv" target="_blank" className="want_this_label"></a>
      {children}
    </div>
    <Footer />
  </div>
