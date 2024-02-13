import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <>
      <ReactPlayer
        playing={true}
        controls={true}
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </>
  );
}

export default App;
