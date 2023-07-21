import * as React from 'react';

import { IconBaseProps } from 'react-icons';

interface PaperCardIconProps {
    icon: React.ComponentType<IconBaseProps>;
    item: string;
    data: string;
  }
  
const PaperCardIcon: React.FC<PaperCardIconProps> = ({ icon: IconComponent, item, data }) => {
return (
    <>
    {
        data !== "" && 
        (
        <div className='papercard-icon-wrapper'>
            <div className='papercard-icon-item'><IconComponent /></div>
            <p className='papercard-icon-desc'>{item==='award'? data : item}</p>
        </div>
        )
    }
    </>
);
}

export default PaperCardIcon;

  