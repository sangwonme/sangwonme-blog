import * as React from 'react';

import './DividerTitle.scss';

type Props = {
    children: React.ReactNode;
};

const DividerTitle = ({children} : Props) => {
    return (<>
        <div className='divider-wrapper'>
            <div className='divider-circle'></div>
            <p className='divider-title'>{children}</p>
            <div className='divider-circle'></div>
        </div>
    </>);
}
 
export default DividerTitle;