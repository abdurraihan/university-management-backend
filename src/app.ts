import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: any, res: any) => {
  res.send('working university management  app ')
})

export default app
