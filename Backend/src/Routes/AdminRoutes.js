import express from "express"
import { adminLogin, register } from "../Controller/AdminController.js"
const router= express.Router()


router.post("/adminregister",register)
router.post("/admin",adminLogin)

export default router