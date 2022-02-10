import React, { useState, useRef } from "react";
import ItemBox from "../../components/ItemBox";
import { getImageUrl } from "../../utils";
import { CSSTransition } from "react-transition-group";
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
  const [animeStatus, setAnimeStatus] = useState(false);

  const popupRef = useRef(null);
  const modalRef = useRef(null);

  /** 搜索事件 */
  const _searchEvent = (e) => {
    if (e.keyCode !== 13) return;
    const serchURL = TypeDict[searchType].searchPath;
    window.location.href = `${serchURL}${encodeURIComponent(searchWord)}`;
  };

  return (
    <>
      <div className="Home flexEle">
        <div className="searchBox">
          <div
            className="searchBox__iconBox flexEle"
            onClick={() => setAnimeStatus(!animeStatus)}
          >
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
          <CSSTransition
            nodeRef={popupRef}
            in={animeStatus}
            classNames="searchPopupAn"
            timeout={200}
            mountOnEnter
            unmountOnExit
          >
            <div className="searchBox__searchPopup" ref={popupRef}>
              {TypeDict.map((mapItem, index) => {
                return (
                  <div
                    className="searchBox__searchPopup-item flexEle"
                    onClick={() => {
                      setSearchType(index);
                      setAnimeStatus(false);
                    }}
                    key={mapItem.type}
                  >
                    <img
                      className="itemImg"
                      src={getImageUrl(mapItem.imgPath)}
                      alt={mapItem.type}
                    />
                    <span className="itemTitle">{mapItem.type}</span>
                  </div>
                );
              })}
            </div>
          </CSSTransition>
        </div>
        <ItemBox />
        <CSSTransition
          nodeRef={modalRef}
          in={animeStatus}
          classNames="ModalAn"
          timeout={200}
          mountOnEnter
          unmountOnExit
        >
          <div
            className="Modal"
            onClick={() => setAnimeStatus(false)}
            ref={modalRef}
          />
        </CSSTransition>
      </div>
    </>
  );
};

export default Home;
