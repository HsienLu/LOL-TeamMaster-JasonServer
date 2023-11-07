const jsonServer = require('json-server')
const jsonServerAuth = require('json-server-auth');
const data = require('./db.json');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServerAuth);
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
  })
  server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})
//查詢隊伍成員的功能
server.get('/teamsMember/:id', (req, res) => {
    
    const teamId = req.params.id-1;
    let teamMembers =[]
    if (data.teams[teamId]) {
        const teamMerberId=data.teams[teamId].teamMerberId
        // console.log(teamMerberId)
        
        teamMerberId.forEach((v)=>{
            // console.log(v)
            const teamMember =data.users.find((i)=>i.id === v)
            teamMembers.push(teamMember)
            // let AAA=data.users.filter((i)=>{i.id===v})
            
            // console.log(AAA)
        })
        // const teamMemberIds = data.teams;
        console.log(teamMembers)
        res.status(200).json(teamMembers);
        
    } else {
        res.status(404).json({ message: '找不到隊伍' });
    }

  });
  
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
  })