import { connectToDatabase } from "../../mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const joke = (
    await db
      .collection("jokes")
      .aggregate([{ $sample: { size: 1 } }])
      .toArray()
  )[0];

  res.status(200).json({ joke: joke });
};
