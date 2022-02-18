import Home from './Components/Home';
import images from './data/images.json';
import './css/styles.css';

function App() {
  const shuffleImages = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempArr = arr[i];
      arr[i] = arr[j];
      arr[j] = tempArr;
    }
  };
  shuffleImages(images);

  const slicedImages = images.slice(0, 5);
  const slicedImagesMobile = images.slice(0, 3);

  return (
    <div className="App">
      <Home
        slicedImages={slicedImages}
        slicedImagesMobile={slicedImagesMobile}
      />
    </div>
  );
}

export default App;
