const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { calories } = req.query;
  try {
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&calories=${calories}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
