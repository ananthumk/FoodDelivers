import orderModel from "../models/orderModels";
import userModel from "../models/userModels";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// place order for frontend
const placeOrder = async ( req, res ) => {
    try {
        
        const frontend_url = 'https://fooddeliveringapp.vercel.app/'

        const newOrder =  new orderModel({
            userId: req.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}})

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price *100*83
            },
            quantity: item.quantity 
        }))

        line_items.push({
            price_data: {
                currency: "inr",
                product_data:{
                    name: "Delivery Charges"
                },
                unit_amount: 2*100*83
            },
            quantity: 1
        })

        const sesssion = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })
        
        res.json({success: true, session_url: sesssion.url})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

export { placeOrder }