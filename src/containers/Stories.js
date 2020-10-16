import React, { useEffect, useState, useRef } from "react";
import { getStoryIds, getTopStoryIds, getBestStoryIds } from "../Apis/Api";
import { Story } from "../components/Story";

export const Stories = () => {
  const [initCount, setInitCount] = useState(0);
  const [newCount, setNewCount] = useState(30);
  const [storyIds, setStoryIds] = useState([]);
  const newsCat = useRef("New");

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  const getNewStories = () => {
    getStoryIds().then((data) => setStoryIds(data));
    newsCat.current = "New";
    setInitCount((prevCount) => prevCount - prevCount);
    setNewCount((prevCount) => prevCount - prevCount + 30);
  };

  const getTopStories = () => {
    getTopStoryIds().then((data) => setStoryIds(data));
    newsCat.current = "Top";
    setInitCount((prevCount) => prevCount - prevCount);
    setNewCount((prevCount) => prevCount - prevCount + 30);
  };

  const getBestStories = () => {
    getBestStoryIds().then((data) => setStoryIds(data));
    newsCat.current = "Best";
    setInitCount((prevCount) => prevCount - prevCount);
    setNewCount((prevCount) => prevCount - prevCount + 30);
  };
  const loadMore = () => {
    setInitCount((prevCount) => prevCount + 30);
    setNewCount((prevCount) => prevCount + 30);
    console.log(initCount, newCount);
  };

  return (
    <>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <h1>Hacker News</h1>
          <h2>{newsCat.current} Stories</h2>
        </div>
        <h4>Filter By:</h4>
        <button onClick={getNewStories}>New Stories</button>
        <button onClick={getTopStories}>Top Stories</button>
        <button onClick={getBestStories}>Best Stories</button>
        <hr />
        {storyIds.slice(initCount, newCount).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
        <br />
      </div>
      <div style={{ margin: 20, alignItems: "center", textAlign: "center" }}>
        <h2>
          Displaying: {initCount} - {newCount}
        </h2>
        <button style={{ height: 40, width: 150 }} onClick={loadMore}>
          Load More
        </button>
      </div>
    </>
  );
};
