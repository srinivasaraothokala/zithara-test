const express= require( 'express' );
const app = express();
const cors = require('cors');
const pool = require('./db');


app.use(cors());
app.use(express.json());


//ROUTES

//ENTER DATA
app.get('/getdata',async(req,res)=>{
  const page = parseInt(req.query.page) || 1;
  const pageSize = 20;
  const offset = (page - 1) * pageSize;

  try {
    // Fetch data from the database
    const result = await pool.query('SELECT * FROM sesh');
    const data = result.rows;

    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

















app.listen(5000,()=>{
  console.log("Server started on port 5000")
})