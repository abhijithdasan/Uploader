import React from 'react';
import './App.css';
import ImageCropper from './components/ImageCropper.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Upload and Crop</h1>
      </header>
      <ImageCropper />
    </div>
  );
}

export default App;
