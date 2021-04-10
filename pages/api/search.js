// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../mongodb";

export default async (req, res) => {
  const { search } = req.body;

  const { db } = await connectToDatabase();

  const jokes = await db
    .collection("jokes")
    .find({ $text: { $search: search } })
    .toArray();

  res.status(200).json({ jokes });
};
