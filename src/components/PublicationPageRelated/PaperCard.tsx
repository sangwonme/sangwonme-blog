import * as React from 'react';

import {FaQuoteLeft, FaAward, FaFilePdf, FaVideo, FaImage} from 'react-icons/fa';

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

  return (<>
    <div className='papercard-container'>
      <div className='papercard-thumbnail'>

      </div>
      <div className='papercard-info'>
        <div className='papercard-icons'>
          <PaperCardIcon icon={itemToIcon['award']} item='award' data={award}/>
          <PaperCardIcon icon={itemToIcon['pdf']} item='pdf' data={pdf}/>
          <PaperCardIcon icon={itemToIcon['bibtex']} item='bibtex' data={bibtex}/>
          <PaperCardIcon icon={itemToIcon['video']} item='video' data={video}/>
          <PaperCardIcon icon={itemToIcon['slide']} item='slide' data={slide}/>
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
  </>);
}

export default PaperCard