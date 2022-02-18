import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

const ImageCard = ({ sliced, index }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [textToggle, setTextToggle] = useState(false);
  const cardToggle = () => {
    setCardOpen(!cardOpen);
    setTextToggle(!textToggle);
  };
  return (
    <div
      key={index}
      onClick={cardToggle}
      className={`card card${index} ${cardOpen ? 'open' : ''}`}
    >
      <MediaQuery maxWidth={739}>
        <img src={sliced.image} alt="" />
        <div className={`text-box ${textToggle ? 'open' : ''}`}>
          <p>{sliced.quote_begin}</p>
          <p>{sliced.quote_middle}</p>
          <p>{sliced.quote_end}</p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={740}>
        <img src={sliced.image} alt="" />
        <div className={`text-box ${textToggle ? 'open' : ''}`}>
          <p>{sliced.quote_begin}</p>
          <p>{sliced.quote_middle}</p>
          <p>{sliced.quote_end}</p>
        </div>
      </MediaQuery>
    </div>
  );
};

export default ImageCard;
/*

*/
