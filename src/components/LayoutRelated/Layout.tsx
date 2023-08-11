import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

import './Layout.scss';
import AboutMe from '../HomePageRelated/AboutMe';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Header/>
      <main>
        <article>
          {title ? <h1 className='layout-title'>{title.toUpperCase()}</h1> : <AboutMe/>}
          <div className='layout-content'>
            {children}
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}

export default Layout;
