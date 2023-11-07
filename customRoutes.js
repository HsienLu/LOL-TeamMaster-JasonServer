const db = require("./db.json"); // 导入你的 JSON 数据

const express = require("express");
const router = express.Router();

router.get("/teams/:id/members", (req, res) => {
  const { id } = req.params.id;
  console.log(id);
  console.log(req.params);
  const team = db.teams.find((team) => team.id === parseInt(teamId));
  console.log(team);
  if (!team) {
    return res.status(404).json({ error: "Team not found" });
  }

  const teamMembers = team.teamMembers.map((userId) =>
    db.users.find((user) => user.id === userId)
  );

  console.log("Team Members:", teamMembers);
  res.json(teamMembers);
});

module.exports = router;
