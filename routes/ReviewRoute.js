const { Router } = require("express");
const router = Router();
const { createReview,searchReviews } = require("../controllers/ReviewControllers");
const { verifyToken } = require("../routes/VerifyToken");


router.post("/:id", verifyToken, async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;
  try {
    const newReview = await createReview(req.user.id,comment, id );
    res.status(200).json(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


router.get("/:id", verifyToken, async (req, res) => {
  const { id } = req.params;

  try {
    const movieReviews = await searchReviews(id);
    res.status(200).json(movieReviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
