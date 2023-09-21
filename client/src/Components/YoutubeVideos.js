import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SermonVideos from "./Sermon";

const youtubeApiKey = "AIzaSyCbFWPl7aLdfz7M2jDKbdyfdNB-zbIVeQI";

// const channelId = "https://www.youtube.com/channel/UCODKoy1aD_GTYXqIpdLiXww";
const channelId = "UCODKoy1aD_GTYXqIpdLiXww";
const max = 10;




  // https://www.googleapis.com/youtube/v3/search?key=AIzaSyCbFWPl7aLdfz7M2jDKbdyfdNB-zbIVeQI&channelId=UCODKoy1aD_GTYXqIpdLiXww&part=snippet,id&order=date&&max=3

  

export default function YoutubeVideos() {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams;

  useEffect(() => {
    try {
      fetch(
        `   https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${channelId}&part=snippet,id&order=date&max=${max}`
      )
        .then((response) => {
          if (!response) {
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data)
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
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h3>Vidios</h3>
      <ul>
        {videoData.map((video) => (
          <li key={video.id.videoId}><Link>{video.snippet.title}</Link></li>
        ))}
      </ul>
      
    </div>
   
  );
}
