import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

const App = ({ youTube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selecteVideo = (video) => {
    setSelectedVideo(video);
  };

  // header 에 전달되는 props으로서, 한번 생성되면 더이상 생성될
  // 필요가 없습니다. 그러므로 useCallback 으로 디펜던시는 빈 배열을 해줍니다.
  // useCallback => 한번 생성되면 메모리상에 계속 보관합니다.
  // 메모리에 많은 영향이 갈 수 있으므로, 항상 쓰는 것보다 꼭 써야 할때만 사용 하 도록 합니다.
  const search = useCallback(
    (query) => {
      youTube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youTube],
  );

  useEffect(() => {
    youTube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youTube]);

  // ./src/app.jsx Line 28:6:  React Hook useEffect has a missing dependency: 'youTube'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

  // console.log(selectedVideo ? 'list' : 'grid');

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selecteVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
