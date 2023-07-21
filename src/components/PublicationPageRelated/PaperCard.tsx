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
      <div className='papercard-thumbnail'></div>
      <div className='papercard-info'>
        <div className='papercard-icons'>
          <PaperCardIcon icon={itemToIcon['award']} item='award' data={award}/>
          <PaperCardIcon icon={itemToIcon['video']} item='video' data={video}/>
        </div>
        <p className='papercard-title'>{title}</p>
        {
          authors.map((author, i)=>(
            <p className='papercard-authors' key={i}>{author}</p>
          ))
        }
        <p className='papercard-venue'>{venue}</p>
      </div>
    </div>
  </>);
}

export default PaperCard