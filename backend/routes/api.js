const express = require("express");

const router = express.Router();

const ideaController = require("../controllers/idea");

router.get("/", ideaController.getIdeas);

router.get("/ideas", ideaController.getIdeas);

router.post("/ideas", ideaController.postIdea);

router.patch("/ideas-upvote/:ideaId", ideaController.updateIdeasUpvote);

exports.routes = router;
