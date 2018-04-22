import React from 'react';
import { MainMenu } from './MainMenu'
import { Footer } from './Footer'

export const PageTemplate = ({children}) =>
  <div className='page'>
    <MainMenu />
    {children}
    <Footer />
  </div>
