require('dotenv').config()

const express = require('express');

const app = express();

app.use((req, res) => {
  console.log("middlewsre")
})

//get all restaurants 
app.get("/api/v1/restaurants", (req, res) => {
  console.log("route handler run");
  
  // res.json("get all restaraunts")
  res.status(200).json({
    status: "success",
    data: {
      restaurant:
      ['cold stone','pizza hut'],
    },
  });
});


app.get("/api/v1/restaurants/:ddddid", (req, res) => {
  console.log(req)
});


app.post("/api/v1/restaurants", (req, res) => {
  console.log(req)
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});