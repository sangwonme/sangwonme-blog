import * as React from 'react';
import { IconBaseProps } from 'react-icons';


import './PaperCardIcon.scss'

interface PaperCardIconProps {
    icon: React.ComponentType<IconBaseProps>;
    item: string;
    data: string;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}
  
const PaperCardIcon: React.FC<PaperCardIconProps> = ({ icon: IconComponent, item, data, setShowPopup }) => {

    // open link in new tab
    const openLink = () => {
        window.open(data, "_blank");
    };

    // copy Bibtex
    const copyBibtex: React.MouseEventHandler<HTMLDivElement> = (event) => {
        console.log('bibTex Clicked!')
        // Copy the data to the clipboard
        navigator.clipboard.writeText(data)
            .then(() => {
            // Show the popup
            setShowPopup(true);

            // Hide the popup after 2 seconds
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
        })
            .catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    };

    // onClickEvent
    const onClickEvent = (item=='bibtex') ? copyBibtex : (item=='award') ? ()=>{} : openLink;

    return (
        <>
        {
            data !== "" && 
            (
            <div className='papercard-icon-wrapper' onClick={onClickEvent}>
                <div className='papercard-icon-icon'><IconComponent className='fa-icon'/></div>
                <p className='papercard-icon-desc'>{item==='award'? data : item}</p>
            </div>
            )
        }
        </>
    );
}

export default PaperCardIcon;

  