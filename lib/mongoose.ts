import mongoose from "mongoose"
import { envVariables } from "@/config/config"

export const ConnectionWithMongoose = async () => {
    try {
        const response = await mongoose.connect(envVariables.mongoLocalUrl)
        if(response) {
            console.log('Database called 😊')            
        }
        else {
            console.log('Database connection error 😕')
            console.log(response)               
        }
    }
    catch(err: any) {
        console.error(err.message)
        throw new Error(err.message)
    }
}