// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
import getJokes from "../../jokes"


export default async (req, res) => {
  const jokes = getJokes();
  // const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
  res.status(200).json({joke: randomJoke.normalize()})
}
