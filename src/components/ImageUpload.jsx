import { useState } from 'react';

function ImageUpload({ onNext }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div>
      <p>Upload an image</p>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setPreviewUrl(URL.createObjectURL(file));
          }
        }}
      />
      {previewUrl && (
        <img src={previewUrl} alt="preview" width="200" />
      )}

      <div className="field-row">
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default ImageUpload;