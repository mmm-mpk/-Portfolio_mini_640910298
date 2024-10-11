const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// ใช้ body-parser เพื่อจัดการข้อมูล JSON
app.use(bodyParser.json());
app.use(bodyParser.text());

// เสิร์ฟไฟล์จากโฟลเดอร์ public
app.use(express.static("public"));

// สร้าง endpoint สำหรับรับ POST request
app.post("/data", (req, res) => {
  console.log("Received data:", req.body);
  res.send("Data received successfully!");
});

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
