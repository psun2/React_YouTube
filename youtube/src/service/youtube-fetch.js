class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${this.key}`,
        this.getRequestOptions,
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  };

  search = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${query}&key=${this.key}`,
        this.getRequestOptions,
      );
      const result = await response.json();
      return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  };
}

export default YoutubeFetch;
