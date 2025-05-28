import express from "express"
import { addSiteVisit, adminLogin, getAllSiteVisit, register } from "../Controller/AdminController.js"
const router= express.Router()


router.post("/adminregister",register)
router.post("/admin",adminLogin)
router.post("/addsitevisit",addSiteVisit)
router.get("/getallsitevisits",getAllSiteVisit)



export default router