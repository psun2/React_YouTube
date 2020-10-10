// fetch vs axios

// axios => 모든 브라우저에서 호환이 됩니다.
// 파일을 json으로 변환하지 않게 변환된 json을 반환합니다.
// params 가 url 이 아니여서 상대적으로 가독성에 좋습니다.

class youtubeAxios {
  constructor(httpClient) {
    this.client = httpClient;
  }

  mostPopular = async () => {
    const response = await this.client('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 10,
      },
    });

    return response.data.items;
  };

  search = async (query) => {
    const response = await this.client('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        q: query,
      },
    });

    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  };
}
export default youtubeAxios;
