import express from 'express';
import { placeOrder } from '../controllers/orderController';
import userMiddleware from '../middleware/userMiddleware';

const orderRouter = express.Router();

orderRouter.post('/place', userMiddleware, placeOrder);

export default orderRouter
