import chalk from "chalk"
import express from "express"
import userRouter,{routes as userRoutes} from "./modules/user/user.controller.js"
const bootstrap = async () => {

    const app = express()
    app.use(express.json())
    const port = 3000

    app.get("/", (req, res, next) => {
        res.status(200).json({ msg: "hello world in API BACKEND" })
    })


    app.use(userRoutes.base,userRouter)




    app.listen(port, (req, res, next) => {
        console.log(chalk.green(`server is running ${port}`));

    })
}
export default bootstrap