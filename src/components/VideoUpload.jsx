import { useState, useEffect } from 'react';
// import axios from 'axios';

const VideoUpload = () => {
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  // Load videos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('uploadedVideos');
    if (stored) {
      setUploadedVideos(JSON.parse(stored));
    }
  }, []);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        alert('Video size should be less than 100MB');
        return;
      }
      setVideo(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid video file');
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    // Validate credentials first
    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      alert('❌ Missing Cloudinary credentials!\n\nPlease add these to your .env file:\nVITE_CLOUDINARY_CLOUD_NAME=your_cloud_name\nVITE_CLOUDINARY_UPLOAD_PRESET=your_preset');
      return;
    }

    if (!video) return;

    setLoading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', video);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('resource_type', 'video');

    try {
      console.log('Uploading to Cloudinary:', { CLOUD_NAME, UPLOAD_PRESET, videoName: video.name, videoSize: video.size });

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
        {
            method: 'POST',
            body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error?.message || `Upload failed with status ${response.status}`;
        console.error('Cloudinary error:', errorData);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Upload successful:', data);

      const newVideo = {
        id: data.public_id,
        name: video.name,
        url: data.secure_url,
        cloudinaryId: data.public_id,
        uploadedAt: new Date().toLocaleString(),
        size: (video.size / 1024 / 1024).toFixed(2) + ' MB',
        duration: data.duration
      };

      const updated = [newVideo, ...uploadedVideos];
      setUploadedVideos(updated);
      localStorage.setItem('uploadedVideos', JSON.stringify(updated));

      setVideo(null);
      setPreview(null);
      setUploadProgress(0);
      alert('✅ Video uploaded to Cloudinary successfully!');
    } catch (error) {
      console.error('Upload error details:', error);
      const errorMsg = error.message || 'Unknown error occurred';
      alert(`❌ Upload failed:\n${errorMsg}\n\nCheck browser console for more details.`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, cloudinaryId) => {
    // Note: Deleting from Cloudinary requires an API key on backend
    // For now, we'll just remove from local storage
    const updated = uploadedVideos.filter(v => v.id !== id);
    setUploadedVideos(updated);
    localStorage.setItem('uploadedVideos', JSON.stringify(updated));
    alert('Video removed from your list');
  };

  return (
    <div className="col-span-1 sm:col-span-2 md:col-span-3 w-full">
      {/* Upload Form */}
      <form onSubmit={handleUpload} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">📹 Upload Property Video to Cloud</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Select Video File
          </label>
          <input 
            type="file" 
            accept="video/*" 
            onChange={handleVideoChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
          />
          <p className="text-xs text-gray-500 mt-2">Max 100MB. Supported: MP4, WebM, Ogg</p>
        </div>

        {preview && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
            <video width="300" controls className="rounded-lg">
              <source src={preview} type="video/mp4" />
            </video>
          </div>
        )}

        {loading && (
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Uploading: {uploadProgress}%</p>
          </div>
        )}

        <button 
          type="submit" 
          disabled={!video || loading}
          className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition"
        >
          {loading ? `⏳ Uploading to Cloudinary (${uploadProgress}%)...` : '☁️ Upload to Cloudinary'}
        </button>
      </form>

      {/* Uploaded Videos List */}
      {uploadedVideos.length > 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">☁️ Cloudinary Videos ({uploadedVideos.length})</h3>
          <div className="space-y-4">
            {uploadedVideos.map((vid) => (
              <div key={vid.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{vid.name}</h4>
                    <p className="text-xs text-gray-500">
                      Size: {vid.size} | Uploaded: {vid.uploadedAt}
                      {vid.duration && ` | Duration: ${Math.round(vid.duration)}s`}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(vid.id, vid.cloudinaryId)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium ml-4"
                  >
                    🗑️ Remove
                  </button>
                </div>
                <video width="100%" controls className="rounded-lg">
                  <source src={vid.url} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;