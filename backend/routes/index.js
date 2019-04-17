const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const videoURL = "https://demo2697834.mockable.io/movies";

/* Fetch all videos */
router.get("/videos", (req, res) => {
  fetch(videoURL)
    .then(response => {
      return response.json();
    })
    .then( videos => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(videos);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
