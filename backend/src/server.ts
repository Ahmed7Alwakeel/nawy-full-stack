import { app } from "./app"
import mongoose from "mongoose"
import "dotenv/config"

mongoose
	.connect(process.env.MONGO_LOCAL_URL || "")
	.then(() => console.log("RunningDB"))

app.listen(process.env.PORT, () => console.log("RunningSERVER"))
