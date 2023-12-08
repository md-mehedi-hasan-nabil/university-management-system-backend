import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(config.DB_URI as string);

        console.log("Database connection successful")

        app.listen(config.port, () => {
            console.log(`Server is listening on port ${config.PORT}`)
        })
    } catch (error) {
        console.error(error)
    }
}
