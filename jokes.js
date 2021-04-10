import fs from "fs";

export default function getJokes() {

  const jokes = fs.readFileSync("/public/jokes.json", "utf-8");
  return jokes;
}
