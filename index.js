import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import db from "./config/Database.js"
import router from "./routes/index.js";
import Users from "./models/UserModel.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log("Database Connected...");
    await Users.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`) 
});
