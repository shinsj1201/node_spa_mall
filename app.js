const express = require('express');
const app = express();
const port = 3000;


const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts");
const connect = require("./schemas");
connect();

app.use(express.json());  //body로 전달 받은 JSON 데이터는 바로 사용할 수 없어요!
                          //Express.js에서 제공하는 JSON middleware를 사용해 body로 전달된 데이터를 사용할 수 있도록 해봅니다!
                          //하단의 middleware가 app.use("/api", [goodsRouter]) 보다 위에 작성되어야 합니다.

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter, cartsRouter]);

app.get('/', (req, res) => {
  res.send("Hello World!    반가워11");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!11");
});