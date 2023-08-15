const User = require("../models/User");

exports.addToWatchlist = async (userid, movie) => {
  if (!movie) throw new Error("no movie provided");

  const user = await User.findById(
    { _id: userid },
  );
  

  if (user.watchlist.some(m => m === movie))
    throw new Error("la pelicula ya está en tu watchlist");

  const update = await User.findByIdAndUpdate(
    { _id: userid },
    { $push: { watchlist: movie } },
    { new: true },
  );
  return update;
};

exports.deleteFromWatchlist = async (userid, movie) => {
  if (!movie) throw new Error("no movie provided");

  const user = await User.findById(
    { _id: userid },
  );

  if (!user.watchlist.some(m => m.id === movie.id))
    throw new Error("la pelicula no está en tu watchlist");

  const deleted = await User.findOneAndUpdate(
    { _id: userid },
    { $pull: { watchlist: movie } },
    { new: true },
  );

  return deleted;
};
