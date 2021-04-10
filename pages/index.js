import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {

  const [joke, setJoke] = useState("");


  const fetchRandomJoke = () => {
    axios.get("/api/random").then(res => setJoke(res.data.joke))
  }


  useEffect(() => {
    fetchRandomJoke()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Yo Mama Jokes API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Yo Mama Jokes API</h1>
     <p> <strong>{joke}</strong></p>
      <button onClick={fetchRandomJoke}>Random Joke</button>
    </div>
  );
}
