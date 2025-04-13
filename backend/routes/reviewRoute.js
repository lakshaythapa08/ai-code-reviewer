const express=require("express");
const router=express.Router();
const getGeminiReview = require('../utils/gemini');

router.post('/', async (req, res) => {
  let {code}  = req.body;
  code=code.trim();
  console.log(code.length);

  if (!code || code.length==0) {
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