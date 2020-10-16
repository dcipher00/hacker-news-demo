import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const bestStoriesUrl = `${baseUrl}/beststories.json`;
export const storyUrl = `${baseUrl}/item/`;
export const userUrl = `${baseUrl}/user/`;

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);

  return result.data;
};

export const getUser = async (userId) => {
  const result = await axios.get(`${userUrl + userId}.json`);

  return result.data;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);

  return result.data;
};

export const getTopStoryIds = async () => {
  const result = await axios.get(topStoriesUrl);

  return result.data;
};

export const getBestStoryIds = async () => {
  const result = await axios.get(bestStoriesUrl);

  return result.data;
};
