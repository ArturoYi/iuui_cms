import publicRouter from "./public"
import baseRouter from "./base"
import layoutRouter from "./layout"
import navigationRouter from "./navigation"
import formRouter from "./form"
import dataRouter from "./data"
import feedbackRouter from "./feedback"
import otherRouter from "./other"

const homeRouter = [
    ...publicRouter,
    baseRouter,
    layoutRouter,
    navigationRouter,
    formRouter,
    dataRouter,
    feedbackRouter,
    otherRouter
]

export default homeRouter