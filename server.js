import Express from 'express';
const app = Express();
import dotenv from 'dotenv';
dotenv.config();

//db and authenticateUser
import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not_found.js';
import errorHandlerMiddleware from './middleware/error_handler.js';
// import { start } from 'repl';

app.use(Express.json());

app.get(`/`, (req,res) => {
    // throw new Error('error')
    res.send('Welcome!')
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`)
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log(`Server is listening on port ${port}...`)
    } catch (error) {
        console.log(error);
    }
}

start();