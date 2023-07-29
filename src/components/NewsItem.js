import "./NewsItem.css";
import { useState } from "react";
import React from "react";

export default function NewsItem({ title, url, urlToImage}) {
  
 

  return (
    <>
      <div className="new-main-container"  >
        <div className="heading-content">
          <h1>
            <a href={url} target="_blank" rel="noreferrer">{title}</a>
          </h1>
          <div className="button">
            <button className="btn btn-outline-primary">
              <a className=""href={url} target="_blank" rel="noreferrer">
                Read More
              </a>
            </button>
          </div>
        </div>
        <div className="img-container">
          <img src={urlToImage} alt="" />
        </div>
      </div>
    </>
  );
}
