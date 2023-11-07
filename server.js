const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json"); // 你的 JSON 数据文件
const db = require("./db.json");
server.use(jsonServer.defaults());
// server.use("/api", router); // 使用默认路由
// server.use("/api", customRoutes); // 使用自定义路由
server.get("/teamsAAA/:id/member", (req, res) => {
  const id  = req.params.id;
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
server.use(router);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
