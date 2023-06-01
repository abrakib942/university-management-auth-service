import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userController from './app/modules/users/user.controller'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', userController.createUser)

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
