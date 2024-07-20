import express from 'express'
import dotenv from "dotenv"
dotenv.config()

import { getHealth } from './controllers/health.js'
import { 
    postPlant, 
    getPlant, 
    getPlantId, 
    putPlantId,
    deletePlantId
    } from './controllers/plant.js'

import { handlePageNotFound } from './controllers/errors.js'

const app = express()

const PORT = process.env.PORT
app.use(express.json())

app.get("/health", getHealth)
app.post("/plant", postPlant )
app.get("/plants", getPlant)
app.get("/plant/:id",getPlantId)
app.put("/plant/:id", putPlantId)
app.delete("/plant/:id",deletePlantId)

app.use("*", handlePageNotFound)

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})