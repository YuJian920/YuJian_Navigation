import React from "react";
import { getImageUrl } from "../../utils";
import { IconMap } from '../../utils/utilsDict';
import "./index.less";

const ItemBox = () => {
  const _onItemClick = (URL) => {
    window.location.href = URL;
  };

  return (
    <div className="itemBox">
      {IconMap.map((mapItem) => {
        return (
          <div className="itemBox__item flexEle" key={mapItem.URL}>
            <img
              className="itemBox__item-icon"
              src={getImageUrl(mapItem.imgPath)}
              onClick={() => _onItemClick(mapItem.URL)}
            />
            <span className="itemBox__item-name">{mapItem.titile}</span>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemBox);
