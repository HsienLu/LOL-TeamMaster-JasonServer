const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // 你的 JSON 数据文件
const customRoutes = require("./customRoutes"); // 导入自定义路由

server.use(jsonServer.defaults());
server.use("/api", router); // 使用默认路由
server.use("/custom", customRoutes); // 使用自定义路由

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
