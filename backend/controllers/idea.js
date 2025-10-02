const Idea = require("../models/ideas");

exports.getIdeas = (req, res, next) => {
  const resJson = {
    success: true,
  };
  Idea.findAll()
    .then((ideas) => {
      const rawIdeas = ideas.map((idea) => idea.toJSON());
      resJson.data = rawIdeas;
      res.json(resJson);
    })
    .catch((err) => {
      console.error(err);
      resJson.success = false;
      resJson.data = "Something went wrong";
      res.json(resJson);
    });
};

exports.postIdea = (req, res, next) => {
  const idea = req.body.idea;
  const resJson = { success: true, data: "Successfull" };

  if (idea.length > 280) {
    resJson.success = false;
    resJson.data = "Idea should be less than 280 charecters";
    res.json(resJson);
  }

  Idea.create({ name: idea })
    .then((result) => {
      res.json(resJson);
    })
    .catch((err) => {
      console.error(err);
      resJson.success = false;
      resJson.data = "Something went wrong!! Please try again after some time";
      res.json(resJson);
    });
};

exports.updateIdeasUpvote = (req, res, next) => {
  const prodId = req.params.ideaId;
  const resJson = { success: true, data: "Successfull" };
  if (!prodId) {
    resJson.success = false;
    resJson.data = "Bad Request";
    res.status(400).json(resJson);
  }

  const upVote = req.body.upvote === "1" ? true : false;

  Idea.findByPk(prodId)
    .then((idea) => {
      if (upVote) {
        idea.upvotes = idea.upvotes + 1;
      } else {
        idea.upvotes = idea.upvotes - 1;
      }
      return idea.save();
    })
    .then((result) => {
      res.status(200).json(resJson);
    })
    .catch((err) => {
      console.error(err);
      resJson.success = false;
      resJson.data = "Something went wrong!! Please try again after some time";
      res.json(resJson);
    });
};
