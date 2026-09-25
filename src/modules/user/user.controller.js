import { Router } from "express"
import { Timestamp } from "mongodb"
import { successRes } from "../../utils/success.res.js"

const router = Router()

export const routes = {
    base: "/users",
    hello: "/",
    post: "/post"
}
router.get(routes.hello, (req, res, next) => {
    res.status(200).json({ msg: "user module" })
})
router.get(routes.post, (req, res, next) => {
    successRes({ res })
})


export default router