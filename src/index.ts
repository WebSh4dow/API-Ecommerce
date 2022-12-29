import "reflect-metadata"
import {config} from 'dotenv'
config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
import app from './app'
import {AppDataSource} from './db'

async function main(){

try {
 await AppDataSource.initialize();
 app.listen(7000)
 console.log("server running on port",process.env.APP_PORT)

} catch (error) {
   console.log(error)
 }

}


main()

