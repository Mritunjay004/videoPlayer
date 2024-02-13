// import React, { useState } from "react";
// import { Video } from "./types";
// import mediaJSON from "./data/videos.json";
// import Playlist from "./components/Playlist/Playlist";
// import ReactPlayer from "react-player";

// // Playlist Component:

// const App: React.FC = () => {
//   const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

//   const handleVideoSelect = (video: Video) => {
//     setSelectedVideo(video);
//   };

//   return (
//     <div className="app">
//       <Playlist videos={mediaJSON.categories[0].videos} onVideoSelect={handleVideoSelect} />

//       <ReactPlayer
//         // playing={false}
//         controls={true}
//         url={selectedVideo?.sources[0]}
//         light={selectedVideo?.thumb}
//       />
//     </div>
//   );
// };

// export default App;

// App.tsx
import React, { useState } from "react";
import Playlist from "./components/Playlist/Playlist";
import mediaJSON from "./data/videos.json";
import { Video } from "./types";
import { DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(mediaJSON.categories[0].videos);
  const [, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(videos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setVideos(items);
  };

  return (
    <div className="app">
      <Playlist videos={videos} onVideoSelect={handleVideoSelect} onDragEnd={onDragEnd} />
    </div>
  );
};

export default App;
