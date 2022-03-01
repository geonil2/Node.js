export default class TweetService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/tweets${query}`, {
      method: 'GET',
      headers: this.getHeader(),
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/tweets`, {
      method: 'POST',
      headers: this.getHeader(),
      body: JSON.stringify({ text, username: 'geonil', name: 'Geonil' }),
    });
  }

  async deleteTweet(tweetId) {
    console.log(tweetId)
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: this.getHeader(),
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'PUT',
      headers: this.getHeader(),
      body: JSON.stringify({ text }),
    });
  }

  getHeader() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    }
  }
}
