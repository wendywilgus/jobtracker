// const connectionString = `mongodb+srv://<username>:<password>@nodeexpressprojects.6l8xqog.mongodb.net/?retryWrites=true&w=majority`

import mongoose from "mongoose";

const connectDB = (url) => {
    return mongoose.connect(url)
};


export default connectDB;