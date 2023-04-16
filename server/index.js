import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'


const app = express();
app.use(cors());

const CONNECTION_URL = "mongodb+srv://suleimenovaaruzhan13:buFoalpcRyeoc2kZ@cluster0.pc4n0cj.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);