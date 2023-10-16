"use client";
import Image from "next/image";
import profilepic from "../../../../images/image-jeremy.png";
import data from "../../../../data.json";
import Card from "./components/Card";
import { useState } from "react";

export default function Home() {
  const [navPick, setNavPick] = useState("weekly");
  return (
    <main className="main">
      <div className="profile-card">
        <div className="report-profile">
          <Image
            src={profilepic}
            alt="Picture of the user"
            height={65}
            className="profile-pic"
          ></Image>
          <div className="profile-info">
            <p className="profile-info-text">Report for</p>
            <h1 className="profile-info-name">Jeremy Robson</h1>
          </div>
        </div>
        <ol className="report-nav">
          <li className="report-nav-item" onClick={(e) => setNavPick("daily")}>
            Daily
          </li>
          <li className="report-nav-item" onClick={(e) => setNavPick("weekly")}>
            Weekly
          </li>
          <li
            className="report-nav-item"
            onClick={(e) => setNavPick("monthly")}
          >
            Monthly
          </li>
        </ol>
      </div>
      <ol className="category-cards">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Card item={item} navPick={navPick} />
            </li>
          );
        })}
      </ol>
    </main>
  );
}
