import React, { useState } from "react";
import { Video } from "./types";
import mediaJSON from "./data/videos.json";
import Playlist from "./components/Playlist/Playlist";
import ReactPlayer from "react-player";

// Playlist Component:

// Allow users to reorder videos in the playlist.

// NOTE: Feel free to use any external libraries for re-ordering.

const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app">
      <Playlist videos={mediaJSON.categories[0].videos} onVideoSelect={handleVideoSelect} />

      <ReactPlayer
        // playing={false}
        controls={true}
        url={selectedVideo?.sources[0]}
      />
    </div>
  );
};

export default App;
