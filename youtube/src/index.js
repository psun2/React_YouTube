import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import YoutubeFetch from './service/Youtube-fetch';
import axios from 'axios';
import YoutubeAxios from './service/youtube-axios';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
}).get;

// const youTube = new YoutubeFetch(process.env.REACT_APP_YOUTUBE_API_KEY);
const youTube = new YoutubeAxios(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App youTube={youTube} />
  </React.StrictMode>,
  document.getElementById('root'),
);
