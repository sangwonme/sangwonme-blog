import * as React from 'react';

import { IconBaseProps } from 'react-icons';

import './PaperCardIcon.scss'

interface PaperCardIconProps {
    icon: React.ComponentType<IconBaseProps>;
    item: string;
    data: string;
}

function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
const PaperCardIcon: React.FC<PaperCardIconProps> = ({ icon: IconComponent, item, data }) => {
return (
    <>
    {
        data !== "" && 
        (
        <div className='papercard-icon-wrapper'>
            <div className='papercard-icon-icon'><IconComponent className='fa-icon'/></div>
            <p className='papercard-icon-desc'>{item==='award'? capitalizeFirstLetter(data) : capitalizeFirstLetter(item)}</p>
        </div>
        )
    }
    </>
);
}

export default PaperCardIcon;

  