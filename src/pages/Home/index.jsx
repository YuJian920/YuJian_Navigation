import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import "./index.less";

const TypeDict = [
  {
    type: "Google",
    imgPath: "google.png",
    searchPath: "https://www.google.com/search?q=",
  },
  {
    type: "Baidu",
    imgPath: "baidu.png",
    searchPath: "https://www.baidu.com/s?&wd=",
  },
];

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [searchType, setSearchType] = useState(0);

  /** 搜索事件 */
  const _searchEvent = (e) => {
    if (e.keyCode !== 13) return;
    const serchURL = TypeDict[searchType].searchPath;
    window.location.href = `${serchURL}${encodeURIComponent(searchWord)}`;
  };

  const _onSearhChange = (value) => {
    TypeDict[value].type;
  };

  return (
    <>
      <div className="Home flexEle">
        <div className="searchBox">
          <div className="searchBox__iconBox flexEle">
            <img
              className="searchBox__iconBox-icon"
              src={getImageUrl(TypeDict[searchType].imgPath)}
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
          <div
            className="searchBox__searchPopup fadeIn animated"
            style={{ display: "none" }}
          >
            <div
              className="searchBox__searchPopup-item flexEle"
              onClick={() => setSearchType(0)}
            >
              <img
                className="itemImg"
                src={getImageUrl("google.png")}
                alt="Google.com"
              />
              <span className="itemTitle">Google</span>
            </div>
            <div
              className="searchBox__searchPopup-item flexEle"
              onClick={() => setSearchType(1)}
            >
              <img
                className="itemImg"
                src={getImageUrl("baidu.png")}
                alt="Baidu.com"
              />
              <span className="itemTitle">百度</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
