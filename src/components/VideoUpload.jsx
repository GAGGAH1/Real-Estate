import { useEffect, useState } from 'react';

const VideoUpload = () => {
  const [widgetReady, setWidgetReady] = useState(false);
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    // Load Cloudinary Upload Widget script
    const script = document.createElement('script');
    script.src = 'https://widget.cloudinary.com/v1/cloudinary-core.js';
    script.async = true;
    script.onload = () => {
      setWidgetReady(true);
    };
    document.body.appendChild(script);
  }, []);

  const handleUploadClick = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        resourceType: 'video',
        maxFileSize: 100000000, // 100MB
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('✅ Video uploaded:', result.info);
          alert('✅ Video uploaded successfully!');
        }
      }
    );
  };

  return (
    <div className="col-span-1 sm:col-span-2 md:col-span-3 w-full">
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">📹 Upload Property Video</h3>
        
        <button 
          onClick={handleUploadClick}
          disabled={!widgetReady}
          className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition text-lg"
        >
          {widgetReady ? '☁️ Click to Upload Video' : '⏳ Loading...'}
        </button>

        <p className="text-sm text-gray-600 mt-3">
          • Videos up to 100MB
          • Direct to Cloudinary (no server needed)
          • Auto-optimized for web
        </p>
      </div>
    </div>
  );
};

export default VideoUpload;