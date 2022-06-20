const express = require("express");
const mongodb = require("./mongoose"); // mongoose 폴더의 index.js
const Customer = require("./mongoose/schemas/customer");

const app = express();

mongodb.connect(); // MongoDB 연결

app.use(express.json({
  limit: '50mb' // 최대 50메가
})); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  // 3000번 포트로 웹 서버 실행
  console.log("Server started. port 3000.");
});

app.get("/customers", async (req, res) => {
  // localhost:3000/customers 접속 시 실행
  const customers = await Customer.find(); // 별도의 조회 조건 없이 customers 컬렉션이 모든 문서 조회
  console.log(customers);
  res.send(customers); // 결과를 클라이언트로 보냄
});

app.post("/customers/insert", async (req, res) => {
  const {name, email, phone, address} = req.body.params;
  const r = await Customer.create({name, email, phone, address});
  console.log(r);
  res.send(r);
});