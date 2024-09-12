import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import fabric from 'fabric'; // Correct way to import fabric

const ImageCropper = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const canvasRef = useRef(null); // Reference for fabric canvas

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const createHeartShape = () => {
    const canvas = new fabric.Canvas(canvasRef.current); // Create a new fabric canvas
    const heart = new fabric.Path('M 272 408 C 118 258 150 78 272 258 C 394 78 426 258 272 408 Z', {
      fill: 'red',
      left: 100,
      top: 100,
    });
    canvas.add(heart);
  };

  return (
    <div>
      <h3>Upload and Crop Image</h3>
      <input type="file" onChange={handleImageUpload} />
      {selectedImage && (
        <ReactCrop
          src={selectedImage}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
        />
      )}
      <div>
        <h3>Custom Shapes:</h3>
        <button onClick={createHeartShape}>Heart Shape</button>
      </div>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
};

export default ImageCropper;
