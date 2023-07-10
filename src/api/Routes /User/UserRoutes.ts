import express from "express"; 
import { Request, Response } from "express";


const UserRoutes: express.Router = express.Router(); 

// these are for general users 
// all associated things for regular users happen here

UserRoutes.get('/login', (req: Request, res: Response, next) => {
  res.send('login stuff happens here')
})

UserRoutes.post('/login', async (req: Request, res: Response) => {
  
})

UserRoutes.get('/register', (req: Request, res: Response, next) => {
  res.send('register a user here')
})

UserRoutes.post('/register', (req: Request, res: Response) => {
  res.send('Register post route')
})

export default UserRoutes