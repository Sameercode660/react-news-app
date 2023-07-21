import NewsItem from "./NewsItem";
import "./News.css";
import { useState } from "react";

export default function News() {
  let [dataObject, setDataObject] = useState([]);

  let [page, setPage] = useState(1);
  async function fetchingData() {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b80b074d23d74065905535ad044bbf0e&page=${page}&pageSize=15`
    );
    let data = await response.json();
    setDataObject(data.articles);
  }

  async function handlePrevious() {
    setPage(page-1)
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b80b074d23d74065905535ad044bbf0e&page=${page}&pageSize=15`
    );
    let data = await response.json();
    setDataObject(data.articles);
  }

  async function handleNext() {
    setPage(page+1)
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b80b074d23d74065905535ad044bbf0e&page=${page}&pageSize=15`
    );
    let data = await response.json();
    setDataObject(data.articles);
  }
  function triggerData() {
    fetchingData();
  }
  return (
    <>
      <div className="container">
        {dataObject.map((element) => {
          return (
            <NewsItem
              title={element.title}
              url={element.url}
              urlToImage={element.urlToImage}
            ></NewsItem>
          );
        })}
      </div>
      <div
        style={{ marginBottom: "20px" }}
        className=" my-4 container d-flex justify-content-between"
      >
        <button
          type="button"
          disabled={page <= 1}
          class="btn btn-outline-primary"
          onClick={handlePrevious}
        >
          &larr; Previous
        </button>
        <button type="button" class="btn btn-outline-primary"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
      <div className="loadButton">
        <button className="btn btn-outline-primary my-4" onClick={triggerData}>
          Load News
        </button>
      </div>
      <div className="footer bg-dark">
        <div className="list1-link list">
          <ul>
            <li>
              <a href="">Daily News</a>
            </li>
            <li>
              <a href="">Weekly News</a>
            </li>
            <li>
              <a href="">Monthly News</a>
            </li>
            <li>
              <a href="">Local News</a>
            </li>
          </ul>
        </div>
        <div className="list2-link list">
          <ul>
            <li>
              <a href="">Daily News</a>
            </li>
            <li>
              <a href="">Weekly News</a>
            </li>
            <li>
              <a href="">Monthly News</a>
            </li>
            <li>
              <a href="">Local News</a>
            </li>
          </ul>
        </div>
        <div className="list3-link list">
          <ul>
            <li>
              <a href="">Daily News</a>
            </li>
            <li>
              <a href="">Weekly News</a>
            </li>
            <li>
              <a href="">Monthly News</a>
            </li>
            <li>
              <a href="">Local News</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
