const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(
    jsonServer.rewriter({
        "/api/users/": "/user_list",
        "/api/users/1/show": "/user_1",
        "/api/users/2/show": "/user_2",
        "/api/users/3/show": "/user_3",
        "/api/users/4/show": "/user_4",
        "/api/books/": "/book_list",
        "/api/books/1/show": "/book_1",
        "/api/books/2/show": "/book_2",
        "/api/books/3/show": "/book_3",
        "/api/books/4/show": "/book_4",
        "/api/books/5/show": "/book_5",
        "/api/confarences/": "/confarences_list",
        "/api/confarences/1/show": "/confarence_1",
        "/api/confarences/2/show": "/confarence_2",
        "/api/confarences/3/show": "/confarence_3",
        "/api/confarences/4/show": "/confarence_4",
        "/api/confarences/5/show": "/confarence_5",
        "/api/confarences/6/show": "/confarence_6",
        "/api/confarences/7/show": "/confarence_7",
        "/api/confarences/8/show": "/confarence_8"
    })
);

server.use(middlewares);

server.use(function (req, res, next) {
  if (req.method === 'POST') {
    // POST送信を受ける場合、受けたPOSTレスポンスをGETに変更する
    req.method = 'GET';
    // req.query = req.body;
  }
  // Continue to JSON Server router
  next()
});

// db.json を基にデフォルトのルーティングを設定する
server.use(router);
// サーバをポート 3000 で起動する
server.listen(3001, () => {
  console.log('JSON Server is running');
});
