import { useEffect, useState } from "react";
import "./App.css";
import PostItem from "./components/PostItem";

function App() {
  const [post, setPOst] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);
  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const finalRes = await res.json();
      setPOst(finalRes);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {}, [post]);


  return (
    <div>
      <button onClick={() => setPage(page - 1)} 
      disabled={page === 1}
      >Previous</button>
      <h1>{page}</h1>
      <button onClick={() => setPage(page + 1)}
      disabled={page===10}
      >Next</button>
      <br />
      {isLoading && "LoadedFetchData"}
      {error ? <p>{error}</p> : <PostItem data={post} />}
    </div>
  );
}

export default App;
