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

  const style = {
    heroStyle: {
      backgroundImage: `url('/images/gospel.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };
  useEffect(() => {
    const storedVideoData = localStorage.getItem("sermonVideos");
    if (storedVideoData) {
      setVideoData(JSON.parse(storedVideoData));
      setLoading(false);
    } else {
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
            localStorage.setItem("sermonVideos", JSON.stringify(data.items));
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
    }
  }, []);
  return (
    <>
      <div className="heading-container" style={style.heroStyle}>
        <h3>Sermon Videos</h3>
      </div>
      <div className="entireSermon-container">
        <div className="container floatedContainer">
          <div className="clearfix">
            <img
              className="bibleImage col-md-6 float-md-end mb-3 "
              src="/images/bible.jpg"
            />
            <p>
              Welcome to our Sermon Videos section, where you can experience the
              inspiring and uplifting messages delivered by our dedicated
              pastors and evangelists.
            </p>
            <p>
              Our collection of sermon videos offers a valuable resource for
              both our congregation and visitors seeking spiritual guidance,
              inspiration, and a deeper understanding of faith.
            </p>
            <p>
              Our sermon videos cover a wide range of topics, including faith,
              hope, love, forgiveness, and living a purposeful life according to
              the Christian faith. Whether you're seeking inspiration, looking
              for answers to life's questions, or simply want to grow in your
              faith journey, our collection of sermons is a valuable resource.
            </p>

            <h5>What to Expect:</h5>
            <ul>
              <li>
                <strong>Engaging Sermons:</strong>Dive into a diverse range of
                thought-provoking and heartfelt sermons that cover a variety of
                topics, from scripture interpretation to life application.
              </li>
              <li>
                <strong>Spiritual Growth:</strong> Our sermons are designed to
                nurture your spiritual growth and provide insight into the
                teachings of Jesus Christ.
              </li>
            </ul>
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
    </>
  );
}
