import { useState } from "react";
import download from "downloadjs";

const MediaDownloader = () => {
  const [mediaLink, setMediaLink] = useState("");

  const handleInputChange = (e) => {
    setMediaLink(e.target.value);
  };

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch media");
      }

      const blob = await response.blob();
      const fileName = url.split("/").pop(); // Optional: Get the file name from the URL
      download(blob, fileName); // Triggers the download
    } catch (error) {
      console.error("Error downloading media:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDownload(mediaLink);
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Download Media by Pasting the Link
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Simply paste the URL of the media you want to download and press
          "Download"!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="url"
              id="media-link"
              name="media-link"
              value={mediaLink}
              onChange={handleInputChange}
              placeholder="Paste your media link here"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MediaDownloader;
