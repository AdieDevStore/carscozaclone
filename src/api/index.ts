import express from 'express';
import bodyParser from 'body-parser'
import UserRoutes from './Routes /User/UserRoutes';

const app = express(); 
const PORT = 3000; 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(UserRoutes)

app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
}); 


