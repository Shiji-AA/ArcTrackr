import express from "express"
import { register } from "../Controller/AdminController.js"
const router= express.Router()


router.post("/adminregister",register)


export default router