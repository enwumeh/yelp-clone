require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());
   
//get all restaurants 
app.get("/api/v1/restaurants", async (req, res) => {

  try {
    const dbQuery = await db.query("SELECT * FROM restaurants")
    // console.log("HERE IS DB QUERY",dbQuery);
    // res.send(dbQuery)
  
    // res.json("get all restaraunts")
    res.status(200).json({
      status: "success",
      results: dbQuery.rows.length,
      data: {
        restaurants: dbQuery.rows,
      },
    });
  }
  catch (err) {
console.log(err)
  }
 });


  app.get("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const singleSpot = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
    // console.log("heres the id:", req.params.id)
    console.log(singleSpot.rows[0])
    res.status(200).json({
      status: "success",
      results: singleSpot.rows.length,
      data: {
        restaurant: singleSpot.rows[0]
      }
    })
  } 
  catch (err) {
    console.log(err)
  }
  });


app.delete("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const DELETED = await db.query("DELETE FROM restaurants WHERE id = $1 returning *", [req.params.id]);
    // console.log(DELETED)
    res.status(204).json({
      status: "success",
      data: DELETED
    })
  }
  catch (err) {
    console.log(err)
  }
});



app.post("/api/v1/restaurants", async (req, res) => {
  // console.log("post info", req.body)

  try {
    const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range]);
    console.log("RESULTS", results)
    // console.log("req.body", req.body)

    res.status(201).json({
      status: "success",
      data: {
        restaurant: req.body
      }
    })
  }
  catch (err) {
    console.log(err)
  }
 

});

//UPDATE AN ENTRY
app.put("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const result = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.id]);
    // console.log("updated", result)
    res.status(200).json({
      status:"success",
      data: {
        results: result
      }
    })
  }
 
catch (err) {
  console.log(err)
}


})
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

