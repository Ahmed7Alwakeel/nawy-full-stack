import express from "express"
import "dotenv/config"
import rateLimit from "express-rate-limit"
import helmet from "helmet"
import cors from "cors"
import mongoSanitize from "express-mongo-sanitize"
import AppError from "./utils/appError"
import errorController from "./controllers/error.controller"
import { authRouter } from "./routes/auth.route"
import { apartmentRoute } from "./routes/apartment.route"

export const app = express()

app.use(cors({}))
app.use(
	helmet({
		hsts: false,
		crossOriginResourcePolicy: false,
	})
)
const limiter = rateLimit({
	max: 1000,
	windowMs: 60 * 60 * 1000,
	message: "Too many requests, please try again in an hour!",
})
app.use("/api", limiter)
app.use(express.json())
app.use(mongoSanitize())
app.use(express.static("src/public"))
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/apartment", apartmentRoute)
app.all(
	"*",
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		next(new AppError("Not Found", "FAIL", 404))
	}
)

app.use(errorController)
