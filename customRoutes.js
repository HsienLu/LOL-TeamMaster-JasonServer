const db = require("./db.json"); // 导入你的 JSON 数据
const jsonServer = require("json-server");
const server = jsonServer.create();


server.get("/teams/:teamId/members", (req, res) => {
  const teamInfo = [];
  const { teamId } = req.params;
  const team = db.teams.find((team) => team.id === parseInt(teamId));
  if (!team) {
    return res.status(404).json({ error: "Team not found" });
  }
  teamInfo.push(team);

  team.teamMembers.forEach((userId) => {
    teamInfo.push(db.users.find((user) => user.id === userId));
  });

  console.log("Team Members:", teamInfo);
  res.status(200).json(teamInfo);
});

module.exports = server;
