import { Link, useParams } from "react-router-dom";
// import YouTube from "react-youtube";
import YoutubeVideos from "./YoutubeVideos";

export default function SermonVideos(props) {
    console.log(props.videoData)
  return (
    <>
      <div>
        <h3>Sermon Videos</h3>
        {props.videoData && props.videoData.length > 0 ? (
          <div>
          
            <ul>
              {props.videoData.map((video) => (
                <li key={video.id.videoId}>
                  <Link to={`/sermon/${video.id?.videoId}`}>
                    Watch Video {video.snippet.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <iframe
                height="390"
                width="640"
                src={`https://www.youtube.com/embed/${encodeURIComponent(props.videoData[0].id.videoId)}`}
                title="Youtube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <p>No video available</p>
        )}
      </div>
      <YoutubeVideos />
    </>
  );
}

