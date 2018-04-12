import React from 'react';
import { MainMenu } from './MainMenu.js';

export const PageTemplate = ({children}) =>
  <div className='page'>
    <MainMenu />
    {children}
  </div>
