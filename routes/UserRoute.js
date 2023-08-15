const { Router } = require("express");
const router = Router();
const {
  addToWatchlist,
  deleteFromWatchlist,
} = require("../controllers/UserControllers");
const { verifyToken } = require("../routes/VerifyToken");

router.put("/:movieid", verifyToken, async (req, res) => {
  try {
    const { boolean, movie } = req.body;
    console.log(boolean)
    console.log(movie)
    if (boolean) {
      const movieAdded = await addToWatchlist(req.user.id, movie);
      res.status(200).json({ ...movieAdded._doc, token: req.headers.authorization.split(" ")[1]} );
    } else {
      const movieDeleted = await deleteFromWatchlist(req.user.id, movie);
      res.status(200).json( { ...movieDeleted._doc, token: req.headers.authorization.split(" ")[1]} );
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
