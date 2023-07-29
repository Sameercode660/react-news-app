import NewsItem from "./NewsItem";
import "./News.css";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import Spinner from "./Spinner";
import { useEffect } from "react";
import Footer from "./Footer";

export default function News() {
  let [dataObject, setDataObject] = useState([]);
  let [totalResult, setTotalResult] = useState(0)
  let [page, setPage] = useState(1);
  let [load, setLoad] = useState(true)

  async function fetchingData() {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fb98ecc91dc847508d7619cd75a4ba82&page=${page}&pageSize=15`
    );
    let data = await response.json();
    setLoad(false)
    setTotalResult(data.totalResults)
    setDataObject(data.articles);
  }

 

  async function handleNext() {
    setPage(page + 1);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fb98ecc91dc847508d7619cd75a4ba82&page=${page}&pageSize=15`
    );
    let data = await response.json();
    console.log(dataObject.length)
    setDataObject(dataObject.concat(data.articles));
  }
  function triggerData() {
    fetchingData();
  }
  useEffect(triggerData, [])
  return (
    <>
      <div className="container">
        <InfiniteScroll
          dataLength={dataObject.length}
          next={handleNext}
          hasMore={dataObject.length < totalResult}
          loader={<Spinner></Spinner>}
        >
          {load ? <Spinner></Spinner> : dataObject.map((element) => {
            return (
              <NewsItem
                title={element.title}
                url={element.url}
                urlToImage={element.urlToImage}
              ></NewsItem>
            );
          })}
        </InfiniteScroll>
      </div>
      <Footer></Footer>
    </>
  );
}
