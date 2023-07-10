import express from "express"; 
import { Request, Response } from "express";
import { Admin } from "typeorm";

const AdminRouter: express.Router = express.Router()

AdminRouter.get('/dealer/login', (req: Request, res: Response) => {
  res.send('Login for dealers route')
})

AdminRouter.post('/regiser/login', (req: Request, res: Response) => {
  res.send('login stuff goes here ')
})

AdminRouter.post('/dealer/create-vehicle', (req: Request, res: Response) => {
  res.send('create vehicles for sale here')
})

AdminRouter.post('/dealer/view-all', (req: Request, res: Response) => {
  res.send('fetch all vehicles')
})

AdminRouter.delete('/dealer/delete/:id', (req: Request, res: Response) => {
  res.send('delete listings')
})