const mongoose = require('mongoose');

const OrderSchema =new  mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        pinCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    orderitems: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    paymentInfo: {
        id: {
            type: String,
        },
        status: {
            type: String,
        }
    },
    paidAt: {
        type: Date,
        required: true
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    deliveredAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Order', OrderSchema);