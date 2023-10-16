import React from "react";
import Image from "next/image";
import ellipsis from "../../../../../images/icon-ellipsis.svg";

export default function Card({ item, navPick }) {
  const timeframeData = item.timeframes[navPick];
  return (
    <div className="category-card">
      <div className="category-card-banner" id={item.banner}></div>
      <div className="category-card-stats">
        <div className="category-card-stats-top">
          <p className="category-title">{item.title}</p>
          <Image className="ellipsis" src={ellipsis} alt="ellipsis"></Image>
        </div>
        <div className="category-card-stats-bottom">
          <p id="hours">{timeframeData.current}hrs</p>
          <p id="lastweek">
            {timeframeData.text}- {timeframeData.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
