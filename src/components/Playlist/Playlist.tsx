import React from "react";
import { Video } from "../../types";
import PlaylistItem from "./PlaylistItem";

interface PlaylistProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ videos, onVideoSelect }) => {
  return (
    <div className="playlist">
      {videos.map((video, index) => (
        <PlaylistItem key={index} video={video} onSelect={onVideoSelect} />
      ))}
    </div>
  );
};

export default Playlist;
