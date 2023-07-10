import express from "express"; 
import { Request, Response } from "express";

const DealerRouter: express.Router = express.Router();

DealerRouter.get('/dealer/login', (req: Request, res: Response) => {
  res.send('Login for dealers route')
})

DealerRouter.post('/regiser/login', (req: Request, res: Response) => {
  res.send('login stuff goes here ')
})

DealerRouter.post('/dealer/create-vehicle', (req: Request, res: Response) => {
  res.send('create vehicles for sale here')
})

DealerRouter.post('/dealer/view-all', (req: Request, res: Response) => {
  res.send('fetch all vehicles')
})

DealerRouter.delete('/dealer/delete/:id', (req: Request, res: Response) => {
  res.send('delete listings')
})