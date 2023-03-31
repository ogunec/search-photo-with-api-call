
import searchImages from './components/Api';
import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div className="App">
      <SearchBar search={handleSubmit}/>
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
