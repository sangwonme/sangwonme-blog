import * as React from 'react';

import './SectionTitle.scss';

type Props = {
    children: React.ReactNode;
};

const SectionTitle = ({children} : Props) => {
    return (<>
        <p className='section-title'> {children} </p>
    </>);
}
 
export default SectionTitle;