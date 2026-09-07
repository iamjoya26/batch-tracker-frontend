import { useState } from 'react';

function ImageUpload({ onNext }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPG, JPEG, or PNG images are allowed.');
      e.target.value = ''; // reset the file input
      setPreviewUrl(null);
      return;
    }

    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleNext = () => {
    if (!previewUrl) {
      alert('Please choose a valid image before continuing.');
      return;
    }
    onNext();
  };

  return (
    <div>
      <p>Upload an image</p>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      {previewUrl && (
        <img src={previewUrl} alt="preview" width="200" />
      )}

      <div className="field-row">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default ImageUpload;