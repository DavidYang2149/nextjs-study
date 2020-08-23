import Album from "../../../db/Album";

export default async (req, res) => {
  const albums = await Album.fetchAll();
  res.json(albums);
};
