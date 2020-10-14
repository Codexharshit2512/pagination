import React, { useState, useEffect, useRef } from "react";
import Post from "./components/Post";
import PaginationControl from "./components/PaginationControl";
import "./App.css";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(undefined);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPages(data.length / 10);
        setAllPosts(data);
      });
  }, []);

  useEffect(() => {
    if (allPosts.length > 0) {
      sliceArr(0, 10);
    }
  }, [allPosts]);

  useEffect(() => {
    if (posts.length != 0) {
      console.log("hello");
      const start = 10 * (page - 1);
      const end = start + 10;
      sliceArr(start, end);
    }
  }, [page]);

  const changePage = (pageNo) => {
    setPage(pageNo);
  };

  const sliceArr = (start, end) => {
    // console.log(start, " ", end);
    let temp = allPosts.slice(start, end);
    console.log(temp);
    setPosts(temp);
  };

  return (
    <div className="App">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {pages ? (
        <PaginationControl pages={pages} page={page} change={changePage} />
      ) : null}
    </div>
  );
}

export default App;
