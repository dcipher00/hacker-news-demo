/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from "react";
import { getStory, getUser } from "../Apis/Api";
import moment from "moment";

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  const getUserData = () => {
    getUser(story.by).then((data) => setUserData(data));
    console.log(userData);
  };

  const commentCount = () => {
    let arr = [];
    for (var text in story.kids) {
      arr.push(text);
    }
    return arr.length;
  };

  return story && story.url ? (
    <div>
      <div style={{ paddingBottom: 5 }}>
        <a
          style={{ textDecoration: "none", color: "#12a4b8" }}
          href={story.url}
        >
          {story.title}
        </a>
      </div>
      <div>
        <span>
          <span style={{ color: "#867ceb" }}>Posted By: </span>
          <span onClick={getUserData}>{story.by}</span>
        </span>
        <br />
        <span>
          <span style={{ color: "#867ceb" }}>Posted At: </span>
          {moment
            .utc(story.time * 1000)
            .utcOffset(moment().utcOffset())
            .format("LTS")}
        </span>
        <br />
        <span>
          <span style={{ color: "#867ceb" }}>Comments: </span>
          <span>{commentCount()}</span>
        </span>
      </div>
      <hr />
    </div>
  ) : null;
});
