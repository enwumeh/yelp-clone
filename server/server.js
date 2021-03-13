require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();
const db = require('./db');

app.use(express.json());
   
//get all restaurants 
app.get("/api/v1/restaurants", async (req, res) => {

 const dbQuery = await db.query("SELECT * FROM restaurants")
  console.log(dbQuery);
  
  // res.json("get all restaraunts")
  res.status(200).json({
    status: "success",
    data: {
      restaurant:
      ['cold stone','pizza hut'],
    },
  });
});


app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req)
  res.status(200).json({
    status: "success"
  })
});

app.delete("api/v1/restaurants/:id"), (req, res) => {
  res.status(204).json({
    status: "success"
  })
}


app.post("/api/v1/restaurants", (req, res) => {
  console.log("ffff", req.params.id, req.body)
  res.status(201).json({
    status: "success",
    data: {
      restaurant: ["cheeseburger palace"]
    }
  })

})

app.put("api/v1/restaurants/:id"), (req, res) => {
  console.log("ssssfff")

  console.log(req.params.id);
  console.log(req.body);
}
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

