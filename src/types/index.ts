export interface Video {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

export interface VideoItemProps {
  video: Video;
  onSelect: (video: Video) => void;
}
