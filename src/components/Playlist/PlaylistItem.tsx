import React from "react";
import { VideoItemProps } from "../../types";

const PlaylistItem: React.FC<VideoItemProps> = ({ video, onSelect }) => {
  return (
    <div className="playlist-item" onClick={() => onSelect(video)}>
      <img src={video.thumb} alt={video.title} className="playlist-item-thumb" />
      <div className="playlist-item-info">
        <h3 className="playlist-item-title">{video.title}</h3>
        <p className="playlist-item-subtitle">{video.subtitle}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
