// hello.js
//新增中介層寫法範例
module.exports = (req, res, next) => {
    res.header('X-Hello', 'World')
    next()
  }