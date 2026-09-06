import { useState } from 'react';

function ImageUpload() {
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
    </div>
  );
}

export default ImageUpload;