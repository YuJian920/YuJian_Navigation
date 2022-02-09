import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import "./index.less";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  // const [searchType, setSearchType] = useState("https://www.google.com/search?q=")

  /** 搜索事件 */
  const _searchEvent = (e) => {
    if (e.keyCode !== 13) return;
    const searchType = "https://www.google.com/search?q=";
    window.location.href = `${searchType}${encodeURIComponent(searchWord)}`;
  };

  return (
    <>
      <div className="Home flexEle">
        <div className="searchBox">
          <div className="searchBox__iconBox flexEle">
            <img
              className="searchBox__iconBox-icon"
              src={getImageUrl("google.png")}
            />
          </div>
          <div className="searchBox__inputBox flexEle">
            <input
              className="searchBox__inputBox-input"
              placeholder="输入并搜索"
              onKeyUp={_searchEvent}
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
          </div>
          <div className="searchBox__searchPopup"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
