import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { Product } from './models/Product.js';
import { productDataMock } from './data/productDataMock.js';
import { userRouter } from './routes/userRoutes.js';

//Configurations

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/api/user', userRouter);

// Mongoose setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Your server is running wild  on port ', PORT);
      // Product.insertMany(productDataMock);
    });
  })
  .catch((err) => console.log(`${err}. Unable to connect :(`));

//   export interface IApiResponse<T> {
//     code: number;
//     message: string;
//     data: T | null
//     meta?: IPaginationMeta
// }
