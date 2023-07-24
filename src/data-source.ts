import "reflect-metadata"
import { DataSource } from "typeorm"
import { User, Address } from "./entity/User"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "devadmin",
    password: "devdevdev",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Address],
    migrations: ['/src/migration/**/*.ts'],
    subscribers: [],
})

export default AppDataSource
 