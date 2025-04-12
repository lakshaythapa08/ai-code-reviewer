const express=require("express");
const router=express.Router();
const getGeminiReview = require('../utils/gemini');

router.post('/', async (req, res) => {
  const {code}  = req.body;
  console.log(req.body);

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    const review = await getGeminiReview(code);
    res.json({ review });
  } catch (error) {
    res.status(500).json({ error: `Gemini API failed: ${error}`});
  }
});


module.exports = router;