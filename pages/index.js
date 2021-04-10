import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [joke, setJoke] = useState("");

  const [search, setSearch] = useState("");

  const fetchRandomJoke = () => {
    axios.get("/api/random").then((res) => setJoke(res.data.joke.joke));
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Yo Mama Jokes API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Yo Mama Jokes API</h1>

      <strong>{joke}</strong>
      <div className={styles.spacer + " " + styles.row}>
        <div className={styles.column}>
          <label>
            <strong>Search</strong>
          </label>
          <input
            type={"text"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.spacer}>
          <button onClick={fetchRandomJoke}>Random Joke</button>
        </div>
      </div>
    </div>
  );
}
