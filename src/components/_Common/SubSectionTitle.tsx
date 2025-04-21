import * as React from 'react';

import './SubSectionTitle.scss';

type Props = {
    children: React.ReactNode;
};

const SubSectionTitle = ({children} : Props) => {
    return (
      <div className='subsection-container'>
          <div className='subsection-square'/>
          <p className='subsection-title'> {children} </p>
      </div>
    );
}
 
export default SubSectionTitle;