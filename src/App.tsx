import VideoFeed from './VideoFeed';

function App() {
    return (
        <div>
            <VideoFeed src="http://localhost:8083/stream/1f7dd9e0-0314-408c-a612-eaf3ce45664a/channel/0/hls/live/index.m3u8" />
        </div>
    );
}

export default App;
