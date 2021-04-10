// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getJokes from "../../jokes";

export default async (req, res) => {
  const { search } = req.body;

  const jokes = getJokes();

  const filteredJokes = jokes.filter((joke) => joke.includes(search));

  const randomJoke = filteredJokes[Math.floor(Math.random() * filteredJokes.length)];
  res.status(200).json({ joke: randomJoke.normalize() });
};
