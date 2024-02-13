// import React from "react";
// import { Video } from "../../types";
// import PlaylistItem from "./PlaylistItem";

// interface PlaylistProps {
//   videos: Video[];
//   onVideoSelect: (video: Video) => void;
// }

// const Playlist: React.FC<PlaylistProps> = ({ videos, onVideoSelect }) => {
//   return (
//     <div className="playlist">
//       {videos.map((video, index) => (
//         <PlaylistItem key={index} video={video} onSelect={onVideoSelect} />
//       ))}
//     </div>
//   );
// };

// export default Playlist;

// Playlist.tsx
import React from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import PlaylistItem from "./PlaylistItem";
import { Video } from "../../types";

interface PlaylistProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
  onDragEnd: (result: DropResult) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ videos, onVideoSelect, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="playlist">
        {provided => (
          <div className="playlist" {...provided.droppableProps} ref={provided.innerRef}>
            {videos.map((video, index) => (
              <Draggable key={video.thumb} draggableId={video.thumb} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <PlaylistItem video={video} onSelect={onVideoSelect} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Playlist;
