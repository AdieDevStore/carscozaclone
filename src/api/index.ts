import express from 'express';
import bodyParser from 'body-parser'
import AppDataSource from '../data-source';
import { User } from '../entity/User';

const app = express(); 
const PORT = 3000; 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.username = "Timber@test.com"
    user.password = "Saw"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
}); 


