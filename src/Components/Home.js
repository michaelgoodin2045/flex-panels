import React from 'react';
import ImageCard from './ImageCard';
import MediaQuery from 'react-responsive';

const Home = ({ slicedImages, slicedImagesMobile }) => {
  return (
    <div className="home">
      <MediaQuery maxWidth={739}>
        {slicedImagesMobile.map((sliced, index) => {
          return <ImageCard sliced={sliced} index={index} key={index} />;
        })}
      </MediaQuery>
      <MediaQuery minWidth={740}>
        {slicedImages.map((sliced, index) => {
          return <ImageCard sliced={sliced} index={index} key={index} />;
        })}
      </MediaQuery>
    </div>
  );
};

export default Home;
