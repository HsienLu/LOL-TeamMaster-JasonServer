// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // 假設您的JSON數據文件名為db.json
// const middlewares = jsonServer.defaults();

// // 自定義中間件來處理關聯資訊
// server.use((req, res, next) => {
//   if (req.method === 'GET' && req.url.includes('/teams/')) {
//     // 處理需要關聯使用者詳細資訊的路由，例如 /teams/1
//     const teamId = parseInt(req.params.id);
//     const teams = router.db.get('teams').value();
//     const users = router.db.get('users').value();

//     const team = teams.find((t) => t.id === teamId);
//     if (team) {
//       const usersInTeam = team.userIds.map((userId) => users.find((user) => user.id === userId));
//       team.user = usersInTeam;
//     }

//     res.json(team);
//   } else {
//     // 對於其他路由，使用JSON Server的默認中間件
//     next();
//   }
// });

// server.use(middlewares);
// server.use(router);

// const port = 3000;
// server.listen(port, () => {
//   console.log(`JSON Server運行在 http://localhost:${port}`);
// });
