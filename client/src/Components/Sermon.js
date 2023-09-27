import { Link, useParams } from "react-router-dom";
// import YouTube from "react-youtube";

import { useEffect, useState } from "react";
import "./Sermon.css";

// const youtubeApiKey = "AIzaSyCbFWPl7aLdfz7M2jDKbdyfdNB-zbIVeQI";
const youtubeApiKey = process.env.REACT_APP_YOUTUBEAPIKEY;

// const channelId = "https://www.youtube.com/channel/UCODKoy1aD_GTYXqIpdLiXww";
// const channelId = "UCODKoy1aD_GTYXqIpdLiXww";
const channelId = process.env.REACT_APP_CHANNELID;
// const max = 10;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyCbFWPl7aLdfz7M2jDKbdyfdNB-zbIVeQI&channelId=UCODKoy1aD_GTYXqIpdLiXww&part=snippet,id&order=date&&max=3

export default function SermonVideos() {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams;
  console.log(videoData);
  useEffect(() => {
    try {
      fetch(
        `   https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${channelId}&part=snippet,id&order=date`
      )
        .then((response) => {
          if (!response) {
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const videoIds = data.items.map((item) => item.id.videoId);
          setVideoData(data.items);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);
  return (
    <div>
      <h3>Sermon Videos</h3>
      <div className="container floatedContainer">
        <div className="clearfix">
          <img
            className="bibleImage col-md-6 float-md-end mb-3 "
            src="/images/bible.jpg"
          />
          <p>
            Congregation believes, teaches, and confesses Jesus Christ as Lord
            and S everything was made, and through whose life, death, and
            resurrection God fashions a new creation and believes that salvatio
          </p>
          <p>
            Congregation believes, teaches, and confesses Jesus Christ as Lord
            and Jesus Christ as Lord and Savior, through whom everything was
            made, and through whose life, death, and resurrection God fashions a
            new creation and believes that salvatio
          </p>
          <p>
            Congregation believes, teaches, and confesses Jesus Christ as Lord
            and Savior, through whom everything was made, and through whose
            life, death, and resurrection God fashions a new creation and
            believes that salvation is by grace through faith alone. This
            Congregation believes, teaches, and confesses Jesus Christ as Lord
            and Savior, through whom everything was made, and through whose
            life, death, and resurrection God fashions a new creation and
            believes that salvatio
          </p>
        </div>
      </div>
      {loading ? (
        <div className="spinner-border text-primaary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        videoData.length > 0 && (
          <div className="container row videoContainer">
            {videoData.map((video) => (
              <div className="col-lg-4 col-md-6 col-ms-auto videoBox">
                <iframe
                  height="200"
                  width="300"
                  src={`https://www.youtube.com/embed/${encodeURIComponent(
                    video.id.videoId
                  )}`}
                  title="Youtube video player"
                  allowFullScreen
                ></iframe>
                <p>{video.snippet.description}</p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
