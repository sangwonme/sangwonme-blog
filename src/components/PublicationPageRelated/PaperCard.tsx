import * as React from 'react';

import { useState } from 'react';

import {FaQuoteLeft, FaAward, FaFilePdf, FaVideo, FaImage} from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';

import './PaperCard.scss';
import PaperCardIcon from './PaperCardIcon';

// react-icons
const itemToIcon = {
  'award': FaAward,
  'pdf': FaFilePdf,
  'bibtex': FaQuoteLeft,
  'video': FaVideo,
  'slide': FaImage
}

// props
interface PaperCardProps{
  title: string;
  authors: [string];
  venue: string;
  // icons
  award: string;
  pdf: string;
  bibtex: string;
  video: string;
  slide: string;
  // ---
  category: [string];
}

// papercard
const PaperCard = ({
  authors,
  bibtex,
  award,
  venue,
  video,
  slide,
  title,
  pdf,
  category
}:PaperCardProps) => {

  // show popup 
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const setShowPopupProp = showPopup ? ()=>{} : setShowPopup;

  console.log(showPopup);

  return (<>
    <div className='papercard-container'>
      <div className='papercard-thumbnail'>

      </div>
      <div className='papercard-info'>
        <div className='papercard-icons'>
          <PaperCardIcon setShowPopup={setShowPopupProp} icon={itemToIcon['award']} item='award' data={award}/>
          <PaperCardIcon setShowPopup={setShowPopupProp} icon={itemToIcon['pdf']} item='pdf' data={pdf}/>
          <PaperCardIcon setShowPopup={setShowPopupProp} icon={itemToIcon['bibtex']} item='bibtex' data={bibtex}/>
          <PaperCardIcon setShowPopup={setShowPopupProp} icon={itemToIcon['video']} item='video' data={video}/>
          <PaperCardIcon setShowPopup={setShowPopupProp} icon={itemToIcon['slide']} item='slide' data={slide}/>
        </div>
        <p className='papercard-title'>{title}</p>
        <p className='papercard-authors'>
          {
            authors.join("ㅤ")
          }
        </p>
        <p className='papercard-venue'>{venue}</p>
      </div>
    </div>
    {
      showPopup &&
      <div className='absolute-screen'>
        <div className='popup-container'>
          <div className='popup-background'>
            <FaCircleCheck className='fa-icon'/>
            <p className='popup-text'>BibTeX copied to clipboard..!</p>
          </div>
        </div>
      </div>

    }
  </>);
}

export default PaperCard