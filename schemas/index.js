const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/spa_mall") // 원래 mongodb://localhost:27017/spa_mall 이였는데 오류나서 바꿈 localhost 대신 127.0.0.1.로 
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;