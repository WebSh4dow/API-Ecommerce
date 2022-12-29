import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import "reflect-metadata"
import productPropertiesRoutes from './routes/routes'
const app = express()


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(productPropertiesRoutes)

export default app;